import "@nomiclabs/hardhat-web3";
import "@nomiclabs/hardhat-ethers";
import "@nomiclabs/hardhat-waffle";

import { task } from "hardhat/config";

const THROWAWAY_ADDRESS = "0x0000000000000000000000000000000000000001";
let proxyAdminAddress = "";
let ownerAddress = "";
let masterMinterAddress = "";
let pauserAddress = "0x0000000000000000000000000000000000000001";
let blacklisterAddress = "0x0000000000000000000000000000000000000001";

// yarn hardhat deploy-l2-usdc-v2-1 --network
task("deploy-l2-usdc-v2-1")
    .setAction(async (taskArgs, hre) => {
        console.log(`Proxy Admin:   ${proxyAdminAddress}`);
        console.log(`Owner:         ${ownerAddress}`);
        console.log(`Master Minter: ${masterMinterAddress}`);
        console.log(`Pauser:        ${pauserAddress}`);
        console.log(`Blacklister:   ${blacklisterAddress}`);
        const TokenFactory = await hre.ethers.getContractFactory("FiatTokenV2_1")
        const token = await TokenFactory.deploy()
        await token.deployed()
        console.log("Deployed implementation contract at", token.address);

        console.log("Initializing implementation contract with dummy values...");
        let res = await token.initialize(
            "",
            "",
            "",
            0,
            THROWAWAY_ADDRESS,
            THROWAWAY_ADDRESS,
            THROWAWAY_ADDRESS,
            THROWAWAY_ADDRESS
        );
        let rec = await res.wait()
        console.log(`initialize ${rec.status == 1}`);

        res = await token.initializeV2("");
        rec = await res.wait()
        console.log(`initializeV2 ${rec.status == 1}`);

        res = await token.initializeV2_1(THROWAWAY_ADDRESS);
        rec = await res.wait()
        console.log(`initializeV2_1 ${rec.status == 1}`);

        console.log("Deploying proxy contract...");
        const ProxyFactory = await hre.ethers.getContractFactory("FiatTokenProxy")
        const proxy = await ProxyFactory.deploy(token.address)
        await proxy.deployed()
        console.log("Deployed proxy contract at", proxy.address);
        console.log("Reassigning proxy contract admin...");
        // need to change admin first, or the call to initialize won't work
        // since admin can only call methods in the proxy, and not forwarded methods
        res = await proxy.changeAdmin(proxyAdminAddress);
        rec = await res.wait()
        console.log(`change proxy admin  ${rec.status == 1}...`);

        console.log(`Initializing proxy contract ...`);
        // Pretend that the proxy address is a FiatTokenV1 - this is fine because the
        // proxy will forward all the calls to the FiatTokenV1 impl
        const proxyAsV2_1 = await TokenFactory.attach(proxy.address);
        res = await proxyAsV2_1.initialize(
            "USD//C",
            "USDC",
            "USD",
            6,
            masterMinterAddress,
            pauserAddress,
            blacklisterAddress,
            ownerAddress
        );
        rec = await res.wait()
        console.log(`initialize ${rec.status == 1}`);

        res = await proxyAsV2_1.initializeV2("USD Coin");
        rec = await res.wait()
        console.log(`initializeV2 ${rec.status == 1}`);

        res = await proxyAsV2_1.initializeV2_1(THROWAWAY_ADDRESS);
        rec = await res.wait()
        console.log(`initializeV2_1 ${rec.status == 1}`);
    })