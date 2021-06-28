/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface IIncentivisedVotingLockupInterface extends ethers.utils.Interface {
  functions: {
    "balanceOf(address)": FunctionFragment;
    "balanceOfAt(address,uint256)": FunctionFragment;
    "claimReward()": FunctionFragment;
    "createLock(uint256,uint256)": FunctionFragment;
    "earned(address)": FunctionFragment;
    "eject(address)": FunctionFragment;
    "expireContract()": FunctionFragment;
    "getLastUserPoint(address)": FunctionFragment;
    "increaseLockAmount(uint256)": FunctionFragment;
    "increaseLockLength(uint256)": FunctionFragment;
    "totalSupply()": FunctionFragment;
    "totalSupplyAt(uint256)": FunctionFragment;
    "withdraw()": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "balanceOf", values: [string]): string;
  encodeFunctionData(
    functionFragment: "balanceOfAt",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "claimReward",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "createLock",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "earned", values: [string]): string;
  encodeFunctionData(functionFragment: "eject", values: [string]): string;
  encodeFunctionData(
    functionFragment: "expireContract",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getLastUserPoint",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "increaseLockAmount",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "increaseLockLength",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "totalSupply",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "totalSupplyAt",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "withdraw", values?: undefined): string;

  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "balanceOfAt",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "claimReward",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "createLock", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "earned", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "eject", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "expireContract",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getLastUserPoint",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "increaseLockAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "increaseLockLength",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalSupplyAt",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;

  events: {};
}

export class IIncentivisedVotingLockup extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: IIncentivisedVotingLockupInterface;

  functions: {
    balanceOf(_owner: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    balanceOfAt(
      _owner: string,
      _blockNumber: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    claimReward(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    createLock(
      _value: BigNumberish,
      _unlockTime: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    earned(_account: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    eject(
      _user: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    expireContract(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getLastUserPoint(
      _addr: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        bias: BigNumber;
        slope: BigNumber;
        ts: BigNumber;
      }
    >;

    increaseLockAmount(
      _value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    increaseLockLength(
      _unlockTime: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;

    totalSupplyAt(
      _blockNumber: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    withdraw(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  balanceOf(_owner: string, overrides?: CallOverrides): Promise<BigNumber>;

  balanceOfAt(
    _owner: string,
    _blockNumber: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  claimReward(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  createLock(
    _value: BigNumberish,
    _unlockTime: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  earned(_account: string, overrides?: CallOverrides): Promise<BigNumber>;

  eject(
    _user: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  expireContract(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getLastUserPoint(
    _addr: string,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber] & {
      bias: BigNumber;
      slope: BigNumber;
      ts: BigNumber;
    }
  >;

  increaseLockAmount(
    _value: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  increaseLockLength(
    _unlockTime: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

  totalSupplyAt(
    _blockNumber: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  withdraw(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    balanceOf(_owner: string, overrides?: CallOverrides): Promise<BigNumber>;

    balanceOfAt(
      _owner: string,
      _blockNumber: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    claimReward(overrides?: CallOverrides): Promise<void>;

    createLock(
      _value: BigNumberish,
      _unlockTime: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    earned(_account: string, overrides?: CallOverrides): Promise<BigNumber>;

    eject(_user: string, overrides?: CallOverrides): Promise<void>;

    expireContract(overrides?: CallOverrides): Promise<void>;

    getLastUserPoint(
      _addr: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        bias: BigNumber;
        slope: BigNumber;
        ts: BigNumber;
      }
    >;

    increaseLockAmount(
      _value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    increaseLockLength(
      _unlockTime: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    totalSupplyAt(
      _blockNumber: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    withdraw(overrides?: CallOverrides): Promise<void>;
  };

  filters: {};

  estimateGas: {
    balanceOf(_owner: string, overrides?: CallOverrides): Promise<BigNumber>;

    balanceOfAt(
      _owner: string,
      _blockNumber: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    claimReward(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    createLock(
      _value: BigNumberish,
      _unlockTime: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    earned(_account: string, overrides?: CallOverrides): Promise<BigNumber>;

    eject(
      _user: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    expireContract(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getLastUserPoint(
      _addr: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    increaseLockAmount(
      _value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    increaseLockLength(
      _unlockTime: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    totalSupplyAt(
      _blockNumber: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    withdraw(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    balanceOf(
      _owner: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    balanceOfAt(
      _owner: string,
      _blockNumber: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    claimReward(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    createLock(
      _value: BigNumberish,
      _unlockTime: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    earned(
      _account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    eject(
      _user: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    expireContract(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getLastUserPoint(
      _addr: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    increaseLockAmount(
      _value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    increaseLockLength(
      _unlockTime: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    totalSupplyAt(
      _blockNumber: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    withdraw(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
