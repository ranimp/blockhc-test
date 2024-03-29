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
} from "../common";

export declare namespace UserData {
  export type DoctorStruct = {
    nama: PromiseOrValue<string>;
    email: PromiseOrValue<string>;
    telepon: PromiseOrValue<string>;
    hari: PromiseOrValue<string>;
    sesi: PromiseOrValue<string>;
    pendidikan: PromiseOrValue<string>;
    str: PromiseOrValue<string>;
    cat: PromiseOrValue<string>;
    img: PromiseOrValue<string>;
    wallet: PromiseOrValue<string>;
    status: PromiseOrValue<boolean>;
  };

  export type DoctorStructOutput = [
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    boolean
  ] & {
    nama: string;
    email: string;
    telepon: string;
    hari: string;
    sesi: string;
    pendidikan: string;
    str: string;
    cat: string;
    img: string;
    wallet: string;
    status: boolean;
  };

  export type UserStruct = {
    nama: PromiseOrValue<string>;
    email: PromiseOrValue<string>;
    telepon: PromiseOrValue<string>;
    gender: PromiseOrValue<string>;
    tanggalLahir: PromiseOrValue<string>;
    wallet: PromiseOrValue<string>;
    status: PromiseOrValue<boolean>;
  };

  export type UserStructOutput = [
    string,
    string,
    string,
    string,
    string,
    string,
    boolean
  ] & {
    nama: string;
    email: string;
    telepon: string;
    gender: string;
    tanggalLahir: string;
    wallet: string;
    status: boolean;
  };
}

export interface UserDataInterface extends utils.Interface {
  functions: {
    "addDoctor(string,string,string,string,string,string,string,string,string,address,bool)": FunctionFragment;
    "addUser(string,string,string,string,string,bool)": FunctionFragment;
    "addUserAdmin(address,string,string,string,string,string,bool)": FunctionFragment;
    "doctors(uint256)": FunctionFragment;
    "getDoctors()": FunctionFragment;
    "getUser(address)": FunctionFragment;
    "getUserAdmin()": FunctionFragment;
    "roles()": FunctionFragment;
    "updateDoctor(string,string,string,string,string,string,string,string,string,address,bool)": FunctionFragment;
    "updateUser(string,string,string,string,string,bool)": FunctionFragment;
    "updateUserAdmin(address,string,string,string,string,string,bool)": FunctionFragment;
    "users(uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "addDoctor"
      | "addUser"
      | "addUserAdmin"
      | "doctors"
      | "getDoctors"
      | "getUser"
      | "getUserAdmin"
      | "roles"
      | "updateDoctor"
      | "updateUser"
      | "updateUserAdmin"
      | "users"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "addDoctor",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<boolean>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "addUser",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<boolean>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "addUserAdmin",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<boolean>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "doctors",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getDoctors",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getUser",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getUserAdmin",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "roles", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "updateDoctor",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<boolean>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "updateUser",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<boolean>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "updateUserAdmin",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<boolean>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "users",
    values: [PromiseOrValue<BigNumberish>]
  ): string;

  decodeFunctionResult(functionFragment: "addDoctor", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "addUser", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "addUserAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "doctors", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getDoctors", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getUser", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getUserAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "roles", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "updateDoctor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "updateUser", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "updateUserAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "users", data: BytesLike): Result;

  events: {
    "DoctorAdded(string,string,string,string,string,string,string,string,string,address,bool)": EventFragment;
    "UserAdded(string,string,string,string,string,address,bool)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "DoctorAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "UserAdded"): EventFragment;
}

export interface DoctorAddedEventObject {
  nama: string;
  email: string;
  telepon: string;
  hari: string;
  sesi: string;
  pendidikan: string;
  str: string;
  cat: string;
  img: string;
  wallet: string;
  status: boolean;
}
export type DoctorAddedEvent = TypedEvent<
  [
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    boolean
  ],
  DoctorAddedEventObject
>;

export type DoctorAddedEventFilter = TypedEventFilter<DoctorAddedEvent>;

export interface UserAddedEventObject {
  nama: string;
  email: string;
  telepon: string;
  gender: string;
  tanggalLahir: string;
  wallet: string;
  status: boolean;
}
export type UserAddedEvent = TypedEvent<
  [string, string, string, string, string, string, boolean],
  UserAddedEventObject
>;

export type UserAddedEventFilter = TypedEventFilter<UserAddedEvent>;

export interface UserData extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: UserDataInterface;

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
    addDoctor(
      _nama: PromiseOrValue<string>,
      _email: PromiseOrValue<string>,
      _telepon: PromiseOrValue<string>,
      _hari: PromiseOrValue<string>,
      _sesi: PromiseOrValue<string>,
      _pendidikan: PromiseOrValue<string>,
      _str: PromiseOrValue<string>,
      _cat: PromiseOrValue<string>,
      _img: PromiseOrValue<string>,
      _wallet: PromiseOrValue<string>,
      _status: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    addUser(
      _nama: PromiseOrValue<string>,
      _email: PromiseOrValue<string>,
      _telepon: PromiseOrValue<string>,
      _gender: PromiseOrValue<string>,
      _tanggalLahir: PromiseOrValue<string>,
      _status: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    addUserAdmin(
      _wallet: PromiseOrValue<string>,
      _nama: PromiseOrValue<string>,
      _email: PromiseOrValue<string>,
      _telepon: PromiseOrValue<string>,
      _gender: PromiseOrValue<string>,
      _tanggalLahir: PromiseOrValue<string>,
      _status: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    doctors(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        boolean
      ] & {
        nama: string;
        email: string;
        telepon: string;
        hari: string;
        sesi: string;
        pendidikan: string;
        str: string;
        cat: string;
        img: string;
        wallet: string;
        status: boolean;
      }
    >;

    getDoctors(
      overrides?: CallOverrides
    ): Promise<[UserData.DoctorStructOutput[]]>;

    getUser(
      _wallet: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[string, string, string, string, string, string, boolean]>;

    getUserAdmin(
      overrides?: CallOverrides
    ): Promise<[UserData.UserStructOutput[]]>;

    roles(overrides?: CallOverrides): Promise<[string]>;

    updateDoctor(
      _nama: PromiseOrValue<string>,
      _email: PromiseOrValue<string>,
      _telepon: PromiseOrValue<string>,
      _hari: PromiseOrValue<string>,
      _sesi: PromiseOrValue<string>,
      _pendidikan: PromiseOrValue<string>,
      _str: PromiseOrValue<string>,
      _cat: PromiseOrValue<string>,
      _img: PromiseOrValue<string>,
      _wallet: PromiseOrValue<string>,
      _status: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    updateUser(
      _nama: PromiseOrValue<string>,
      _email: PromiseOrValue<string>,
      _telepon: PromiseOrValue<string>,
      _gender: PromiseOrValue<string>,
      _tanggalLahir: PromiseOrValue<string>,
      _status: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    updateUserAdmin(
      _wallet: PromiseOrValue<string>,
      _nama: PromiseOrValue<string>,
      _email: PromiseOrValue<string>,
      _telepon: PromiseOrValue<string>,
      _gender: PromiseOrValue<string>,
      _tanggalLahir: PromiseOrValue<string>,
      _status: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    users(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [string, string, string, string, string, string, boolean] & {
        nama: string;
        email: string;
        telepon: string;
        gender: string;
        tanggalLahir: string;
        wallet: string;
        status: boolean;
      }
    >;
  };

  addDoctor(
    _nama: PromiseOrValue<string>,
    _email: PromiseOrValue<string>,
    _telepon: PromiseOrValue<string>,
    _hari: PromiseOrValue<string>,
    _sesi: PromiseOrValue<string>,
    _pendidikan: PromiseOrValue<string>,
    _str: PromiseOrValue<string>,
    _cat: PromiseOrValue<string>,
    _img: PromiseOrValue<string>,
    _wallet: PromiseOrValue<string>,
    _status: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  addUser(
    _nama: PromiseOrValue<string>,
    _email: PromiseOrValue<string>,
    _telepon: PromiseOrValue<string>,
    _gender: PromiseOrValue<string>,
    _tanggalLahir: PromiseOrValue<string>,
    _status: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  addUserAdmin(
    _wallet: PromiseOrValue<string>,
    _nama: PromiseOrValue<string>,
    _email: PromiseOrValue<string>,
    _telepon: PromiseOrValue<string>,
    _gender: PromiseOrValue<string>,
    _tanggalLahir: PromiseOrValue<string>,
    _status: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  doctors(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<
    [
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      boolean
    ] & {
      nama: string;
      email: string;
      telepon: string;
      hari: string;
      sesi: string;
      pendidikan: string;
      str: string;
      cat: string;
      img: string;
      wallet: string;
      status: boolean;
    }
  >;

  getDoctors(overrides?: CallOverrides): Promise<UserData.DoctorStructOutput[]>;

  getUser(
    _wallet: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<[string, string, string, string, string, string, boolean]>;

  getUserAdmin(overrides?: CallOverrides): Promise<UserData.UserStructOutput[]>;

  roles(overrides?: CallOverrides): Promise<string>;

  updateDoctor(
    _nama: PromiseOrValue<string>,
    _email: PromiseOrValue<string>,
    _telepon: PromiseOrValue<string>,
    _hari: PromiseOrValue<string>,
    _sesi: PromiseOrValue<string>,
    _pendidikan: PromiseOrValue<string>,
    _str: PromiseOrValue<string>,
    _cat: PromiseOrValue<string>,
    _img: PromiseOrValue<string>,
    _wallet: PromiseOrValue<string>,
    _status: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  updateUser(
    _nama: PromiseOrValue<string>,
    _email: PromiseOrValue<string>,
    _telepon: PromiseOrValue<string>,
    _gender: PromiseOrValue<string>,
    _tanggalLahir: PromiseOrValue<string>,
    _status: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  updateUserAdmin(
    _wallet: PromiseOrValue<string>,
    _nama: PromiseOrValue<string>,
    _email: PromiseOrValue<string>,
    _telepon: PromiseOrValue<string>,
    _gender: PromiseOrValue<string>,
    _tanggalLahir: PromiseOrValue<string>,
    _status: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  users(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<
    [string, string, string, string, string, string, boolean] & {
      nama: string;
      email: string;
      telepon: string;
      gender: string;
      tanggalLahir: string;
      wallet: string;
      status: boolean;
    }
  >;

  callStatic: {
    addDoctor(
      _nama: PromiseOrValue<string>,
      _email: PromiseOrValue<string>,
      _telepon: PromiseOrValue<string>,
      _hari: PromiseOrValue<string>,
      _sesi: PromiseOrValue<string>,
      _pendidikan: PromiseOrValue<string>,
      _str: PromiseOrValue<string>,
      _cat: PromiseOrValue<string>,
      _img: PromiseOrValue<string>,
      _wallet: PromiseOrValue<string>,
      _status: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<void>;

    addUser(
      _nama: PromiseOrValue<string>,
      _email: PromiseOrValue<string>,
      _telepon: PromiseOrValue<string>,
      _gender: PromiseOrValue<string>,
      _tanggalLahir: PromiseOrValue<string>,
      _status: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<void>;

    addUserAdmin(
      _wallet: PromiseOrValue<string>,
      _nama: PromiseOrValue<string>,
      _email: PromiseOrValue<string>,
      _telepon: PromiseOrValue<string>,
      _gender: PromiseOrValue<string>,
      _tanggalLahir: PromiseOrValue<string>,
      _status: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<void>;

    doctors(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        boolean
      ] & {
        nama: string;
        email: string;
        telepon: string;
        hari: string;
        sesi: string;
        pendidikan: string;
        str: string;
        cat: string;
        img: string;
        wallet: string;
        status: boolean;
      }
    >;

    getDoctors(
      overrides?: CallOverrides
    ): Promise<UserData.DoctorStructOutput[]>;

    getUser(
      _wallet: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[string, string, string, string, string, string, boolean]>;

    getUserAdmin(
      overrides?: CallOverrides
    ): Promise<UserData.UserStructOutput[]>;

    roles(overrides?: CallOverrides): Promise<string>;

    updateDoctor(
      _nama: PromiseOrValue<string>,
      _email: PromiseOrValue<string>,
      _telepon: PromiseOrValue<string>,
      _hari: PromiseOrValue<string>,
      _sesi: PromiseOrValue<string>,
      _pendidikan: PromiseOrValue<string>,
      _str: PromiseOrValue<string>,
      _cat: PromiseOrValue<string>,
      _img: PromiseOrValue<string>,
      _wallet: PromiseOrValue<string>,
      _status: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<void>;

    updateUser(
      _nama: PromiseOrValue<string>,
      _email: PromiseOrValue<string>,
      _telepon: PromiseOrValue<string>,
      _gender: PromiseOrValue<string>,
      _tanggalLahir: PromiseOrValue<string>,
      _status: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<void>;

    updateUserAdmin(
      _wallet: PromiseOrValue<string>,
      _nama: PromiseOrValue<string>,
      _email: PromiseOrValue<string>,
      _telepon: PromiseOrValue<string>,
      _gender: PromiseOrValue<string>,
      _tanggalLahir: PromiseOrValue<string>,
      _status: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<void>;

    users(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [string, string, string, string, string, string, boolean] & {
        nama: string;
        email: string;
        telepon: string;
        gender: string;
        tanggalLahir: string;
        wallet: string;
        status: boolean;
      }
    >;
  };

  filters: {
    "DoctorAdded(string,string,string,string,string,string,string,string,string,address,bool)"(
      nama?: null,
      email?: null,
      telepon?: null,
      hari?: null,
      sesi?: null,
      pendidikan?: null,
      str?: null,
      cat?: null,
      img?: null,
      wallet?: null,
      status?: null
    ): DoctorAddedEventFilter;
    DoctorAdded(
      nama?: null,
      email?: null,
      telepon?: null,
      hari?: null,
      sesi?: null,
      pendidikan?: null,
      str?: null,
      cat?: null,
      img?: null,
      wallet?: null,
      status?: null
    ): DoctorAddedEventFilter;

    "UserAdded(string,string,string,string,string,address,bool)"(
      nama?: null,
      email?: null,
      telepon?: null,
      gender?: null,
      tanggalLahir?: null,
      wallet?: null,
      status?: null
    ): UserAddedEventFilter;
    UserAdded(
      nama?: null,
      email?: null,
      telepon?: null,
      gender?: null,
      tanggalLahir?: null,
      wallet?: null,
      status?: null
    ): UserAddedEventFilter;
  };

  estimateGas: {
    addDoctor(
      _nama: PromiseOrValue<string>,
      _email: PromiseOrValue<string>,
      _telepon: PromiseOrValue<string>,
      _hari: PromiseOrValue<string>,
      _sesi: PromiseOrValue<string>,
      _pendidikan: PromiseOrValue<string>,
      _str: PromiseOrValue<string>,
      _cat: PromiseOrValue<string>,
      _img: PromiseOrValue<string>,
      _wallet: PromiseOrValue<string>,
      _status: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    addUser(
      _nama: PromiseOrValue<string>,
      _email: PromiseOrValue<string>,
      _telepon: PromiseOrValue<string>,
      _gender: PromiseOrValue<string>,
      _tanggalLahir: PromiseOrValue<string>,
      _status: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    addUserAdmin(
      _wallet: PromiseOrValue<string>,
      _nama: PromiseOrValue<string>,
      _email: PromiseOrValue<string>,
      _telepon: PromiseOrValue<string>,
      _gender: PromiseOrValue<string>,
      _tanggalLahir: PromiseOrValue<string>,
      _status: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    doctors(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getDoctors(overrides?: CallOverrides): Promise<BigNumber>;

    getUser(
      _wallet: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getUserAdmin(overrides?: CallOverrides): Promise<BigNumber>;

    roles(overrides?: CallOverrides): Promise<BigNumber>;

    updateDoctor(
      _nama: PromiseOrValue<string>,
      _email: PromiseOrValue<string>,
      _telepon: PromiseOrValue<string>,
      _hari: PromiseOrValue<string>,
      _sesi: PromiseOrValue<string>,
      _pendidikan: PromiseOrValue<string>,
      _str: PromiseOrValue<string>,
      _cat: PromiseOrValue<string>,
      _img: PromiseOrValue<string>,
      _wallet: PromiseOrValue<string>,
      _status: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    updateUser(
      _nama: PromiseOrValue<string>,
      _email: PromiseOrValue<string>,
      _telepon: PromiseOrValue<string>,
      _gender: PromiseOrValue<string>,
      _tanggalLahir: PromiseOrValue<string>,
      _status: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    updateUserAdmin(
      _wallet: PromiseOrValue<string>,
      _nama: PromiseOrValue<string>,
      _email: PromiseOrValue<string>,
      _telepon: PromiseOrValue<string>,
      _gender: PromiseOrValue<string>,
      _tanggalLahir: PromiseOrValue<string>,
      _status: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    users(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addDoctor(
      _nama: PromiseOrValue<string>,
      _email: PromiseOrValue<string>,
      _telepon: PromiseOrValue<string>,
      _hari: PromiseOrValue<string>,
      _sesi: PromiseOrValue<string>,
      _pendidikan: PromiseOrValue<string>,
      _str: PromiseOrValue<string>,
      _cat: PromiseOrValue<string>,
      _img: PromiseOrValue<string>,
      _wallet: PromiseOrValue<string>,
      _status: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    addUser(
      _nama: PromiseOrValue<string>,
      _email: PromiseOrValue<string>,
      _telepon: PromiseOrValue<string>,
      _gender: PromiseOrValue<string>,
      _tanggalLahir: PromiseOrValue<string>,
      _status: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    addUserAdmin(
      _wallet: PromiseOrValue<string>,
      _nama: PromiseOrValue<string>,
      _email: PromiseOrValue<string>,
      _telepon: PromiseOrValue<string>,
      _gender: PromiseOrValue<string>,
      _tanggalLahir: PromiseOrValue<string>,
      _status: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    doctors(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getDoctors(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getUser(
      _wallet: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getUserAdmin(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    roles(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    updateDoctor(
      _nama: PromiseOrValue<string>,
      _email: PromiseOrValue<string>,
      _telepon: PromiseOrValue<string>,
      _hari: PromiseOrValue<string>,
      _sesi: PromiseOrValue<string>,
      _pendidikan: PromiseOrValue<string>,
      _str: PromiseOrValue<string>,
      _cat: PromiseOrValue<string>,
      _img: PromiseOrValue<string>,
      _wallet: PromiseOrValue<string>,
      _status: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    updateUser(
      _nama: PromiseOrValue<string>,
      _email: PromiseOrValue<string>,
      _telepon: PromiseOrValue<string>,
      _gender: PromiseOrValue<string>,
      _tanggalLahir: PromiseOrValue<string>,
      _status: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    updateUserAdmin(
      _wallet: PromiseOrValue<string>,
      _nama: PromiseOrValue<string>,
      _email: PromiseOrValue<string>,
      _telepon: PromiseOrValue<string>,
      _gender: PromiseOrValue<string>,
      _tanggalLahir: PromiseOrValue<string>,
      _status: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    users(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
