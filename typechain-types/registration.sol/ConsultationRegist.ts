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
} from "../common";

export declare namespace ConsultationRegist {
  export type DataStruct = {
    nama: PromiseOrValue<string>;
    telepon: PromiseOrValue<string>;
    namaDokter: PromiseOrValue<string>;
    sesi: PromiseOrValue<string>;
    tanggal: PromiseOrValue<string>;
    keluhan: PromiseOrValue<string>;
    gender: PromiseOrValue<string>;
    wallet: PromiseOrValue<string>;
  };

  export type DataStructOutput = [
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string
  ] & {
    nama: string;
    telepon: string;
    namaDokter: string;
    sesi: string;
    tanggal: string;
    keluhan: string;
    gender: string;
    wallet: string;
  };
}

export interface ConsultationRegistInterface extends utils.Interface {
  functions: {
    "accountsWithRegistrations(uint256)": FunctionFragment;
    "addRegistration(address,string,string,string,string,string,string,string)": FunctionFragment;
    "getAllRegistrations()": FunctionFragment;
    "getRegistrationEvidence()": FunctionFragment;
    "registrationCount()": FunctionFragment;
    "registrations(address,uint256)": FunctionFragment;
    "roles()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "accountsWithRegistrations"
      | "addRegistration"
      | "getAllRegistrations"
      | "getRegistrationEvidence"
      | "registrationCount"
      | "registrations"
      | "roles"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "accountsWithRegistrations",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "addRegistration",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getAllRegistrations",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getRegistrationEvidence",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "registrationCount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "registrations",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(functionFragment: "roles", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "accountsWithRegistrations",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addRegistration",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAllRegistrations",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRegistrationEvidence",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "registrationCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "registrations",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "roles", data: BytesLike): Result;

  events: {};
}

export interface ConsultationRegist extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ConsultationRegistInterface;

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
    accountsWithRegistrations(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    addRegistration(
      _wallet: PromiseOrValue<string>,
      _nama: PromiseOrValue<string>,
      _telepon: PromiseOrValue<string>,
      _namaDokter: PromiseOrValue<string>,
      _sesi: PromiseOrValue<string>,
      _tanggal: PromiseOrValue<string>,
      _keluhan: PromiseOrValue<string>,
      _gender: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getAllRegistrations(
      overrides?: CallOverrides
    ): Promise<[ConsultationRegist.DataStructOutput[][]]>;

    getRegistrationEvidence(
      overrides?: CallOverrides
    ): Promise<[ConsultationRegist.DataStructOutput[]]>;

    registrationCount(overrides?: CallOverrides): Promise<[BigNumber]>;

    registrations(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [string, string, string, string, string, string, string, string] & {
        nama: string;
        telepon: string;
        namaDokter: string;
        sesi: string;
        tanggal: string;
        keluhan: string;
        gender: string;
        wallet: string;
      }
    >;

    roles(overrides?: CallOverrides): Promise<[string]>;
  };

  accountsWithRegistrations(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  addRegistration(
    _wallet: PromiseOrValue<string>,
    _nama: PromiseOrValue<string>,
    _telepon: PromiseOrValue<string>,
    _namaDokter: PromiseOrValue<string>,
    _sesi: PromiseOrValue<string>,
    _tanggal: PromiseOrValue<string>,
    _keluhan: PromiseOrValue<string>,
    _gender: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getAllRegistrations(
    overrides?: CallOverrides
  ): Promise<ConsultationRegist.DataStructOutput[][]>;

  getRegistrationEvidence(
    overrides?: CallOverrides
  ): Promise<ConsultationRegist.DataStructOutput[]>;

  registrationCount(overrides?: CallOverrides): Promise<BigNumber>;

  registrations(
    arg0: PromiseOrValue<string>,
    arg1: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<
    [string, string, string, string, string, string, string, string] & {
      nama: string;
      telepon: string;
      namaDokter: string;
      sesi: string;
      tanggal: string;
      keluhan: string;
      gender: string;
      wallet: string;
    }
  >;

  roles(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    accountsWithRegistrations(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    addRegistration(
      _wallet: PromiseOrValue<string>,
      _nama: PromiseOrValue<string>,
      _telepon: PromiseOrValue<string>,
      _namaDokter: PromiseOrValue<string>,
      _sesi: PromiseOrValue<string>,
      _tanggal: PromiseOrValue<string>,
      _keluhan: PromiseOrValue<string>,
      _gender: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    getAllRegistrations(
      overrides?: CallOverrides
    ): Promise<ConsultationRegist.DataStructOutput[][]>;

    getRegistrationEvidence(
      overrides?: CallOverrides
    ): Promise<ConsultationRegist.DataStructOutput[]>;

    registrationCount(overrides?: CallOverrides): Promise<BigNumber>;

    registrations(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [string, string, string, string, string, string, string, string] & {
        nama: string;
        telepon: string;
        namaDokter: string;
        sesi: string;
        tanggal: string;
        keluhan: string;
        gender: string;
        wallet: string;
      }
    >;

    roles(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    accountsWithRegistrations(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    addRegistration(
      _wallet: PromiseOrValue<string>,
      _nama: PromiseOrValue<string>,
      _telepon: PromiseOrValue<string>,
      _namaDokter: PromiseOrValue<string>,
      _sesi: PromiseOrValue<string>,
      _tanggal: PromiseOrValue<string>,
      _keluhan: PromiseOrValue<string>,
      _gender: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getAllRegistrations(overrides?: CallOverrides): Promise<BigNumber>;

    getRegistrationEvidence(overrides?: CallOverrides): Promise<BigNumber>;

    registrationCount(overrides?: CallOverrides): Promise<BigNumber>;

    registrations(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    roles(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    accountsWithRegistrations(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    addRegistration(
      _wallet: PromiseOrValue<string>,
      _nama: PromiseOrValue<string>,
      _telepon: PromiseOrValue<string>,
      _namaDokter: PromiseOrValue<string>,
      _sesi: PromiseOrValue<string>,
      _tanggal: PromiseOrValue<string>,
      _keluhan: PromiseOrValue<string>,
      _gender: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getAllRegistrations(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getRegistrationEvidence(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    registrationCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    registrations(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    roles(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
