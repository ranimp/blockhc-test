/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { UserRoles, UserRolesInterface } from "../../roles.sol/UserRoles";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "admin",
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
        name: "",
        type: "address",
      },
    ],
    name: "dokter",
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
    inputs: [
      {
        internalType: "address",
        name: "_wallet",
        type: "address",
      },
    ],
    name: "isAdmin",
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
    inputs: [
      {
        internalType: "address",
        name: "_wallet",
        type: "address",
      },
    ],
    name: "isDokter",
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
    inputs: [
      {
        internalType: "address",
        name: "_wallet",
        type: "address",
      },
    ],
    name: "isPasien",
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
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "pasien",
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
    inputs: [
      {
        internalType: "address",
        name: "_wallet",
        type: "address",
      },
      {
        internalType: "string",
        name: "_role",
        type: "string",
      },
    ],
    name: "removeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "setDefaultRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_wallet",
        type: "address",
      },
      {
        internalType: "string",
        name: "_role",
        type: "string",
      },
    ],
    name: "setRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50737c73d9ed23ddad6353034f371aca808b8a58744e6000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550610add806100746000396000f3fe608060405234801561001057600080fd5b50600436106100935760003560e01c80635c4c9348116100665780635c4c93481461011e5780635e03d2771461014e5780637f2b99f41461017e578063f832309b146101ae578063f851a440146101ca57610093565b80631132beb5146100985780631bfe0308146100c857806324d7806c146100e45780632ae5dd7714610114575b600080fd5b6100b260048036038101906100ad91906107d5565b6101e8565b6040516100bf919061081d565b60405180910390f35b6100e260048036038101906100dd919061097e565b61023e565b005b6100fe60048036038101906100f991906107d5565b61041b565b60405161010b919061081d565b60405180910390f35b61011c610473565b005b610138600480360381019061013391906107d5565b6104cd565b604051610145919061081d565b60405180910390f35b610168600480360381019061016391906107d5565b610523565b604051610175919061081d565b60405180910390f35b610198600480360381019061019391906107d5565b610543565b6040516101a5919061081d565b60405180910390f35b6101c860048036038101906101c3919061097e565b610563565b005b6101d261073f565b6040516101df91906109e9565b60405180910390f35b6000600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff169050919050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146102cc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102c390610a87565b60405180910390fd5b6040518060400160405280600681526020017f646f6b746572000000000000000000000000000000000000000000000000000081525080519060200120818051906020012003610373576000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550610417565b6040518060400160405280600681526020017f70617369656e000000000000000000000000000000000000000000000000000081525080519060200120818051906020012003610416576000600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505b5b5050565b60008173ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16149050919050565b6001600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550565b6000600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff169050919050565b60026020528060005260406000206000915054906101000a900460ff1681565b60016020528060005260406000206000915054906101000a900460ff1681565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146105f1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105e890610a87565b60405180910390fd5b6040518060400160405280600681526020017f646f6b7465720000000000000000000000000000000000000000000000000000815250805190602001208180519060200120036106975760018060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555061073b565b6040518060400160405280600681526020017f70617369656e00000000000000000000000000000000000000000000000000008152508051906020012081805190602001200361073a576001600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505b5b5050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000604051905090565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006107a282610777565b9050919050565b6107b281610797565b81146107bd57600080fd5b50565b6000813590506107cf816107a9565b92915050565b6000602082840312156107eb576107ea61076d565b5b60006107f9848285016107c0565b91505092915050565b60008115159050919050565b61081781610802565b82525050565b6000602082019050610832600083018461080e565b92915050565b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b61088b82610842565b810181811067ffffffffffffffff821117156108aa576108a9610853565b5b80604052505050565b60006108bd610763565b90506108c98282610882565b919050565b600067ffffffffffffffff8211156108e9576108e8610853565b5b6108f282610842565b9050602081019050919050565b82818337600083830152505050565b600061092161091c846108ce565b6108b3565b90508281526020810184848401111561093d5761093c61083d565b5b6109488482856108ff565b509392505050565b600082601f83011261096557610964610838565b5b813561097584826020860161090e565b91505092915050565b600080604083850312156109955761099461076d565b5b60006109a3858286016107c0565b925050602083013567ffffffffffffffff8111156109c4576109c3610772565b5b6109d085828601610950565b9150509250929050565b6109e381610797565b82525050565b60006020820190506109fe60008301846109da565b92915050565b600082825260208201905092915050565b7f48616e79612061646d696e2079616e67206469697a696e6b616e20756e74756b60008201527f206d656e676b617365732e000000000000000000000000000000000000000000602082015250565b6000610a71602b83610a04565b9150610a7c82610a15565b604082019050919050565b60006020820190508181036000830152610aa081610a64565b905091905056fea2646970667358221220ff39a610ebd1b7e70bbf07922ec43f12569258f8af4d55fc2d8052c5edec701264736f6c63430008110033";

type UserRolesConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: UserRolesConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class UserRoles__factory extends ContractFactory {
  constructor(...args: UserRolesConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<UserRoles> {
    return super.deploy(overrides || {}) as Promise<UserRoles>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): UserRoles {
    return super.attach(address) as UserRoles;
  }
  override connect(signer: Signer): UserRoles__factory {
    return super.connect(signer) as UserRoles__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): UserRolesInterface {
    return new utils.Interface(_abi) as UserRolesInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): UserRoles {
    return new Contract(address, _abi, signerOrProvider) as UserRoles;
  }
}
