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
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../common";

export interface ContractWithPublicFunctionsInterface extends utils.Interface {
  functions: {
    "getBar()": FunctionFragment;
    "getFoo()": FunctionFragment;
    "hushLinters()": FunctionFragment;
    "setBar(uint256)": FunctionFragment;
    "setFoo(string)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "getBar"
      | "getFoo"
      | "hushLinters"
      | "setBar"
      | "setFoo"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "getBar", values?: undefined): string;
  encodeFunctionData(functionFragment: "getFoo", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "hushLinters",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setBar",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "setFoo",
    values: [PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(functionFragment: "getBar", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getFoo", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "hushLinters",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setBar", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setFoo", data: BytesLike): Result;

  events: {};
}

export interface ContractWithPublicFunctions extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ContractWithPublicFunctionsInterface;

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
    getBar(overrides?: CallOverrides): Promise<[BigNumber]>;

    getFoo(overrides?: CallOverrides): Promise<[string]>;

    hushLinters(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setBar(
      bar: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setFoo(
      foo: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  getBar(overrides?: CallOverrides): Promise<BigNumber>;

  getFoo(overrides?: CallOverrides): Promise<string>;

  hushLinters(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setBar(
    bar: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setFoo(
    foo: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    getBar(overrides?: CallOverrides): Promise<BigNumber>;

    getFoo(overrides?: CallOverrides): Promise<string>;

    hushLinters(overrides?: CallOverrides): Promise<void>;

    setBar(
      bar: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    setFoo(
      foo: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {};

  estimateGas: {
    getBar(overrides?: CallOverrides): Promise<BigNumber>;

    getFoo(overrides?: CallOverrides): Promise<BigNumber>;

    hushLinters(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setBar(
      bar: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setFoo(
      foo: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getBar(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getFoo(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    hushLinters(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setBar(
      bar: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setFoo(
      foo: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
