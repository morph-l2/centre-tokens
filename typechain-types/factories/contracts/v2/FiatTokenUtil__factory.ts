/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  FiatTokenUtil,
  FiatTokenUtilInterface,
} from "../../../contracts/v2/FiatTokenUtil";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "fiatToken",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "authorizer",
        type: "address",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "nonce",
        type: "bytes32",
      },
    ],
    name: "TransferFailed",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "params",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "signatures",
        type: "bytes",
      },
      {
        internalType: "bool",
        name: "atomic",
        type: "bool",
      },
    ],
    name: "transferWithMultipleAuthorizations",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b506040516109f13803806109f18339818101604052602081101561003357600080fd5b5051600080546001600160a01b039092166001600160a01b031990921691909117905561098c806100656000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063e5c880f014610030575b600080fd5b6100f46004803603606081101561004657600080fd5b81019060208101813564010000000081111561006157600080fd5b82018360208201111561007357600080fd5b8035906020019184600183028401116401000000008311171561009557600080fd5b9193909290916020810190356401000000008111156100b357600080fd5b8201836020820111156100c557600080fd5b803590602001918460018302840111640100000000831117156100e757600080fd5b9193509150351515610108565b604080519115158252519081900360200190f35b600060a8850480610164576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260238152602001806109346023913960400191505060405180910390fd5b60a8810286146101bf576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602a8152602001806108dc602a913960400191505060405180910390fd5b80604185041480156101d357506041810284145b610228576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602e815260200180610906602e913960400191505060405180910390fd5b6000805b8281101561074a57600060a8820290506000604183029050606061028a8c8c8590866028019261025e939291906108b3565b604051602001808383808284378083019250505092505050604051602081830303815290604052610756565b905060608c8c856028019060a88701926102a6939291906108b3565b604051602001808383808284378083019250505092505050604051602081830303815290604052905060008b8b858181106102dd57fe5b9050013560f81c60f81b60f81c905060608c8c86600101906041880192610306939291906108b3565b60405160200180838380828437808301925050509250505060405160208183030381529060405290506000606060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663e3ee160e60e01b878787604051602001808260ff1681526020019150506040516020818303038152906040528760405160200180867bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260040185805190602001908083835b6020831061040d57805182527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe090920191602091820191016103d0565b51815160209384036101000a7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff018019909216911617905287519190930192870191508083835b6020831061049157805182527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe09092019160209182019101610454565b51815160209384036101000a7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff018019909216911617905286519190930192860191508083835b6020831061051557805182527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe090920191602091820191016104d8565b51815160209384036101000a7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff018019909216911617905285519190930192850191508083835b6020831061059957805182527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0909201916020918201910161055c565b6001836020036101000a038019825116818451168082178552505050505050905001955050505050506040516020818303038152906040526040518082805190602001908083835b6020831061061e57805182527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe090920191602091820191016105e1565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d8060008114610680576040519150601f19603f3d011682016040523d82523d6000602084013e610685565b606091505b50915091508c8015610695575081155b156106a3576106a38161079d565b81156106b457600190990198610736565b60008680602001905160408110156106cb57600080fd5b50518651909150600090602088019060808110156106e857600080fd5b5060600151604051909150819073ffffffffffffffffffffffffffffffffffffffff8416907f13cab104924a28ca77b3228596ebc8e597aa628ce47d39429f3cb62b9a9ac60f90600090a350505b50506001909601955061022c945050505050565b50149695505050505050565b60148101516028909101516040805173ffffffffffffffffffffffffffffffffffffffff938416602082015292909116828201528051808303820181526060909201905290565b60648151101561080e57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601a60248201527f46696174546f6b656e5574696c3a2063616c6c206661696c6564000000000000604482015290519081900360640190fd5b6040517f08c379a0000000000000000000000000000000000000000000000000000000008152602060048201908152604483810180516024850152805190938493928392910190606487019080838360005b83811015610878578181015183820152602001610860565b50505050905090810190601f1680156108a55780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b600080858511156108c2578182fd5b838611156108ce578182fd5b505082019391909203915056fe46696174546f6b656e5574696c3a206c656e677468206f6620706172616d7320697320696e76616c696446696174546f6b656e5574696c3a206c656e677468206f66207369676e61747572657320697320696e76616c696446696174546f6b656e5574696c3a206e6f207472616e736665722070726f7669646564a26469706673582212203c1742de6dab85f9d2e6e328c7ff066f7436145638522ef86e0ad3b7701e843164736f6c634300060c0033";

type FiatTokenUtilConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: FiatTokenUtilConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class FiatTokenUtil__factory extends ContractFactory {
  constructor(...args: FiatTokenUtilConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    fiatToken: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<FiatTokenUtil> {
    return super.deploy(fiatToken, overrides || {}) as Promise<FiatTokenUtil>;
  }
  override getDeployTransaction(
    fiatToken: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(fiatToken, overrides || {});
  }
  override attach(address: string): FiatTokenUtil {
    return super.attach(address) as FiatTokenUtil;
  }
  override connect(signer: Signer): FiatTokenUtil__factory {
    return super.connect(signer) as FiatTokenUtil__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): FiatTokenUtilInterface {
    return new utils.Interface(_abi) as FiatTokenUtilInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): FiatTokenUtil {
    return new Contract(address, _abi, signerOrProvider) as FiatTokenUtil;
  }
}
