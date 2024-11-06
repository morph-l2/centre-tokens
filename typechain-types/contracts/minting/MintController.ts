/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../common";

export interface MintControllerInterface extends utils.Interface {
  functions: {
    "configureController(address,address)": FunctionFragment;
    "configureMinter(uint256)": FunctionFragment;
    "decrementMinterAllowance(uint256)": FunctionFragment;
    "getMinterManager()": FunctionFragment;
    "getWorker(address)": FunctionFragment;
    "incrementMinterAllowance(uint256)": FunctionFragment;
    "owner()": FunctionFragment;
    "removeController(address)": FunctionFragment;
    "removeMinter()": FunctionFragment;
    "setMinterManager(address)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "configureController"
      | "configureMinter"
      | "decrementMinterAllowance"
      | "getMinterManager"
      | "getWorker"
      | "incrementMinterAllowance"
      | "owner"
      | "removeController"
      | "removeMinter"
      | "setMinterManager"
      | "transferOwnership"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "configureController",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "configureMinter",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "decrementMinterAllowance",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getMinterManager",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getWorker",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "incrementMinterAllowance",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "removeController",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "removeMinter",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setMinterManager",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(
    functionFragment: "configureController",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "configureMinter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "decrementMinterAllowance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getMinterManager",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getWorker", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "incrementMinterAllowance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "removeController",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeMinter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setMinterManager",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;

  events: {
    "ControllerConfigured(address,address)": EventFragment;
    "ControllerRemoved(address)": EventFragment;
    "MinterAllowanceDecremented(address,address,uint256,uint256)": EventFragment;
    "MinterAllowanceIncremented(address,address,uint256,uint256)": EventFragment;
    "MinterConfigured(address,address,uint256)": EventFragment;
    "MinterManagerSet(address,address)": EventFragment;
    "MinterRemoved(address,address)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ControllerConfigured"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ControllerRemoved"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "MinterAllowanceDecremented"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "MinterAllowanceIncremented"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "MinterConfigured"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "MinterManagerSet"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "MinterRemoved"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export interface ControllerConfiguredEventObject {
  _controller: string;
  _worker: string;
}
export type ControllerConfiguredEvent = TypedEvent<
  [string, string],
  ControllerConfiguredEventObject
>;

export type ControllerConfiguredEventFilter =
  TypedEventFilter<ControllerConfiguredEvent>;

export interface ControllerRemovedEventObject {
  _controller: string;
}
export type ControllerRemovedEvent = TypedEvent<
  [string],
  ControllerRemovedEventObject
>;

export type ControllerRemovedEventFilter =
  TypedEventFilter<ControllerRemovedEvent>;

export interface MinterAllowanceDecrementedEventObject {
  msgSender: string;
  minter: string;
  decrement: BigNumber;
  newAllowance: BigNumber;
}
export type MinterAllowanceDecrementedEvent = TypedEvent<
  [string, string, BigNumber, BigNumber],
  MinterAllowanceDecrementedEventObject
>;

export type MinterAllowanceDecrementedEventFilter =
  TypedEventFilter<MinterAllowanceDecrementedEvent>;

export interface MinterAllowanceIncrementedEventObject {
  _msgSender: string;
  _minter: string;
  _increment: BigNumber;
  _newAllowance: BigNumber;
}
export type MinterAllowanceIncrementedEvent = TypedEvent<
  [string, string, BigNumber, BigNumber],
  MinterAllowanceIncrementedEventObject
>;

export type MinterAllowanceIncrementedEventFilter =
  TypedEventFilter<MinterAllowanceIncrementedEvent>;

export interface MinterConfiguredEventObject {
  _msgSender: string;
  _minter: string;
  _allowance: BigNumber;
}
export type MinterConfiguredEvent = TypedEvent<
  [string, string, BigNumber],
  MinterConfiguredEventObject
>;

export type MinterConfiguredEventFilter =
  TypedEventFilter<MinterConfiguredEvent>;

export interface MinterManagerSetEventObject {
  _oldMinterManager: string;
  _newMinterManager: string;
}
export type MinterManagerSetEvent = TypedEvent<
  [string, string],
  MinterManagerSetEventObject
>;

export type MinterManagerSetEventFilter =
  TypedEventFilter<MinterManagerSetEvent>;

export interface MinterRemovedEventObject {
  _msgSender: string;
  _minter: string;
}
export type MinterRemovedEvent = TypedEvent<
  [string, string],
  MinterRemovedEventObject
>;

export type MinterRemovedEventFilter = TypedEventFilter<MinterRemovedEvent>;

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface MintController extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: MintControllerInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    configureController(
      _controller: PromiseOrValue<string>,
      _worker: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    configureMinter(
      _newAllowance: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    decrementMinterAllowance(
      _allowanceDecrement: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getMinterManager(overrides?: CallOverrides): Promise<[string]>;

    getWorker(
      _controller: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    incrementMinterAllowance(
      _allowanceIncrement: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    removeController(
      _controller: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    removeMinter(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setMinterManager(
      _newMinterManager: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  configureController(
    _controller: PromiseOrValue<string>,
    _worker: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  configureMinter(
    _newAllowance: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  decrementMinterAllowance(
    _allowanceDecrement: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getMinterManager(overrides?: CallOverrides): Promise<string>;

  getWorker(
    _controller: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<string>;

  incrementMinterAllowance(
    _allowanceIncrement: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  removeController(
    _controller: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  removeMinter(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setMinterManager(
    _newMinterManager: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    configureController(
      _controller: PromiseOrValue<string>,
      _worker: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    configureMinter(
      _newAllowance: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    decrementMinterAllowance(
      _allowanceDecrement: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    getMinterManager(overrides?: CallOverrides): Promise<string>;

    getWorker(
      _controller: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<string>;

    incrementMinterAllowance(
      _allowanceIncrement: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    owner(overrides?: CallOverrides): Promise<string>;

    removeController(
      _controller: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    removeMinter(overrides?: CallOverrides): Promise<boolean>;

    setMinterManager(
      _newMinterManager: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "ControllerConfigured(address,address)"(
      _controller?: PromiseOrValue<string> | null,
      _worker?: PromiseOrValue<string> | null
    ): ControllerConfiguredEventFilter;
    ControllerConfigured(
      _controller?: PromiseOrValue<string> | null,
      _worker?: PromiseOrValue<string> | null
    ): ControllerConfiguredEventFilter;

    "ControllerRemoved(address)"(
      _controller?: PromiseOrValue<string> | null
    ): ControllerRemovedEventFilter;
    ControllerRemoved(
      _controller?: PromiseOrValue<string> | null
    ): ControllerRemovedEventFilter;

    "MinterAllowanceDecremented(address,address,uint256,uint256)"(
      msgSender?: PromiseOrValue<string> | null,
      minter?: PromiseOrValue<string> | null,
      decrement?: null,
      newAllowance?: null
    ): MinterAllowanceDecrementedEventFilter;
    MinterAllowanceDecremented(
      msgSender?: PromiseOrValue<string> | null,
      minter?: PromiseOrValue<string> | null,
      decrement?: null,
      newAllowance?: null
    ): MinterAllowanceDecrementedEventFilter;

    "MinterAllowanceIncremented(address,address,uint256,uint256)"(
      _msgSender?: PromiseOrValue<string> | null,
      _minter?: PromiseOrValue<string> | null,
      _increment?: null,
      _newAllowance?: null
    ): MinterAllowanceIncrementedEventFilter;
    MinterAllowanceIncremented(
      _msgSender?: PromiseOrValue<string> | null,
      _minter?: PromiseOrValue<string> | null,
      _increment?: null,
      _newAllowance?: null
    ): MinterAllowanceIncrementedEventFilter;

    "MinterConfigured(address,address,uint256)"(
      _msgSender?: PromiseOrValue<string> | null,
      _minter?: PromiseOrValue<string> | null,
      _allowance?: null
    ): MinterConfiguredEventFilter;
    MinterConfigured(
      _msgSender?: PromiseOrValue<string> | null,
      _minter?: PromiseOrValue<string> | null,
      _allowance?: null
    ): MinterConfiguredEventFilter;

    "MinterManagerSet(address,address)"(
      _oldMinterManager?: PromiseOrValue<string> | null,
      _newMinterManager?: PromiseOrValue<string> | null
    ): MinterManagerSetEventFilter;
    MinterManagerSet(
      _oldMinterManager?: PromiseOrValue<string> | null,
      _newMinterManager?: PromiseOrValue<string> | null
    ): MinterManagerSetEventFilter;

    "MinterRemoved(address,address)"(
      _msgSender?: PromiseOrValue<string> | null,
      _minter?: PromiseOrValue<string> | null
    ): MinterRemovedEventFilter;
    MinterRemoved(
      _msgSender?: PromiseOrValue<string> | null,
      _minter?: PromiseOrValue<string> | null
    ): MinterRemovedEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: null,
      newOwner?: null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: null,
      newOwner?: null
    ): OwnershipTransferredEventFilter;
  };

  estimateGas: {
    configureController(
      _controller: PromiseOrValue<string>,
      _worker: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    configureMinter(
      _newAllowance: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    decrementMinterAllowance(
      _allowanceDecrement: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getMinterManager(overrides?: CallOverrides): Promise<BigNumber>;

    getWorker(
      _controller: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    incrementMinterAllowance(
      _allowanceIncrement: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    removeController(
      _controller: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    removeMinter(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setMinterManager(
      _newMinterManager: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    configureController(
      _controller: PromiseOrValue<string>,
      _worker: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    configureMinter(
      _newAllowance: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    decrementMinterAllowance(
      _allowanceDecrement: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getMinterManager(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getWorker(
      _controller: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    incrementMinterAllowance(
      _allowanceIncrement: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    removeController(
      _controller: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    removeMinter(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setMinterManager(
      _newMinterManager: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
