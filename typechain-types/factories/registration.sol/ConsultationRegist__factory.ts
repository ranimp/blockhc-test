/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  ConsultationRegist,
  ConsultationRegistInterface,
} from "../../registration.sol/ConsultationRegist";

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
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "accountsWithRegistrations",
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
        name: "_telepon",
        type: "string",
      },
      {
        internalType: "string",
        name: "_namaDokter",
        type: "string",
      },
      {
        internalType: "string",
        name: "_sesi",
        type: "string",
      },
      {
        internalType: "string",
        name: "_tanggal",
        type: "string",
      },
      {
        internalType: "string",
        name: "_keluhan",
        type: "string",
      },
      {
        internalType: "string",
        name: "_gender",
        type: "string",
      },
    ],
    name: "addRegistration",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getAllRegistrations",
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
            name: "telepon",
            type: "string",
          },
          {
            internalType: "string",
            name: "namaDokter",
            type: "string",
          },
          {
            internalType: "string",
            name: "sesi",
            type: "string",
          },
          {
            internalType: "string",
            name: "tanggal",
            type: "string",
          },
          {
            internalType: "string",
            name: "keluhan",
            type: "string",
          },
          {
            internalType: "string",
            name: "gender",
            type: "string",
          },
          {
            internalType: "address",
            name: "wallet",
            type: "address",
          },
        ],
        internalType: "struct ConsultationRegist.Data[][]",
        name: "",
        type: "tuple[][]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getAllSesi",
    outputs: [
      {
        internalType: "string[][][]",
        name: "",
        type: "string[][][]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getRegistrationEvidence",
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
            name: "telepon",
            type: "string",
          },
          {
            internalType: "string",
            name: "namaDokter",
            type: "string",
          },
          {
            internalType: "string",
            name: "sesi",
            type: "string",
          },
          {
            internalType: "string",
            name: "tanggal",
            type: "string",
          },
          {
            internalType: "string",
            name: "keluhan",
            type: "string",
          },
          {
            internalType: "string",
            name: "gender",
            type: "string",
          },
          {
            internalType: "address",
            name: "wallet",
            type: "address",
          },
        ],
        internalType: "struct ConsultationRegist.Data[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "registrationCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
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
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "registrations",
    outputs: [
      {
        internalType: "string",
        name: "nama",
        type: "string",
      },
      {
        internalType: "string",
        name: "telepon",
        type: "string",
      },
      {
        internalType: "string",
        name: "namaDokter",
        type: "string",
      },
      {
        internalType: "string",
        name: "sesi",
        type: "string",
      },
      {
        internalType: "string",
        name: "tanggal",
        type: "string",
      },
      {
        internalType: "string",
        name: "keluhan",
        type: "string",
      },
      {
        internalType: "string",
        name: "gender",
        type: "string",
      },
      {
        internalType: "address",
        name: "wallet",
        type: "address",
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
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604051620031bf380380620031bf8339818101604052810190620000379190620000e8565b806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550506200011a565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620000b08262000083565b9050919050565b620000c281620000a3565b8114620000ce57600080fd5b50565b600081519050620000e281620000b7565b92915050565b6000602082840312156200010157620001006200007e565b5b60006200011184828501620000d1565b91505092915050565b613095806200012a6000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c8063392f5f641161005b578063392f5f641461011c5780633b4ed7031461013a57806346b5bef114610158578063c996b7cc1461018857610088565b8063090526791461008d5780630c38af4a146100c45780630d3eafd6146100e2578063337c9ba614610100575b600080fd5b6100a760048036038101906100a29190611fb8565b6101a6565b6040516100bb989796959493929190612097565b60405180910390f35b6100cc6105e3565b6040516100d991906123fd565b60405180910390f35b6100ea610d28565b6040516100f7919061242e565b60405180910390f35b61011a6004803603810190610115919061257e565b610d2e565b005b6101246111b3565b6040516101319190612757565b60405180910390f35b6101426111d7565b60405161014f91906129b8565b60405180910390f35b610172600480360381019061016d91906129da565b611907565b60405161017f9190612a07565b60405180910390f35b610190611946565b60405161019d9190612aa8565b60405180910390f35b600160205281600052604060002081815481106101c257600080fd5b9060005260206000209060080201600091509150508060000180546101e690612af9565b80601f016020809104026020016040519081016040528092919081815260200182805461021290612af9565b801561025f5780601f106102345761010080835404028352916020019161025f565b820191906000526020600020905b81548152906001019060200180831161024257829003601f168201915b50505050509080600101805461027490612af9565b80601f01602080910402602001604051908101604052809291908181526020018280546102a090612af9565b80156102ed5780601f106102c2576101008083540402835291602001916102ed565b820191906000526020600020905b8154815290600101906020018083116102d057829003601f168201915b50505050509080600201805461030290612af9565b80601f016020809104026020016040519081016040528092919081815260200182805461032e90612af9565b801561037b5780601f106103505761010080835404028352916020019161037b565b820191906000526020600020905b81548152906001019060200180831161035e57829003601f168201915b50505050509080600301805461039090612af9565b80601f01602080910402602001604051908101604052809291908181526020018280546103bc90612af9565b80156104095780601f106103de57610100808354040283529160200191610409565b820191906000526020600020905b8154815290600101906020018083116103ec57829003601f168201915b50505050509080600401805461041e90612af9565b80601f016020809104026020016040519081016040528092919081815260200182805461044a90612af9565b80156104975780601f1061046c57610100808354040283529160200191610497565b820191906000526020600020905b81548152906001019060200180831161047a57829003601f168201915b5050505050908060050180546104ac90612af9565b80601f01602080910402602001604051908101604052809291908181526020018280546104d890612af9565b80156105255780601f106104fa57610100808354040283529160200191610525565b820191906000526020600020905b81548152906001019060200180831161050857829003601f168201915b50505050509080600601805461053a90612af9565b80601f016020809104026020016040519081016040528092919081815260200182805461056690612af9565b80156105b35780601f10610588576101008083540402835291602001916105b3565b820191906000526020600020905b81548152906001019060200180831161059657829003601f168201915b5050505050908060070160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905088565b606060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166324d7806c336040518263ffffffff1660e01b815260040161063e9190612a07565b602060405180830381865afa15801561065b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061067f9190612b62565b80610720575060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16635c4c9348336040518263ffffffff1660e01b81526004016106de9190612a07565b602060405180830381865afa1580156106fb573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061071f9190612b62565b5b61075f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161075690612c01565b60405180910390fd5b6000600280549050905060008167ffffffffffffffff81111561078557610784612453565b5b6040519080825280602002602001820160405280156107b857816020015b60608152602001906001900390816107a35790505b50905060005b82811015610d1f5760016000600283815481106107de576107dd612c21565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805480602002602001604051908101604052809291908181526020016000905b82821015610cea57838290600052602060002090600802016040518061010001604052908160008201805461089790612af9565b80601f01602080910402602001604051908101604052809291908181526020018280546108c390612af9565b80156109105780601f106108e557610100808354040283529160200191610910565b820191906000526020600020905b8154815290600101906020018083116108f357829003601f168201915b5050505050815260200160018201805461092990612af9565b80601f016020809104026020016040519081016040528092919081815260200182805461095590612af9565b80156109a25780601f10610977576101008083540402835291602001916109a2565b820191906000526020600020905b81548152906001019060200180831161098557829003601f168201915b505050505081526020016002820180546109bb90612af9565b80601f01602080910402602001604051908101604052809291908181526020018280546109e790612af9565b8015610a345780601f10610a0957610100808354040283529160200191610a34565b820191906000526020600020905b815481529060010190602001808311610a1757829003601f168201915b50505050508152602001600382018054610a4d90612af9565b80601f0160208091040260200160405190810160405280929190818152602001828054610a7990612af9565b8015610ac65780601f10610a9b57610100808354040283529160200191610ac6565b820191906000526020600020905b815481529060010190602001808311610aa957829003601f168201915b50505050508152602001600482018054610adf90612af9565b80601f0160208091040260200160405190810160405280929190818152602001828054610b0b90612af9565b8015610b585780601f10610b2d57610100808354040283529160200191610b58565b820191906000526020600020905b815481529060010190602001808311610b3b57829003601f168201915b50505050508152602001600582018054610b7190612af9565b80601f0160208091040260200160405190810160405280929190818152602001828054610b9d90612af9565b8015610bea5780601f10610bbf57610100808354040283529160200191610bea565b820191906000526020600020905b815481529060010190602001808311610bcd57829003601f168201915b50505050508152602001600682018054610c0390612af9565b80601f0160208091040260200160405190810160405280929190818152602001828054610c2f90612af9565b8015610c7c5780601f10610c5157610100808354040283529160200191610c7c565b820191906000526020600020905b815481529060010190602001808311610c5f57829003601f168201915b505050505081526020016007820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152505081526020019060010190610863565b50505050828281518110610d0157610d00612c21565b5b60200260200101819052508080610d1790612c7f565b9150506107be565b50809250505090565b60035481565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166324d7806c336040518263ffffffff1660e01b8152600401610d879190612a07565b602060405180830381865afa158015610da4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610dc89190612b62565b80610e69575060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16635c4c9348336040518263ffffffff1660e01b8152600401610e279190612a07565b602060405180830381865afa158015610e44573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e689190612b62565b5b80610f0a575060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16631132beb5336040518263ffffffff1660e01b8152600401610ec89190612a07565b602060405180830381865afa158015610ee5573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f099190612b62565b5b610f49576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f4090612d39565b60405180910390fd5b600160008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206040518061010001604052808981526020018881526020018781526020018681526020018581526020018481526020018381526020018a73ffffffffffffffffffffffffffffffffffffffff16815250908060018154018082558091505060019003906000526020600020906008020160009091909190915060008201518160000190816110169190612efb565b50602082015181600101908161102c9190612efb565b5060408201518160020190816110429190612efb565b5060608201518160030190816110589190612efb565b50608082015181600401908161106e9190612efb565b5060a08201518160050190816110849190612efb565b5060c082015181600601908161109a9190612efb565b5060e08201518160070160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505060018060008a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208054905003611191576002889080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505b600360008154809291906111a490612c7f565b91905055505050505050505050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b606060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166324d7806c336040518263ffffffff1660e01b81526004016112329190612a07565b602060405180830381865afa15801561124f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112739190612b62565b80611314575060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16635c4c9348336040518263ffffffff1660e01b81526004016112d29190612a07565b602060405180830381865afa1580156112ef573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113139190612b62565b5b806113b5575060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16631132beb5336040518263ffffffff1660e01b81526004016113739190612a07565b602060405180830381865afa158015611390573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113b49190612b62565b5b6113f4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016113eb90612d39565b60405180910390fd5b6000600280549050905060008167ffffffffffffffff81111561141a57611419612453565b5b60405190808252806020026020018201604052801561144d57816020015b60608152602001906001900390816114385790505b50905060005b828110156118fe576000600160006002848154811061147557611474612c21565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208054905090508067ffffffffffffffff8111156114fa576114f9612453565b5b60405190808252806020026020018201604052801561152d57816020015b60608152602001906001900390816115185790505b5083838151811061154157611540612c21565b5b602002602001018190525060005b818110156118e957600267ffffffffffffffff81111561157257611571612453565b5b6040519080825280602002602001820160405280156115a557816020015b60608152602001906001900390816115905790505b508484815181106115b9576115b8612c21565b5b602002602001015182815181106115d3576115d2612c21565b5b602002602001018190525060016000600285815481106115f6576115f5612c21565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020818154811061166d5761166c612c21565b5b9060005260206000209060080201600401805461168990612af9565b80601f01602080910402602001604051908101604052809291908181526020018280546116b590612af9565b80156117025780601f106116d757610100808354040283529160200191611702565b820191906000526020600020905b8154815290600101906020018083116116e557829003601f168201915b505050505084848151811061171a57611719612c21565b5b6020026020010151828151811061173457611733612c21565b5b602002602001015160008151811061174f5761174e612c21565b5b6020026020010181905250600160006002858154811061177257611771612c21565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081815481106117e9576117e8612c21565b5b9060005260206000209060080201600301805461180590612af9565b80601f016020809104026020016040519081016040528092919081815260200182805461183190612af9565b801561187e5780601f106118535761010080835404028352916020019161187e565b820191906000526020600020905b81548152906001019060200180831161186157829003601f168201915b505050505084848151811061189657611895612c21565b5b602002602001015182815181106118b0576118af612c21565b5b60200260200101516001815181106118cb576118ca612c21565b5b602002602001018190525080806118e190612c7f565b91505061154f565b505080806118f690612c7f565b915050611453565b50809250505090565b6002818154811061191757600080fd5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b606060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16631132beb5336040518263ffffffff1660e01b81526004016119a19190612a07565b602060405180830381865afa1580156119be573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906119e29190612b62565b611a21576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611a189061303f565b60405180910390fd5b600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805480602002602001604051908101604052809291908181526020016000905b82821015611f07578382906000526020600020906008020160405180610100016040529081600082018054611ab490612af9565b80601f0160208091040260200160405190810160405280929190818152602001828054611ae090612af9565b8015611b2d5780601f10611b0257610100808354040283529160200191611b2d565b820191906000526020600020905b815481529060010190602001808311611b1057829003601f168201915b50505050508152602001600182018054611b4690612af9565b80601f0160208091040260200160405190810160405280929190818152602001828054611b7290612af9565b8015611bbf5780601f10611b9457610100808354040283529160200191611bbf565b820191906000526020600020905b815481529060010190602001808311611ba257829003601f168201915b50505050508152602001600282018054611bd890612af9565b80601f0160208091040260200160405190810160405280929190818152602001828054611c0490612af9565b8015611c515780601f10611c2657610100808354040283529160200191611c51565b820191906000526020600020905b815481529060010190602001808311611c3457829003601f168201915b50505050508152602001600382018054611c6a90612af9565b80601f0160208091040260200160405190810160405280929190818152602001828054611c9690612af9565b8015611ce35780601f10611cb857610100808354040283529160200191611ce3565b820191906000526020600020905b815481529060010190602001808311611cc657829003601f168201915b50505050508152602001600482018054611cfc90612af9565b80601f0160208091040260200160405190810160405280929190818152602001828054611d2890612af9565b8015611d755780601f10611d4a57610100808354040283529160200191611d75565b820191906000526020600020905b815481529060010190602001808311611d5857829003601f168201915b50505050508152602001600582018054611d8e90612af9565b80601f0160208091040260200160405190810160405280929190818152602001828054611dba90612af9565b8015611e075780601f10611ddc57610100808354040283529160200191611e07565b820191906000526020600020905b815481529060010190602001808311611dea57829003601f168201915b50505050508152602001600682018054611e2090612af9565b80601f0160208091040260200160405190810160405280929190818152602001828054611e4c90612af9565b8015611e995780601f10611e6e57610100808354040283529160200191611e99565b820191906000526020600020905b815481529060010190602001808311611e7c57829003601f168201915b505050505081526020016007820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152505081526020019060010190611a80565b50505050905090565b6000604051905090565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000611f4f82611f24565b9050919050565b611f5f81611f44565b8114611f6a57600080fd5b50565b600081359050611f7c81611f56565b92915050565b6000819050919050565b611f9581611f82565b8114611fa057600080fd5b50565b600081359050611fb281611f8c565b92915050565b60008060408385031215611fcf57611fce611f1a565b5b6000611fdd85828601611f6d565b9250506020611fee85828601611fa3565b9150509250929050565b600081519050919050565b600082825260208201905092915050565b60005b83811015612032578082015181840152602081019050612017565b60008484015250505050565b6000601f19601f8301169050919050565b600061205a82611ff8565b6120648185612003565b9350612074818560208601612014565b61207d8161203e565b840191505092915050565b61209181611f44565b82525050565b60006101008201905081810360008301526120b2818b61204f565b905081810360208301526120c6818a61204f565b905081810360408301526120da818961204f565b905081810360608301526120ee818861204f565b90508181036080830152612102818761204f565b905081810360a0830152612116818661204f565b905081810360c083015261212a818561204f565b905061213960e0830184612088565b9998505050505050505050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b600082825260208201905092915050565b60006121ba82611ff8565b6121c4818561219e565b93506121d4818560208601612014565b6121dd8161203e565b840191505092915050565b6121f181611f44565b82525050565b600061010083016000830151848203600086015261221582826121af565b9150506020830151848203602086015261222f82826121af565b9150506040830151848203604086015261224982826121af565b9150506060830151848203606086015261226382826121af565b9150506080830151848203608086015261227d82826121af565b91505060a083015184820360a086015261229782826121af565b91505060c083015184820360c08601526122b182826121af565b91505060e08301516122c660e08601826121e8565b508091505092915050565b60006122dd83836121f7565b905092915050565b6000602082019050919050565b60006122fd82612172565b612307818561217d565b9350836020820285016123198561218e565b8060005b85811015612355578484038952815161233685826122d1565b9450612341836122e5565b925060208a0199505060018101905061231d565b50829750879550505050505092915050565b600061237383836122f2565b905092915050565b6000602082019050919050565b600061239382612146565b61239d8185612151565b9350836020820285016123af85612162565b8060005b858110156123eb57848403895281516123cc8582612367565b94506123d78361237b565b925060208a019950506001810190506123b3565b50829750879550505050505092915050565b600060208201905081810360008301526124178184612388565b905092915050565b61242881611f82565b82525050565b6000602082019050612443600083018461241f565b92915050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b61248b8261203e565b810181811067ffffffffffffffff821117156124aa576124a9612453565b5b80604052505050565b60006124bd611f10565b90506124c98282612482565b919050565b600067ffffffffffffffff8211156124e9576124e8612453565b5b6124f28261203e565b9050602081019050919050565b82818337600083830152505050565b600061252161251c846124ce565b6124b3565b90508281526020810184848401111561253d5761253c61244e565b5b6125488482856124ff565b509392505050565b600082601f83011261256557612564612449565b5b813561257584826020860161250e565b91505092915050565b600080600080600080600080610100898b03121561259f5761259e611f1a565b5b60006125ad8b828c01611f6d565b985050602089013567ffffffffffffffff8111156125ce576125cd611f1f565b5b6125da8b828c01612550565b975050604089013567ffffffffffffffff8111156125fb576125fa611f1f565b5b6126078b828c01612550565b965050606089013567ffffffffffffffff81111561262857612627611f1f565b5b6126348b828c01612550565b955050608089013567ffffffffffffffff81111561265557612654611f1f565b5b6126618b828c01612550565b94505060a089013567ffffffffffffffff81111561268257612681611f1f565b5b61268e8b828c01612550565b93505060c089013567ffffffffffffffff8111156126af576126ae611f1f565b5b6126bb8b828c01612550565b92505060e089013567ffffffffffffffff8111156126dc576126db611f1f565b5b6126e88b828c01612550565b9150509295985092959890939650565b6000819050919050565b600061271d61271861271384611f24565b6126f8565b611f24565b9050919050565b600061272f82612702565b9050919050565b600061274182612724565b9050919050565b61275181612736565b82525050565b600060208201905061276c6000830184612748565b92915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b600061280283836121af565b905092915050565b6000602082019050919050565b6000612822826127ca565b61282c81856127d5565b93508360208202850161283e856127e6565b8060005b8581101561287a578484038952815161285b85826127f6565b94506128668361280a565b925060208a01995050600181019050612842565b50829750879550505050505092915050565b60006128988383612817565b905092915050565b6000602082019050919050565b60006128b88261279e565b6128c281856127a9565b9350836020820285016128d4856127ba565b8060005b8581101561291057848403895281516128f1858261288c565b94506128fc836128a0565b925060208a019950506001810190506128d8565b50829750879550505050505092915050565b600061292e83836128ad565b905092915050565b6000602082019050919050565b600061294e82612772565b612958818561277d565b93508360208202850161296a8561278e565b8060005b858110156129a657848403895281516129878582612922565b945061299283612936565b925060208a0199505060018101905061296e565b50829750879550505050505092915050565b600060208201905081810360008301526129d28184612943565b905092915050565b6000602082840312156129f0576129ef611f1a565b5b60006129fe84828501611fa3565b91505092915050565b6000602082019050612a1c6000830184612088565b92915050565b600082825260208201905092915050565b6000612a3e82612172565b612a488185612a22565b935083602082028501612a5a8561218e565b8060005b85811015612a965784840389528151612a7785826122d1565b9450612a82836122e5565b925060208a01995050600181019050612a5e565b50829750879550505050505092915050565b60006020820190508181036000830152612ac28184612a33565b905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680612b1157607f821691505b602082108103612b2457612b23612aca565b5b50919050565b60008115159050919050565b612b3f81612b2a565b8114612b4a57600080fd5b50565b600081519050612b5c81612b36565b92915050565b600060208284031215612b7857612b77611f1a565b5b6000612b8684828501612b4d565b91505092915050565b7f48616e79612061646d696e206174617520646f6b7465722079616e672064696960008201527f7a696e6b616e20756e74756b206d656e67616b7365732e000000000000000000602082015250565b6000612beb603783612003565b9150612bf682612b8f565b604082019050919050565b60006020820190508181036000830152612c1a81612bde565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000612c8a82611f82565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203612cbc57612cbb612c50565b5b600182019050919050565b7f48616e79612070656e6767756e61207465726461667461722079616e6720646960008201527f697a696e6b616e20756e74756b206d656e67616b7365732e0000000000000000602082015250565b6000612d23603883612003565b9150612d2e82612cc7565b604082019050919050565b60006020820190508181036000830152612d5281612d16565b9050919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302612dbb7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82612d7e565b612dc58683612d7e565b95508019841693508086168417925050509392505050565b6000612df8612df3612dee84611f82565b6126f8565b611f82565b9050919050565b6000819050919050565b612e1283612ddd565b612e26612e1e82612dff565b848454612d8b565b825550505050565b600090565b612e3b612e2e565b612e46818484612e09565b505050565b5b81811015612e6a57612e5f600082612e33565b600181019050612e4c565b5050565b601f821115612eaf57612e8081612d59565b612e8984612d6e565b81016020851015612e98578190505b612eac612ea485612d6e565b830182612e4b565b50505b505050565b600082821c905092915050565b6000612ed260001984600802612eb4565b1980831691505092915050565b6000612eeb8383612ec1565b9150826002028217905092915050565b612f0482611ff8565b67ffffffffffffffff811115612f1d57612f1c612453565b5b612f278254612af9565b612f32828285612e6e565b600060209050601f831160018114612f655760008415612f53578287015190505b612f5d8582612edf565b865550612fc5565b601f198416612f7386612d59565b60005b82811015612f9b57848901518255600182019150602085019450602081019050612f76565b86831015612fb85784890151612fb4601f891682612ec1565b8355505b6001600288020188555050505b505050505050565b7f48616e79612070617369656e2079616e67206469697a696e6b616e20756e747560008201527f6b206d656e67616b7365732e0000000000000000000000000000000000000000602082015250565b6000613029602c83612003565b915061303482612fcd565b604082019050919050565b600060208201905081810360008301526130588161301c565b905091905056fea2646970667358221220ecf0ed500ac34ac82a7a53115bfae642a3f4ac08c36730bb508a226007af3f4a64736f6c63430008110033";

type ConsultationRegistConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ConsultationRegistConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ConsultationRegist__factory extends ContractFactory {
  constructor(...args: ConsultationRegistConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _rolesContractAddress: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ConsultationRegist> {
    return super.deploy(
      _rolesContractAddress,
      overrides || {}
    ) as Promise<ConsultationRegist>;
  }
  override getDeployTransaction(
    _rolesContractAddress: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_rolesContractAddress, overrides || {});
  }
  override attach(address: string): ConsultationRegist {
    return super.attach(address) as ConsultationRegist;
  }
  override connect(signer: Signer): ConsultationRegist__factory {
    return super.connect(signer) as ConsultationRegist__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ConsultationRegistInterface {
    return new utils.Interface(_abi) as ConsultationRegistInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ConsultationRegist {
    return new Contract(address, _abi, signerOrProvider) as ConsultationRegist;
  }
}
