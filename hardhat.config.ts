import "@typechain/hardhat";
import "hardhat-gas-reporter";
import "hardhat-abi-exporter";
import "solidity-coverage";
import "@nomiclabs/hardhat-ethers"
import "@openzeppelin/hardhat-upgrades"
import "./tasks/token_deploy";

module.exports = {
    defaultNetwork: 'hardhat',
    defender: {
        apiKey: "[apiKey]",
        apiSecret: "[apiSecret]",
    },
    abiExporter: {
        path: './abi',
        runOnCompile: true,
        clear: true,
    },
    bytecodeExporter: {
        path: './data',
        runOnCompile: true,
        clear: true,
        // flat: true,
        // only: [':ERC20$'],
    },
    networks: {
        hardhat: {
            allowUnlimitedContractSize: true,
            chainId: 900,
        },
        morph: {
            url: "https://rpc.morphl2.io",
            chainId: 2818,
            gas: 'auto',
            gasPrice: 'auto',
            accounts: []
        }
    },
    solidity: {
        compilers: [
            {
                version: '0.6.12',
                settings: {
                    optimizer: { enabled: true, runs: 10_000 },
                },
            },
        ],
    },
    contractSizer: {
        alphaSort: true,
        runOnCompile: true,
        disambiguatePaths: false,
    },
    paths: {
        sources: "./contracts",
        tests: "./integration-test",
        cache: "./cache-hardhat",
        artifacts: "./artifacts",
        deployConfig: './src/deploy-config',
    }
}