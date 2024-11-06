/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  Blacklistable,
  BlacklistableInterface,
} from "../../../contracts/v1/Blacklistable";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_account",
        type: "address",
      },
    ],
    name: "Blacklisted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "newBlacklister",
        type: "address",
      },
    ],
    name: "BlacklisterChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_account",
        type: "address",
      },
    ],
    name: "UnBlacklisted",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_account",
        type: "address",
      },
    ],
    name: "blacklist",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "blacklister",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_account",
        type: "address",
      },
    ],
    name: "isBlacklisted",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_account",
        type: "address",
      },
    ],
    name: "unBlacklist",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_newBlacklister",
        type: "address",
      },
    ],
    name: "updateBlacklister",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b5061001a3361001f565b610041565b600080546001600160a01b0319166001600160a01b0392909216919091179055565b6107b9806100506000396000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c8063bd1024301161005b578063bd1024301461011b578063f2fde38b14610123578063f9f92be414610156578063fe575a87146101895761007d565b80631a895266146100825780638da5cb5b146100b7578063ad38bf22146100e8575b600080fd5b6100b56004803603602081101561009857600080fd5b503573ffffffffffffffffffffffffffffffffffffffff166101d0565b005b6100bf6102b4565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b6100b5600480360360208110156100fe57600080fd5b503573ffffffffffffffffffffffffffffffffffffffff166102d0565b6100bf610437565b6100b56004803603602081101561013957600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16610453565b6100b56004803603602081101561016c57600080fd5b503573ffffffffffffffffffffffffffffffffffffffff166105a6565b6101bc6004803603602081101561019f57600080fd5b503573ffffffffffffffffffffffffffffffffffffffff1661068d565b604080519115158252519081900360200190f35b60015473ffffffffffffffffffffffffffffffffffffffff163314610240576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c815260200180610726602c913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff811660008181526002602052604080822080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00169055517f117e3210bb9aa7d9baff172026820255c6f6c30ba8999d1c2fd88e2848137c4e9190a250565b60005473ffffffffffffffffffffffffffffffffffffffff1690565b60005473ffffffffffffffffffffffffffffffffffffffff16331461035657604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b73ffffffffffffffffffffffffffffffffffffffff81166103c2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260328152602001806107526032913960400191505060405180910390fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83811691909117918290556040519116907fc67398012c111ce95ecb7429b933096c977380ee6c421175a71a4a4c6c88c06e90600090a250565b60015473ffffffffffffffffffffffffffffffffffffffff1681565b60005473ffffffffffffffffffffffffffffffffffffffff1633146104d957604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b73ffffffffffffffffffffffffffffffffffffffff8116610545576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260268152602001806107006026913960400191505060405180910390fd5b6000546040805173ffffffffffffffffffffffffffffffffffffffff9283168152918316602083015280517f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09281900390910190a16105a3816106b8565b50565b60015473ffffffffffffffffffffffffffffffffffffffff163314610616576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c815260200180610726602c913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff811660008181526002602052604080822080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00166001179055517fffa4e6181777692565cf28528fc88fd1516ea86b56da075235fa575af6a4b8559190a250565b73ffffffffffffffffffffffffffffffffffffffff1660009081526002602052604090205460ff1690565b600080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff9290921691909117905556fe4f776e61626c653a206e6577206f776e657220697320746865207a65726f2061646472657373426c61636b6c69737461626c653a2063616c6c6572206973206e6f742074686520626c61636b6c6973746572426c61636b6c69737461626c653a206e657720626c61636b6c697374657220697320746865207a65726f2061646472657373a26469706673582212203cdf5288372fa484a885f13eb6fabf0ce66147632065cf763c277e5eb368a24064736f6c634300060c0033";

type BlacklistableConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: BlacklistableConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Blacklistable__factory extends ContractFactory {
  constructor(...args: BlacklistableConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Blacklistable> {
    return super.deploy(overrides || {}) as Promise<Blacklistable>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Blacklistable {
    return super.attach(address) as Blacklistable;
  }
  override connect(signer: Signer): Blacklistable__factory {
    return super.connect(signer) as Blacklistable__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BlacklistableInterface {
    return new utils.Interface(_abi) as BlacklistableInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Blacklistable {
    return new Contract(address, _abi, signerOrProvider) as Blacklistable;
  }
}
