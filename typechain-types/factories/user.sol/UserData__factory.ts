/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { UserData, UserDataInterface } from "../../user.sol/UserData";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_rolesContractAddress",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "nama",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "email",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "telepon",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "gender",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "tanggalLahir",
        type: "string",
      },
      {
        indexed: false,
        internalType: "address",
        name: "wallet",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "status",
        type: "bool",
      },
    ],
    name: "UserAdded",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_nama",
        type: "string",
      },
      {
        internalType: "string",
        name: "_email",
        type: "string",
      },
      {
        internalType: "string",
        name: "_telepon",
        type: "string",
      },
      {
        internalType: "string",
        name: "_gender",
        type: "string",
      },
      {
        internalType: "string",
        name: "_tanggalLahir",
        type: "string",
      },
      {
        internalType: "bool",
        name: "_status",
        type: "bool",
      },
    ],
    name: "addUser",
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
        name: "_nama",
        type: "string",
      },
      {
        internalType: "string",
        name: "_email",
        type: "string",
      },
      {
        internalType: "string",
        name: "_telepon",
        type: "string",
      },
      {
        internalType: "string",
        name: "_gender",
        type: "string",
      },
      {
        internalType: "string",
        name: "_tanggalLahir",
        type: "string",
      },
      {
        internalType: "bool",
        name: "_status",
        type: "bool",
      },
    ],
    name: "addUserAdmin",
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
    ],
    name: "getUser",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        internalType: "string",
        name: "",
        type: "string",
      },
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
    name: "getUserAdmin",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "nama",
            type: "string",
          },
          {
            internalType: "string",
            name: "email",
            type: "string",
          },
          {
            internalType: "string",
            name: "telepon",
            type: "string",
          },
          {
            internalType: "string",
            name: "gender",
            type: "string",
          },
          {
            internalType: "string",
            name: "tanggalLahir",
            type: "string",
          },
          {
            internalType: "address",
            name: "wallet",
            type: "address",
          },
          {
            internalType: "bool",
            name: "status",
            type: "bool",
          },
        ],
        internalType: "struct UserData.User[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "roles",
    outputs: [
      {
        internalType: "contract UserRoles",
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
        internalType: "string",
        name: "_nama",
        type: "string",
      },
      {
        internalType: "string",
        name: "_email",
        type: "string",
      },
      {
        internalType: "string",
        name: "_telepon",
        type: "string",
      },
      {
        internalType: "string",
        name: "_gender",
        type: "string",
      },
      {
        internalType: "string",
        name: "_tanggalLahir",
        type: "string",
      },
      {
        internalType: "bool",
        name: "_status",
        type: "bool",
      },
    ],
    name: "updateUser",
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
        name: "_nama",
        type: "string",
      },
      {
        internalType: "string",
        name: "_email",
        type: "string",
      },
      {
        internalType: "string",
        name: "_telepon",
        type: "string",
      },
      {
        internalType: "string",
        name: "_gender",
        type: "string",
      },
      {
        internalType: "string",
        name: "_tanggalLahir",
        type: "string",
      },
      {
        internalType: "bool",
        name: "_status",
        type: "bool",
      },
    ],
    name: "updateUserAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "users",
    outputs: [
      {
        internalType: "string",
        name: "nama",
        type: "string",
      },
      {
        internalType: "string",
        name: "email",
        type: "string",
      },
      {
        internalType: "string",
        name: "telepon",
        type: "string",
      },
      {
        internalType: "string",
        name: "gender",
        type: "string",
      },
      {
        internalType: "string",
        name: "tanggalLahir",
        type: "string",
      },
      {
        internalType: "address",
        name: "wallet",
        type: "address",
      },
      {
        internalType: "bool",
        name: "status",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162002b8e38038062002b8e8339818101604052810190620000379190620000e8565b806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550506200011a565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620000b08262000083565b9050919050565b620000c281620000a3565b8114620000ce57600080fd5b50565b600081519050620000e281620000b7565b92915050565b6000602082840312156200010157620001006200007e565b5b60006200011184828501620000d1565b91505092915050565b612a64806200012a6000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c806374c6a8e41161005b57806374c6a8e414610133578063b6dda93314610151578063ddcd539d1461016d578063e21f3b781461018957610088565b80632e724fea1461008d578063365b98b2146100a9578063392f5f64146100df5780636f77926b146100fd575b600080fd5b6100a760048036038101906100a29190611cdd565b6101a5565b005b6100c360048036038101906100be9190611e41565b610440565b6040516100d69796959493929190611f0b565b60405180910390f35b6100e7610767565b6040516100f49190611ffc565b60405180910390f35b61011760048036038101906101129190612017565b61078b565b60405161012a9796959493929190612044565b60405180910390f35b61013b610ec3565b60405161014891906122b8565b60405180910390f35b61016b600480360381019061016691906122da565b611369565b005b610187600480360381019061018291906122da565b611507565b005b6101a3600480360381019061019e9190611cdd565b6117c5565b005b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663f851a4406040518163ffffffff1660e01b8152600401602060405180830381865afa158015610210573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102349190612408565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146102a1576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610298906124a7565b60405180910390fd5b60006040518060e001604052808881526020018781526020018681526020018581526020018481526020018973ffffffffffffffffffffffffffffffffffffffff16815260200183151581525090506001819080600181540180825580915050600190039060005260206000209060060201600090919091909150600082015181600001908161033191906126c9565b50602082015181600101908161034791906126c9565b50604082015181600201908161035d91906126c9565b50606082015181600301908161037391906126c9565b50608082015181600401908161038991906126c9565b5060a08201518160050160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060c08201518160050160146101000a81548160ff02191690831515021790555050507f5459924f47afb4c4c2b8f167ec368a8a6fa9556fb8490f5f9e7538fca386f23f87878787878d8860405161042e9796959493929190611f0b565b60405180910390a15050505050505050565b6001818154811061045057600080fd5b9060005260206000209060060201600091509050806000018054610473906124f6565b80601f016020809104026020016040519081016040528092919081815260200182805461049f906124f6565b80156104ec5780601f106104c1576101008083540402835291602001916104ec565b820191906000526020600020905b8154815290600101906020018083116104cf57829003601f168201915b505050505090806001018054610501906124f6565b80601f016020809104026020016040519081016040528092919081815260200182805461052d906124f6565b801561057a5780601f1061054f5761010080835404028352916020019161057a565b820191906000526020600020905b81548152906001019060200180831161055d57829003601f168201915b50505050509080600201805461058f906124f6565b80601f01602080910402602001604051908101604052809291908181526020018280546105bb906124f6565b80156106085780601f106105dd57610100808354040283529160200191610608565b820191906000526020600020905b8154815290600101906020018083116105eb57829003601f168201915b50505050509080600301805461061d906124f6565b80601f0160208091040260200160405190810160405280929190818152602001828054610649906124f6565b80156106965780601f1061066b57610100808354040283529160200191610696565b820191906000526020600020905b81548152906001019060200180831161067957829003601f168201915b5050505050908060040180546106ab906124f6565b80601f01602080910402602001604051908101604052809291908181526020018280546106d7906124f6565b80156107245780601f106106f957610100808354040283529160200191610724565b820191906000526020600020905b81548152906001019060200180831161070757829003601f168201915b5050505050908060050160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060050160149054906101000a900460ff16905087565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000606080606080606060008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16631132beb5336040518263ffffffff1660e01b81526004016107f1919061279b565b602060405180830381865afa15801561080e573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061083291906127cb565b806108d3575060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166324d7806c336040518263ffffffff1660e01b8152600401610891919061279b565b602060405180830381865afa1580156108ae573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108d291906127cb565b5b80610974575060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16635c4c9348336040518263ffffffff1660e01b8152600401610932919061279b565b602060405180830381865afa15801561094f573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061097391906127cb565b5b6109b3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109aa9061286a565b60405180910390fd5b60005b600180549050811015610e50578873ffffffffffffffffffffffffffffffffffffffff16600182815481106109ee576109ed61288a565b5b906000526020600020906006020160050160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1603610e3d5760018181548110610a4f57610a4e61288a565b5b906000526020600020906006020160050160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1660018281548110610a9557610a9461288a565b5b906000526020600020906006020160000160018381548110610aba57610ab961288a565b5b906000526020600020906006020160010160018481548110610adf57610ade61288a565b5b906000526020600020906006020160020160018581548110610b0457610b0361288a565b5b906000526020600020906006020160030160018681548110610b2957610b2861288a565b5b906000526020600020906006020160040160018781548110610b4e57610b4d61288a565b5b906000526020600020906006020160050160149054906101000a900460ff16858054610b79906124f6565b80601f0160208091040260200160405190810160405280929190818152602001828054610ba5906124f6565b8015610bf25780601f10610bc757610100808354040283529160200191610bf2565b820191906000526020600020905b815481529060010190602001808311610bd557829003601f168201915b50505050509550848054610c05906124f6565b80601f0160208091040260200160405190810160405280929190818152602001828054610c31906124f6565b8015610c7e5780601f10610c5357610100808354040283529160200191610c7e565b820191906000526020600020905b815481529060010190602001808311610c6157829003601f168201915b50505050509450838054610c91906124f6565b80601f0160208091040260200160405190810160405280929190818152602001828054610cbd906124f6565b8015610d0a5780601f10610cdf57610100808354040283529160200191610d0a565b820191906000526020600020905b815481529060010190602001808311610ced57829003601f168201915b50505050509350828054610d1d906124f6565b80601f0160208091040260200160405190810160405280929190818152602001828054610d49906124f6565b8015610d965780601f10610d6b57610100808354040283529160200191610d96565b820191906000526020600020905b815481529060010190602001808311610d7957829003601f168201915b50505050509250818054610da9906124f6565b80601f0160208091040260200160405190810160405280929190818152602001828054610dd5906124f6565b8015610e225780601f10610df757610100808354040283529160200191610e22565b820191906000526020600020905b815481529060010190602001808311610e0557829003601f168201915b50505050509150975097509750975097509750975050610eb8565b8080610e48906128e8565b9150506109b6565b506000806040518060200160405280600081525090604051806020016040528060008152509060405180602001604052806000815250906040518060200160405280600081525090604051806020016040528060008152509096509650965096509650965096505b919395979092949650565b606060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663f851a4406040518163ffffffff1660e01b8152600401602060405180830381865afa158015610f30573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f549190612408565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610fc1576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610fb8906124a7565b60405180910390fd5b6001805480602002602001604051908101604052809291908181526020016000905b8282101561136057838290600052602060002090600602016040518060e0016040529081600082018054611016906124f6565b80601f0160208091040260200160405190810160405280929190818152602001828054611042906124f6565b801561108f5780601f106110645761010080835404028352916020019161108f565b820191906000526020600020905b81548152906001019060200180831161107257829003601f168201915b505050505081526020016001820180546110a8906124f6565b80601f01602080910402602001604051908101604052809291908181526020018280546110d4906124f6565b80156111215780601f106110f657610100808354040283529160200191611121565b820191906000526020600020905b81548152906001019060200180831161110457829003601f168201915b5050505050815260200160028201805461113a906124f6565b80601f0160208091040260200160405190810160405280929190818152602001828054611166906124f6565b80156111b35780601f10611188576101008083540402835291602001916111b3565b820191906000526020600020905b81548152906001019060200180831161119657829003601f168201915b505050505081526020016003820180546111cc906124f6565b80601f01602080910402602001604051908101604052809291908181526020018280546111f8906124f6565b80156112455780601f1061121a57610100808354040283529160200191611245565b820191906000526020600020905b81548152906001019060200180831161122857829003601f168201915b5050505050815260200160048201805461125e906124f6565b80601f016020809104026020016040519081016040528092919081815260200182805461128a906124f6565b80156112d75780601f106112ac576101008083540402835291602001916112d7565b820191906000526020600020905b8154815290600101906020018083116112ba57829003601f168201915b505050505081526020016005820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016005820160149054906101000a900460ff16151515158152505081526020019060010190610fe3565b50505050905090565b60006040518060e001604052808881526020018781526020018681526020018581526020018481526020013373ffffffffffffffffffffffffffffffffffffffff1681526020018315158152509050600181908060018154018082558091505060019003906000526020600020906006020160009091909190915060008201518160000190816113f991906126c9565b50602082015181600101908161140f91906126c9565b50604082015181600201908161142591906126c9565b50606082015181600301908161143b91906126c9565b50608082015181600401908161145191906126c9565b5060a08201518160050160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060c08201518160050160146101000a81548160ff02191690831515021790555050507f5459924f47afb4c4c2b8f167ec368a8a6fa9556fb8490f5f9e7538fca386f23f878787878733886040516114f69796959493929190611f0b565b60405180910390a150505050505050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16631132beb5336040518263ffffffff1660e01b8152600401611560919061279b565b602060405180830381865afa15801561157d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115a191906127cb565b6115e0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016115d7906129a2565b60405180910390fd5b60005b6001805490508110156117bc573373ffffffffffffffffffffffffffffffffffffffff166001828154811061161b5761161a61288a565b5b906000526020600020906006020160050160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16036117a957866001828154811061167d5761167c61288a565b5b9060005260206000209060060201600001908161169a91906126c9565b5085600182815481106116b0576116af61288a565b5b906000526020600020906006020160010190816116cd91906126c9565b5084600182815481106116e3576116e261288a565b5b9060005260206000209060060201600201908161170091906126c9565b5083600182815481106117165761171561288a565b5b9060005260206000209060060201600301908161173391906126c9565b5082600182815481106117495761174861288a565b5b9060005260206000209060060201600401908161176691906126c9565b50816001828154811061177c5761177b61288a565b5b906000526020600020906006020160050160146101000a81548160ff0219169083151502179055506117bc565b80806117b4906128e8565b9150506115e3565b50505050505050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663f851a4406040518163ffffffff1660e01b8152600401602060405180830381865afa158015611830573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906118549190612408565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146118c1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016118b8906124a7565b60405180910390fd5b6000805b600180549050811015611aa2578873ffffffffffffffffffffffffffffffffffffffff16600182815481106118fd576118fc61288a565b5b906000526020600020906006020160050160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1603611a8f576001915087600182815481106119635761196261288a565b5b9060005260206000209060060201600001908161198091906126c9565b5086600182815481106119965761199561288a565b5b906000526020600020906006020160010190816119b391906126c9565b5085600182815481106119c9576119c861288a565b5b906000526020600020906006020160020190816119e691906126c9565b5084600182815481106119fc576119fb61288a565b5b90600052602060002090600602016003019081611a1991906126c9565b508360018281548110611a2f57611a2e61288a565b5b90600052602060002090600602016004019081611a4c91906126c9565b508260018281548110611a6257611a6161288a565b5b906000526020600020906006020160050160146101000a81548160ff021916908315150217905550611aa2565b8080611a9a906128e8565b9150506118c5565b5080611ae3576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611ada90612a0e565b60405180910390fd5b5050505050505050565b6000604051905090565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000611b2c82611b01565b9050919050565b611b3c81611b21565b8114611b4757600080fd5b50565b600081359050611b5981611b33565b92915050565b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b611bb282611b69565b810181811067ffffffffffffffff82111715611bd157611bd0611b7a565b5b80604052505050565b6000611be4611aed565b9050611bf08282611ba9565b919050565b600067ffffffffffffffff821115611c1057611c0f611b7a565b5b611c1982611b69565b9050602081019050919050565b82818337600083830152505050565b6000611c48611c4384611bf5565b611bda565b905082815260208101848484011115611c6457611c63611b64565b5b611c6f848285611c26565b509392505050565b600082601f830112611c8c57611c8b611b5f565b5b8135611c9c848260208601611c35565b91505092915050565b60008115159050919050565b611cba81611ca5565b8114611cc557600080fd5b50565b600081359050611cd781611cb1565b92915050565b600080600080600080600060e0888a031215611cfc57611cfb611af7565b5b6000611d0a8a828b01611b4a565b975050602088013567ffffffffffffffff811115611d2b57611d2a611afc565b5b611d378a828b01611c77565b965050604088013567ffffffffffffffff811115611d5857611d57611afc565b5b611d648a828b01611c77565b955050606088013567ffffffffffffffff811115611d8557611d84611afc565b5b611d918a828b01611c77565b945050608088013567ffffffffffffffff811115611db257611db1611afc565b5b611dbe8a828b01611c77565b93505060a088013567ffffffffffffffff811115611ddf57611dde611afc565b5b611deb8a828b01611c77565b92505060c0611dfc8a828b01611cc8565b91505092959891949750929550565b6000819050919050565b611e1e81611e0b565b8114611e2957600080fd5b50565b600081359050611e3b81611e15565b92915050565b600060208284031215611e5757611e56611af7565b5b6000611e6584828501611e2c565b91505092915050565b600081519050919050565b600082825260208201905092915050565b60005b83811015611ea8578082015181840152602081019050611e8d565b60008484015250505050565b6000611ebf82611e6e565b611ec98185611e79565b9350611ed9818560208601611e8a565b611ee281611b69565b840191505092915050565b611ef681611b21565b82525050565b611f0581611ca5565b82525050565b600060e0820190508181036000830152611f25818a611eb4565b90508181036020830152611f398189611eb4565b90508181036040830152611f4d8188611eb4565b90508181036060830152611f618187611eb4565b90508181036080830152611f758186611eb4565b9050611f8460a0830185611eed565b611f9160c0830184611efc565b98975050505050505050565b6000819050919050565b6000611fc2611fbd611fb884611b01565b611f9d565b611b01565b9050919050565b6000611fd482611fa7565b9050919050565b6000611fe682611fc9565b9050919050565b611ff681611fdb565b82525050565b60006020820190506120116000830184611fed565b92915050565b60006020828403121561202d5761202c611af7565b5b600061203b84828501611b4a565b91505092915050565b600060e082019050612059600083018a611eed565b818103602083015261206b8189611eb4565b9050818103604083015261207f8188611eb4565b905081810360608301526120938187611eb4565b905081810360808301526120a78186611eb4565b905081810360a08301526120bb8185611eb4565b90506120ca60c0830184611efc565b98975050505050505050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b600082825260208201905092915050565b600061211e82611e6e565b6121288185612102565b9350612138818560208601611e8a565b61214181611b69565b840191505092915050565b61215581611b21565b82525050565b61216481611ca5565b82525050565b600060e08301600083015184820360008601526121878282612113565b915050602083015184820360208601526121a18282612113565b915050604083015184820360408601526121bb8282612113565b915050606083015184820360608601526121d58282612113565b915050608083015184820360808601526121ef8282612113565b91505060a083015161220460a086018261214c565b5060c083015161221760c086018261215b565b508091505092915050565b600061222e838361216a565b905092915050565b6000602082019050919050565b600061224e826120d6565b61225881856120e1565b93508360208202850161226a856120f2565b8060005b858110156122a657848403895281516122878582612222565b945061229283612236565b925060208a0199505060018101905061226e565b50829750879550505050505092915050565b600060208201905081810360008301526122d28184612243565b905092915050565b60008060008060008060c087890312156122f7576122f6611af7565b5b600087013567ffffffffffffffff81111561231557612314611afc565b5b61232189828a01611c77565b965050602087013567ffffffffffffffff81111561234257612341611afc565b5b61234e89828a01611c77565b955050604087013567ffffffffffffffff81111561236f5761236e611afc565b5b61237b89828a01611c77565b945050606087013567ffffffffffffffff81111561239c5761239b611afc565b5b6123a889828a01611c77565b935050608087013567ffffffffffffffff8111156123c9576123c8611afc565b5b6123d589828a01611c77565b92505060a06123e689828a01611cc8565b9150509295509295509295565b60008151905061240281611b33565b92915050565b60006020828403121561241e5761241d611af7565b5b600061242c848285016123f3565b91505092915050565b7f48616e79612061646d696e2079616e67206469697a696e6b616e20756e74756b60008201527f206d656e67616b7365732e000000000000000000000000000000000000000000602082015250565b6000612491602b83611e79565b915061249c82612435565b604082019050919050565b600060208201905081810360008301526124c081612484565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061250e57607f821691505b602082108103612521576125206124c7565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b6000600883026125897fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8261254c565b612593868361254c565b95508019841693508086168417925050509392505050565b60006125c66125c16125bc84611e0b565b611f9d565b611e0b565b9050919050565b6000819050919050565b6125e0836125ab565b6125f46125ec826125cd565b848454612559565b825550505050565b600090565b6126096125fc565b6126148184846125d7565b505050565b5b818110156126385761262d600082612601565b60018101905061261a565b5050565b601f82111561267d5761264e81612527565b6126578461253c565b81016020851015612666578190505b61267a6126728561253c565b830182612619565b50505b505050565b600082821c905092915050565b60006126a060001984600802612682565b1980831691505092915050565b60006126b9838361268f565b9150826002028217905092915050565b6126d282611e6e565b67ffffffffffffffff8111156126eb576126ea611b7a565b5b6126f582546124f6565b61270082828561263c565b600060209050601f8311600181146127335760008415612721578287015190505b61272b85826126ad565b865550612793565b601f19841661274186612527565b60005b8281101561276957848901518255600182019150602085019450602081019050612744565b868310156127865784890151612782601f89168261268f565b8355505b6001600288020188555050505b505050505050565b60006020820190506127b06000830184611eed565b92915050565b6000815190506127c581611cb1565b92915050565b6000602082840312156127e1576127e0611af7565b5b60006127ef848285016127b6565b91505092915050565b7f48616e79612070656e6767756e61207465726461667461722079616e6720646960008201527f697a696e6b616e20756e74756b206d656e67616b7365732e0000000000000000602082015250565b6000612854603883611e79565b915061285f826127f8565b604082019050919050565b6000602082019050818103600083015261288381612847565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006128f382611e0b565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203612925576129246128b9565b5b600182019050919050565b7f48616e79612070617369656e2079616e67206469697a696e6b616e20756e747560008201527f6b206d656e67616b7365732e0000000000000000000000000000000000000000602082015250565b600061298c602c83611e79565b915061299782612930565b604082019050919050565b600060208201905081810360008301526129bb8161297f565b9050919050565b7f5573657220746964616b20646974656d756b616e2e0000000000000000000000600082015250565b60006129f8601583611e79565b9150612a03826129c2565b602082019050919050565b60006020820190508181036000830152612a27816129eb565b905091905056fea26469706673582212201fabd2a27151b73e8e13ab1819a3deb0ec7f41df6f4a393291be967dd32a73b864736f6c63430008110033";

type UserDataConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: UserDataConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class UserData__factory extends ContractFactory {
  constructor(...args: UserDataConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _rolesContractAddress: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<UserData> {
    return super.deploy(
      _rolesContractAddress,
      overrides || {}
    ) as Promise<UserData>;
  }
  override getDeployTransaction(
    _rolesContractAddress: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_rolesContractAddress, overrides || {});
  }
  override attach(address: string): UserData {
    return super.attach(address) as UserData;
  }
  override connect(signer: Signer): UserData__factory {
    return super.connect(signer) as UserData__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): UserDataInterface {
    return new utils.Interface(_abi) as UserDataInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): UserData {
    return new Contract(address, _abi, signerOrProvider) as UserData;
  }
}
