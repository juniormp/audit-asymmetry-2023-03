/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface ICrvEthPool2Interface extends utils.Interface {
  functions: {
    "exchange(uint256,uint256,uint256,uint256)": FunctionFragment;
    "exchange_underlying(uint256,uint256,uint256,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "exchange",
    values: [BigNumberish, BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "exchange_underlying",
    values: [BigNumberish, BigNumberish, BigNumberish, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "exchange", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "exchange_underlying",
    data: BytesLike
  ): Result;

  events: {};
}

export interface ICrvEthPool2 extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ICrvEthPool2Interface;

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
    exchange(
      i: BigNumberish,
      j: BigNumberish,
      dx: BigNumberish,
      min_dy: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    exchange_underlying(
      i: BigNumberish,
      j: BigNumberish,
      dx: BigNumberish,
      min_dy: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  exchange(
    i: BigNumberish,
    j: BigNumberish,
    dx: BigNumberish,
    min_dy: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  exchange_underlying(
    i: BigNumberish,
    j: BigNumberish,
    dx: BigNumberish,
    min_dy: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    exchange(
      i: BigNumberish,
      j: BigNumberish,
      dx: BigNumberish,
      min_dy: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    exchange_underlying(
      i: BigNumberish,
      j: BigNumberish,
      dx: BigNumberish,
      min_dy: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    exchange(
      i: BigNumberish,
      j: BigNumberish,
      dx: BigNumberish,
      min_dy: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    exchange_underlying(
      i: BigNumberish,
      j: BigNumberish,
      dx: BigNumberish,
      min_dy: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    exchange(
      i: BigNumberish,
      j: BigNumberish,
      dx: BigNumberish,
      min_dy: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    exchange_underlying(
      i: BigNumberish,
      j: BigNumberish,
      dx: BigNumberish,
      min_dy: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
