/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
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

export interface FiatTokenUtilInterface extends utils.Interface {
  functions: {
    "transferWithMultipleAuthorizations(bytes,bytes,bool)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "transferWithMultipleAuthorizations"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "transferWithMultipleAuthorizations",
    values: [
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<boolean>
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "transferWithMultipleAuthorizations",
    data: BytesLike
  ): Result;

  events: {
    "TransferFailed(address,bytes32)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "TransferFailed"): EventFragment;
}

export interface TransferFailedEventObject {
  authorizer: string;
  nonce: string;
}
export type TransferFailedEvent = TypedEvent<
  [string, string],
  TransferFailedEventObject
>;

export type TransferFailedEventFilter = TypedEventFilter<TransferFailedEvent>;

export interface FiatTokenUtil extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: FiatTokenUtilInterface;

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
    transferWithMultipleAuthorizations(
      params: PromiseOrValue<BytesLike>,
      signatures: PromiseOrValue<BytesLike>,
      atomic: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  transferWithMultipleAuthorizations(
    params: PromiseOrValue<BytesLike>,
    signatures: PromiseOrValue<BytesLike>,
    atomic: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    transferWithMultipleAuthorizations(
      params: PromiseOrValue<BytesLike>,
      signatures: PromiseOrValue<BytesLike>,
      atomic: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {
    "TransferFailed(address,bytes32)"(
      authorizer?: PromiseOrValue<string> | null,
      nonce?: PromiseOrValue<BytesLike> | null
    ): TransferFailedEventFilter;
    TransferFailed(
      authorizer?: PromiseOrValue<string> | null,
      nonce?: PromiseOrValue<BytesLike> | null
    ): TransferFailedEventFilter;
  };

  estimateGas: {
    transferWithMultipleAuthorizations(
      params: PromiseOrValue<BytesLike>,
      signatures: PromiseOrValue<BytesLike>,
      atomic: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    transferWithMultipleAuthorizations(
      params: PromiseOrValue<BytesLike>,
      signatures: PromiseOrValue<BytesLike>,
      atomic: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
