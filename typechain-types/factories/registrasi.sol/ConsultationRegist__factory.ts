/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  ConsultationRegist,
  ConsultationRegistInterface,
} from "../../registrasi.sol/ConsultationRegist";

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
    inputs: [
      {
        internalType: "uint256",
        name: "offset",
        type: "uint256",
      },
    ],
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
  "0x60806040523480156200001157600080fd5b50604051620024cb380380620024cb8339818101604052810190620000379190620000e8565b806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550506200011a565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620000b08262000083565b9050919050565b620000c281620000a3565b8114620000ce57600080fd5b50565b600081519050620000e281620000b7565b92915050565b6000602082840312156200010157620001006200007e565b5b60006200011184828501620000d1565b91505092915050565b6123a1806200012a6000396000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c8063392f5f641161005b578063392f5f64146100f357806346b5bef114610111578063ad49d82114610141578063c996b7cc146101715761007d565b806309052679146100825780630d3eafd6146100b9578063337c9ba6146100d7575b600080fd5b61009c600480360381019061009791906116e6565b61018f565b6040516100b09897969594939291906117c5565b60405180910390f35b6100c16105cc565b6040516100ce9190611883565b60405180910390f35b6100f160048036038101906100ec91906119d3565b6105d2565b005b6100fb6107f2565b6040516101089190611bac565b60405180910390f35b61012b60048036038101906101269190611bc7565b610816565b6040516101389190611bf4565b60405180910390f35b61015b60048036038101906101569190611bc7565b610855565b6040516101689190611e04565b60405180910390f35b610179611019565b6040516101869190611e04565b60405180910390f35b600160205281600052604060002081815481106101ab57600080fd5b9060005260206000209060080201600091509150508060000180546101cf90611e55565b80601f01602080910402602001604051908101604052809291908181526020018280546101fb90611e55565b80156102485780601f1061021d57610100808354040283529160200191610248565b820191906000526020600020905b81548152906001019060200180831161022b57829003601f168201915b50505050509080600101805461025d90611e55565b80601f016020809104026020016040519081016040528092919081815260200182805461028990611e55565b80156102d65780601f106102ab576101008083540402835291602001916102d6565b820191906000526020600020905b8154815290600101906020018083116102b957829003601f168201915b5050505050908060020180546102eb90611e55565b80601f016020809104026020016040519081016040528092919081815260200182805461031790611e55565b80156103645780601f1061033957610100808354040283529160200191610364565b820191906000526020600020905b81548152906001019060200180831161034757829003601f168201915b50505050509080600301805461037990611e55565b80601f01602080910402602001604051908101604052809291908181526020018280546103a590611e55565b80156103f25780601f106103c7576101008083540402835291602001916103f2565b820191906000526020600020905b8154815290600101906020018083116103d557829003601f168201915b50505050509080600401805461040790611e55565b80601f016020809104026020016040519081016040528092919081815260200182805461043390611e55565b80156104805780601f1061045557610100808354040283529160200191610480565b820191906000526020600020905b81548152906001019060200180831161046357829003601f168201915b50505050509080600501805461049590611e55565b80601f01602080910402602001604051908101604052809291908181526020018280546104c190611e55565b801561050e5780601f106104e35761010080835404028352916020019161050e565b820191906000526020600020905b8154815290600101906020018083116104f157829003601f168201915b50505050509080600601805461052390611e55565b80601f016020809104026020016040519081016040528092919081815260200182805461054f90611e55565b801561059c5780601f106105715761010080835404028352916020019161059c565b820191906000526020600020905b81548152906001019060200180831161057f57829003601f168201915b5050505050908060070160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905088565b60035481565b600160008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206040518061010001604052808981526020018881526020018781526020018681526020018581526020018481526020018381526020018a73ffffffffffffffffffffffffffffffffffffffff168152509080600181540180825580915050600190039060005260206000209060080201600090919091909150600082015181600001908161069f9190612028565b5060208201518160010190816106b59190612028565b5060408201518160020190816106cb9190612028565b5060608201518160030190816106e19190612028565b5060808201518160040190816106f79190612028565b5060a082015181600501908161070d9190612028565b5060c08201518160060190816107239190612028565b5060e08201518160070160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050506002889080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600360008154809291906107e390612129565b91905055505050505050505050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6002818154811061082657600080fd5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b606060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166324d7806c336040518263ffffffff1660e01b81526004016108b09190611bf4565b602060405180830381865afa1580156108cd573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108f191906121a9565b80610992575060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16635c4c9348336040518263ffffffff1660e01b81526004016109509190611bf4565b602060405180830381865afa15801561096d573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061099191906121a9565b5b6109d1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109c890612248565b60405180910390fd5b6000600a9050600081600a6109e69190612268565b67ffffffffffffffff8111156109ff576109fe6118a8565b5b604051908082528060200260200182016040528015610a3857816020015b610a256115e3565b815260200190600190039081610a1d5790505b5090506000808590505b60028054905081101561100d5760006001600060028481548110610a6957610a686122aa565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805480602002602001604051908101604052809291908181526020016000905b82821015610f75578382906000526020600020906008020160405180610100016040529081600082018054610b2290611e55565b80601f0160208091040260200160405190810160405280929190818152602001828054610b4e90611e55565b8015610b9b5780601f10610b7057610100808354040283529160200191610b9b565b820191906000526020600020905b815481529060010190602001808311610b7e57829003601f168201915b50505050508152602001600182018054610bb490611e55565b80601f0160208091040260200160405190810160405280929190818152602001828054610be090611e55565b8015610c2d5780601f10610c0257610100808354040283529160200191610c2d565b820191906000526020600020905b815481529060010190602001808311610c1057829003601f168201915b50505050508152602001600282018054610c4690611e55565b80601f0160208091040260200160405190810160405280929190818152602001828054610c7290611e55565b8015610cbf5780601f10610c9457610100808354040283529160200191610cbf565b820191906000526020600020905b815481529060010190602001808311610ca257829003601f168201915b50505050508152602001600382018054610cd890611e55565b80601f0160208091040260200160405190810160405280929190818152602001828054610d0490611e55565b8015610d515780601f10610d2657610100808354040283529160200191610d51565b820191906000526020600020905b815481529060010190602001808311610d3457829003601f168201915b50505050508152602001600482018054610d6a90611e55565b80601f0160208091040260200160405190810160405280929190818152602001828054610d9690611e55565b8015610de35780601f10610db857610100808354040283529160200191610de3565b820191906000526020600020905b815481529060010190602001808311610dc657829003601f168201915b50505050508152602001600582018054610dfc90611e55565b80601f0160208091040260200160405190810160405280929190818152602001828054610e2890611e55565b8015610e755780601f10610e4a57610100808354040283529160200191610e75565b820191906000526020600020905b815481529060010190602001808311610e5857829003601f168201915b50505050508152602001600682018054610e8e90611e55565b80601f0160208091040260200160405190810160405280929190818152602001828054610eba90611e55565b8015610f075780601f10610edc57610100808354040283529160200191610f07565b820191906000526020600020905b815481529060010190602001808311610eea57829003601f168201915b505050505081526020016007820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152505081526020019060010190610aee565b50505050905060005b815181108015610f995750600a86610f969190612268565b84105b15610ff857818181518110610fb157610fb06122aa565b5b6020026020010151858581518110610fcc57610fcb6122aa565b5b60200260200101819052508380610fe290612129565b9450508080610ff090612129565b915050610f7e565b5050808061100590612129565b915050610a42565b50819350505050919050565b606060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16631132beb5336040518263ffffffff1660e01b81526004016110749190611bf4565b602060405180830381865afa158015611091573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110b591906121a9565b6110f4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110eb9061234b565b60405180910390fd5b600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805480602002602001604051908101604052809291908181526020016000905b828210156115da57838290600052602060002090600802016040518061010001604052908160008201805461118790611e55565b80601f01602080910402602001604051908101604052809291908181526020018280546111b390611e55565b80156112005780601f106111d557610100808354040283529160200191611200565b820191906000526020600020905b8154815290600101906020018083116111e357829003601f168201915b5050505050815260200160018201805461121990611e55565b80601f016020809104026020016040519081016040528092919081815260200182805461124590611e55565b80156112925780601f1061126757610100808354040283529160200191611292565b820191906000526020600020905b81548152906001019060200180831161127557829003601f168201915b505050505081526020016002820180546112ab90611e55565b80601f01602080910402602001604051908101604052809291908181526020018280546112d790611e55565b80156113245780601f106112f957610100808354040283529160200191611324565b820191906000526020600020905b81548152906001019060200180831161130757829003601f168201915b5050505050815260200160038201805461133d90611e55565b80601f016020809104026020016040519081016040528092919081815260200182805461136990611e55565b80156113b65780601f1061138b576101008083540402835291602001916113b6565b820191906000526020600020905b81548152906001019060200180831161139957829003601f168201915b505050505081526020016004820180546113cf90611e55565b80601f01602080910402602001604051908101604052809291908181526020018280546113fb90611e55565b80156114485780601f1061141d57610100808354040283529160200191611448565b820191906000526020600020905b81548152906001019060200180831161142b57829003601f168201915b5050505050815260200160058201805461146190611e55565b80601f016020809104026020016040519081016040528092919081815260200182805461148d90611e55565b80156114da5780601f106114af576101008083540402835291602001916114da565b820191906000526020600020905b8154815290600101906020018083116114bd57829003601f168201915b505050505081526020016006820180546114f390611e55565b80601f016020809104026020016040519081016040528092919081815260200182805461151f90611e55565b801561156c5780601f106115415761010080835404028352916020019161156c565b820191906000526020600020905b81548152906001019060200180831161154f57829003601f168201915b505050505081526020016007820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152505081526020019060010190611153565b50505050905090565b60405180610100016040528060608152602001606081526020016060815260200160608152602001606081526020016060815260200160608152602001600073ffffffffffffffffffffffffffffffffffffffff1681525090565b6000604051905090565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061167d82611652565b9050919050565b61168d81611672565b811461169857600080fd5b50565b6000813590506116aa81611684565b92915050565b6000819050919050565b6116c3816116b0565b81146116ce57600080fd5b50565b6000813590506116e0816116ba565b92915050565b600080604083850312156116fd576116fc611648565b5b600061170b8582860161169b565b925050602061171c858286016116d1565b9150509250929050565b600081519050919050565b600082825260208201905092915050565b60005b83811015611760578082015181840152602081019050611745565b60008484015250505050565b6000601f19601f8301169050919050565b600061178882611726565b6117928185611731565b93506117a2818560208601611742565b6117ab8161176c565b840191505092915050565b6117bf81611672565b82525050565b60006101008201905081810360008301526117e0818b61177d565b905081810360208301526117f4818a61177d565b90508181036040830152611808818961177d565b9050818103606083015261181c818861177d565b90508181036080830152611830818761177d565b905081810360a0830152611844818661177d565b905081810360c0830152611858818561177d565b905061186760e08301846117b6565b9998505050505050505050565b61187d816116b0565b82525050565b60006020820190506118986000830184611874565b92915050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6118e08261176c565b810181811067ffffffffffffffff821117156118ff576118fe6118a8565b5b80604052505050565b600061191261163e565b905061191e82826118d7565b919050565b600067ffffffffffffffff82111561193e5761193d6118a8565b5b6119478261176c565b9050602081019050919050565b82818337600083830152505050565b600061197661197184611923565b611908565b905082815260208101848484011115611992576119916118a3565b5b61199d848285611954565b509392505050565b600082601f8301126119ba576119b961189e565b5b81356119ca848260208601611963565b91505092915050565b600080600080600080600080610100898b0312156119f4576119f3611648565b5b6000611a028b828c0161169b565b985050602089013567ffffffffffffffff811115611a2357611a2261164d565b5b611a2f8b828c016119a5565b975050604089013567ffffffffffffffff811115611a5057611a4f61164d565b5b611a5c8b828c016119a5565b965050606089013567ffffffffffffffff811115611a7d57611a7c61164d565b5b611a898b828c016119a5565b955050608089013567ffffffffffffffff811115611aaa57611aa961164d565b5b611ab68b828c016119a5565b94505060a089013567ffffffffffffffff811115611ad757611ad661164d565b5b611ae38b828c016119a5565b93505060c089013567ffffffffffffffff811115611b0457611b0361164d565b5b611b108b828c016119a5565b92505060e089013567ffffffffffffffff811115611b3157611b3061164d565b5b611b3d8b828c016119a5565b9150509295985092959890939650565b6000819050919050565b6000611b72611b6d611b6884611652565b611b4d565b611652565b9050919050565b6000611b8482611b57565b9050919050565b6000611b9682611b79565b9050919050565b611ba681611b8b565b82525050565b6000602082019050611bc16000830184611b9d565b92915050565b600060208284031215611bdd57611bdc611648565b5b6000611beb848285016116d1565b91505092915050565b6000602082019050611c0960008301846117b6565b92915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b600082825260208201905092915050565b6000611c5782611726565b611c618185611c3b565b9350611c71818560208601611742565b611c7a8161176c565b840191505092915050565b611c8e81611672565b82525050565b6000610100830160008301518482036000860152611cb28282611c4c565b91505060208301518482036020860152611ccc8282611c4c565b91505060408301518482036040860152611ce68282611c4c565b91505060608301518482036060860152611d008282611c4c565b91505060808301518482036080860152611d1a8282611c4c565b91505060a083015184820360a0860152611d348282611c4c565b91505060c083015184820360c0860152611d4e8282611c4c565b91505060e0830151611d6360e0860182611c85565b508091505092915050565b6000611d7a8383611c94565b905092915050565b6000602082019050919050565b6000611d9a82611c0f565b611da48185611c1a565b935083602082028501611db685611c2b565b8060005b85811015611df25784840389528151611dd38582611d6e565b9450611dde83611d82565b925060208a01995050600181019050611dba565b50829750879550505050505092915050565b60006020820190508181036000830152611e1e8184611d8f565b905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680611e6d57607f821691505b602082108103611e8057611e7f611e26565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302611ee87fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82611eab565b611ef28683611eab565b95508019841693508086168417925050509392505050565b6000611f25611f20611f1b846116b0565b611b4d565b6116b0565b9050919050565b6000819050919050565b611f3f83611f0a565b611f53611f4b82611f2c565b848454611eb8565b825550505050565b600090565b611f68611f5b565b611f73818484611f36565b505050565b5b81811015611f9757611f8c600082611f60565b600181019050611f79565b5050565b601f821115611fdc57611fad81611e86565b611fb684611e9b565b81016020851015611fc5578190505b611fd9611fd185611e9b565b830182611f78565b50505b505050565b600082821c905092915050565b6000611fff60001984600802611fe1565b1980831691505092915050565b60006120188383611fee565b9150826002028217905092915050565b61203182611726565b67ffffffffffffffff81111561204a576120496118a8565b5b6120548254611e55565b61205f828285611f9b565b600060209050601f8311600181146120925760008415612080578287015190505b61208a858261200c565b8655506120f2565b601f1984166120a086611e86565b60005b828110156120c8578489015182556001820191506020850194506020810190506120a3565b868310156120e557848901516120e1601f891682611fee565b8355505b6001600288020188555050505b505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000612134826116b0565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203612166576121656120fa565b5b600182019050919050565b60008115159050919050565b61218681612171565b811461219157600080fd5b50565b6000815190506121a38161217d565b92915050565b6000602082840312156121bf576121be611648565b5b60006121cd84828501612194565b91505092915050565b7f48616e79612061646d696e206174617520646f6b7465722079616e672064696960008201527f7a696e6b616e20756e74756b206d656e67616b7365732e000000000000000000602082015250565b6000612232603783611731565b915061223d826121d6565b604082019050919050565b6000602082019050818103600083015261226181612225565b9050919050565b6000612273826116b0565b915061227e836116b0565b925082820261228c816116b0565b915082820484148315176122a3576122a26120fa565b5b5092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f48616e79612070617369656e2079616e67206469697a696e6b616e20756e747560008201527f6b206d656e67616b736573000000000000000000000000000000000000000000602082015250565b6000612335602b83611731565b9150612340826122d9565b604082019050919050565b6000602082019050818103600083015261236481612328565b905091905056fea26469706673582212208b89a6ccb3872ec3e924073feaee25953f3ca736f41a8575cff5eedb6977f70d64736f6c63430008110033";

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
