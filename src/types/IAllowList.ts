/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedListener,
  TypedContractMethod,
} from "./common";

export interface IAllowListInterface extends Interface {
  getFunction(
    nameOrSignature: "readAllowList" | "setAdmin" | "setEnabled" | "setNone"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "readAllowList",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setAdmin",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setEnabled",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setNone",
    values: [AddressLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "readAllowList",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setAdmin", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setEnabled", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setNone", data: BytesLike): Result;
}

export interface IAllowList extends BaseContract {
  connect(runner?: ContractRunner | null): IAllowList;
  waitForDeployment(): Promise<this>;

  interface: IAllowListInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  readAllowList: TypedContractMethod<[addr: AddressLike], [bigint], "view">;

  setAdmin: TypedContractMethod<[addr: AddressLike], [void], "nonpayable">;

  setEnabled: TypedContractMethod<[addr: AddressLike], [void], "nonpayable">;

  setNone: TypedContractMethod<[addr: AddressLike], [void], "nonpayable">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "readAllowList"
  ): TypedContractMethod<[addr: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "setAdmin"
  ): TypedContractMethod<[addr: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setEnabled"
  ): TypedContractMethod<[addr: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setNone"
  ): TypedContractMethod<[addr: AddressLike], [void], "nonpayable">;

  filters: {};
}