/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  NounsDescriptor,
  NounsDescriptorInterface,
} from "../NounsDescriptor";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract INounsArt",
        name: "_art",
        type: "address",
      },
      {
        internalType: "contract ISVGRenderer",
        name: "_renderer",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "PartsAreLocked",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "contract INounsArt",
        name: "art",
        type: "address",
      },
    ],
    name: "ArtUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [],
    name: "PartsLocked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "contract ISVGRenderer",
        name: "renderer",
        type: "address",
      },
    ],
    name: "RendererUpdated",
    type: "event",
  },
  {
    inputs: [],
    name: "accessoryCount",
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
        components: [
          {
            internalType: "uint96",
            name: "length",
            type: "uint96",
          },
          {
            internalType: "bytes",
            name: "data",
            type: "bytes",
          },
        ],
        internalType: "struct INounsArt.NounArt",
        name: "accessory",
        type: "tuple",
      },
    ],
    name: "addAccessory",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "background",
        type: "string",
      },
    ],
    name: "addBackground",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint96",
            name: "length",
            type: "uint96",
          },
          {
            internalType: "bytes",
            name: "data",
            type: "bytes",
          },
        ],
        internalType: "struct INounsArt.NounArt",
        name: "body",
        type: "tuple",
      },
    ],
    name: "addBody",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint96",
            name: "length",
            type: "uint96",
          },
          {
            internalType: "bytes",
            name: "data",
            type: "bytes",
          },
        ],
        internalType: "struct INounsArt.NounArt",
        name: "glasses",
        type: "tuple",
      },
    ],
    name: "addGlasses",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint96",
            name: "length",
            type: "uint96",
          },
          {
            internalType: "bytes",
            name: "data",
            type: "bytes",
          },
        ],
        internalType: "struct INounsArt.NounArt",
        name: "head",
        type: "tuple",
      },
    ],
    name: "addHead",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint96",
            name: "length",
            type: "uint96",
          },
          {
            internalType: "bytes",
            name: "data",
            type: "bytes",
          },
        ],
        internalType: "struct INounsArt.NounArt[]",
        name: "accessories",
        type: "tuple[]",
      },
    ],
    name: "addManyAccessories",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string[]",
        name: "backgrounds",
        type: "string[]",
      },
    ],
    name: "addManyBackgrounds",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint96",
            name: "length",
            type: "uint96",
          },
          {
            internalType: "bytes",
            name: "data",
            type: "bytes",
          },
        ],
        internalType: "struct INounsArt.NounArt[]",
        name: "bodies",
        type: "tuple[]",
      },
    ],
    name: "addManyBodies",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint96",
            name: "length",
            type: "uint96",
          },
          {
            internalType: "bytes",
            name: "data",
            type: "bytes",
          },
        ],
        internalType: "struct INounsArt.NounArt[]",
        name: "glasses",
        type: "tuple[]",
      },
    ],
    name: "addManyGlasses",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint96",
            name: "length",
            type: "uint96",
          },
          {
            internalType: "bytes",
            name: "data",
            type: "bytes",
          },
        ],
        internalType: "struct INounsArt.NounArt[]",
        name: "heads",
        type: "tuple[]",
      },
    ],
    name: "addManyHeads",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "arePartsLocked",
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
    inputs: [],
    name: "art",
    outputs: [
      {
        internalType: "contract INounsArt",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "backgroundCount",
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
    inputs: [],
    name: "bodyCount",
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
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "uint48",
            name: "background",
            type: "uint48",
          },
          {
            internalType: "uint48",
            name: "body",
            type: "uint48",
          },
          {
            internalType: "uint48",
            name: "accessory",
            type: "uint48",
          },
          {
            internalType: "uint48",
            name: "head",
            type: "uint48",
          },
          {
            internalType: "uint48",
            name: "glasses",
            type: "uint48",
          },
        ],
        internalType: "struct INounsSeeder.Seed",
        name: "seed",
        type: "tuple",
      },
    ],
    name: "dataURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint48",
            name: "background",
            type: "uint48",
          },
          {
            internalType: "uint48",
            name: "body",
            type: "uint48",
          },
          {
            internalType: "uint48",
            name: "accessory",
            type: "uint48",
          },
          {
            internalType: "uint48",
            name: "head",
            type: "uint48",
          },
          {
            internalType: "uint48",
            name: "glasses",
            type: "uint48",
          },
        ],
        internalType: "struct INounsSeeder.Seed",
        name: "seed",
        type: "tuple",
      },
    ],
    name: "generateSVGImage",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "description",
        type: "string",
      },
      {
        components: [
          {
            internalType: "uint48",
            name: "background",
            type: "uint48",
          },
          {
            internalType: "uint48",
            name: "body",
            type: "uint48",
          },
          {
            internalType: "uint48",
            name: "accessory",
            type: "uint48",
          },
          {
            internalType: "uint48",
            name: "head",
            type: "uint48",
          },
          {
            internalType: "uint48",
            name: "glasses",
            type: "uint48",
          },
        ],
        internalType: "struct INounsSeeder.Seed",
        name: "seed",
        type: "tuple",
      },
    ],
    name: "genericDataURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint48",
            name: "background",
            type: "uint48",
          },
          {
            internalType: "uint48",
            name: "body",
            type: "uint48",
          },
          {
            internalType: "uint48",
            name: "accessory",
            type: "uint48",
          },
          {
            internalType: "uint48",
            name: "head",
            type: "uint48",
          },
          {
            internalType: "uint48",
            name: "glasses",
            type: "uint48",
          },
        ],
        internalType: "struct INounsSeeder.Seed",
        name: "seed",
        type: "tuple",
      },
    ],
    name: "getPartsForSeed",
    outputs: [
      {
        components: [
          {
            internalType: "bytes",
            name: "image",
            type: "bytes",
          },
          {
            internalType: "address",
            name: "palette",
            type: "address",
          },
        ],
        internalType: "struct ISVGRenderer.Part[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "glassesCount",
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
    inputs: [],
    name: "headCount",
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
    inputs: [],
    name: "lockParts",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
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
    inputs: [],
    name: "renderer",
    outputs: [
      {
        internalType: "contract ISVGRenderer",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract INounsArt",
        name: "_art",
        type: "address",
      },
    ],
    name: "setArt",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "paletteIndex",
        type: "uint8",
      },
      {
        internalType: "bytes",
        name: "palette",
        type: "bytes",
      },
    ],
    name: "setPalette",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract ISVGRenderer",
        name: "_renderer",
        type: "address",
      },
    ],
    name: "setRenderer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "uint48",
            name: "background",
            type: "uint48",
          },
          {
            internalType: "uint48",
            name: "body",
            type: "uint48",
          },
          {
            internalType: "uint48",
            name: "accessory",
            type: "uint48",
          },
          {
            internalType: "uint48",
            name: "head",
            type: "uint48",
          },
          {
            internalType: "uint48",
            name: "glasses",
            type: "uint48",
          },
        ],
        internalType: "struct INounsSeeder.Seed",
        name: "seed",
        type: "tuple",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162002bbc38038062002bbc8339810160408190526200003491620000da565b6200003f3362000071565b600180546001600160a01b039384166001600160a01b0319918216179091556002805492909316911617905562000119565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6001600160a01b0381168114620000d757600080fd5b50565b60008060408385031215620000ee57600080fd5b8251620000fb81620000c1565b60208401519092506200010e81620000c1565b809150509250929050565b612a9380620001296000396000f3fe608060405234801561001057600080fd5b50600436106101da5760003560e01c80638ada6b0f11610104578063cc8e76c5116100a2578063e7bf68f111610071578063e7bf68f1146103f6578063eba8180614610409578063ecc4652314610411578063f2fde38b1461042457600080fd5b8063cc8e76c5146103aa578063d7063b2e146103bd578063e6b1a3ae146103d0578063e79c9ea6146103e357600080fd5b806394f78557116100de57806394f785571461035c5780639d2324021461036f578063bf61df1b14610382578063cc2aa091146103a257600080fd5b80638ada6b0f146103255780638da5cb5b1461033857806391b7916a1461034957600080fd5b80634daebac21161017c578063638ac2701161014b578063638ac270146102c2578063715018a6146102d5578063773b9771146102dd57806387db11bd1461031257600080fd5b80634daebac21461028157806356d3163d146102895780635e70664c1461029c5780635efcf89c146102af57600080fd5b80633cfdafd3116101b85780633cfdafd31461023d5780634479cef2146102505780634531c0a8146102665780634bf23acf1461026e57600080fd5b80632a1d0769146101df5780632ea04300146101e9578063301bd28e14610212575b600080fd5b6101e7610437565b005b6101fc6101f7366004612014565b610555565b604051610209919061208c565b60405180910390f35b600154610225906001600160a01b031681565b6040516001600160a01b039091168152602001610209565b6101fc61024b36600461209f565b6106b9565b6102586106c5565b604051908152602001610209565b610258610751565b6101e761027c366004612118565b6107b4565b6102586108e4565b6101e761029736600461216f565b610947565b6101e76102aa3660046121ce565b610a0e565b6101e76102bd366004612118565b610b08565b6101fc6102d036600461209f565b610c02565b6101e7610c6e565b6002546103029074010000000000000000000000000000000000000000900460ff1681565b6040519015158152602001610209565b6101fc610320366004612282565b610cd4565b600254610225906001600160a01b031681565b6000546001600160a01b0316610225565b6101e7610357366004612118565b610e46565b6101e761036a3660046122f7565b610f40565b6101e761037d3660046122f7565b61106d565b610395610390366004612014565b611165565b6040516102099190612332565b610258611539565b6101e76103b8366004612118565b61159c565b6101e76103cb366004612118565b611696565b6101e76103de36600461216f565b611790565b6101e76103f13660046123cf565b6118a5565b6101e76104043660046122f7565b611983565b610258611a7b565b6101e761041f3660046122f7565b611ade565b6101e761043236600461216f565b611bd6565b6000546001600160a01b031633146104965760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064015b60405180910390fd5b60025474010000000000000000000000000000000000000000900460ff16156104eb576040517f6c0a9e3300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600280547fffffffffffffffffffffff00ffffffffffffffffffffffffffffffffffffffff16740100000000000000000000000000000000000000001790556040517f1680ee6d421f70ed6030d2fc4fcb50217a5dd617858d56562b119eca59172e5790600090a1565b60606000604051806040016040528061056d85611165565b815260015485516040517f04bde4dd00000000000000000000000000000000000000000000000000000000815265ffffffffffff90911660048201526020909201916001600160a01b03909116906304bde4dd90602401600060405180830381865afa1580156105e1573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610609919081019061245a565b90526002546040517f22cc1ad600000000000000000000000000000000000000000000000000000000815291925073__$e1d8844a0810dc0e87a665b1f2b5fa7c69$__916322cc1ad69161066d916001600160a01b03909116908590600401612517565b600060405180830381865af415801561068a573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526106b2919081019061245a565b9392505050565b60606106b28383610c02565b600154604080517f4479cef200000000000000000000000000000000000000000000000000000000815290516000926001600160a01b031691634479cef29160048083019260209291908290030181865afa158015610728573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061074c919061257c565b905090565b600154604080517f4531c0a800000000000000000000000000000000000000000000000000000000815290516000926001600160a01b031691634531c0a89160048083019260209291908290030181865afa158015610728573d6000803e3d6000fd5b6000546001600160a01b0316331461080e5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161048d565b60025474010000000000000000000000000000000000000000900460ff1615610863576040517f6c0a9e3300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001546040517f4bf23acf0000000000000000000000000000000000000000000000000000000081526001600160a01b0390911690634bf23acf906108ae9085908590600401612668565b600060405180830381600087803b1580156108c857600080fd5b505af11580156108dc573d6000803e3d6000fd5b505050505050565b600154604080517f4daebac200000000000000000000000000000000000000000000000000000000815290516000926001600160a01b031691634daebac29160048083019260209291908290030181865afa158015610728573d6000803e3d6000fd5b6000546001600160a01b031633146109a15760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161048d565b600280547fffffffffffffffffffffffff0000000000000000000000000000000000000000166001600160a01b0383169081179091556040519081527f482cbbbcf912da3be80deb8503ae1e94c0b7d5d1d0ec0af3d9d6403e06e609ee906020015b60405180910390a150565b6000546001600160a01b03163314610a685760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161048d565b60025474010000000000000000000000000000000000000000900460ff1615610abd576040517f6c0a9e3300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001546040517f5e70664c0000000000000000000000000000000000000000000000000000000081526001600160a01b0390911690635e70664c906108ae9085908590600401612715565b6000546001600160a01b03163314610b625760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161048d565b60025474010000000000000000000000000000000000000000900460ff1615610bb7576040517f6c0a9e3300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001546040517f5efcf89c0000000000000000000000000000000000000000000000000000000081526001600160a01b0390911690635efcf89c906108ae9085908590600401612668565b60606000610c0f84611cb8565b9050600081604051602001610c249190612729565b6040516020818303038152906040529050600082604051602001610c48919061276e565b6040516020818303038152906040529050610c64828287610cd4565b9695505050505050565b6000546001600160a01b03163314610cc85760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161048d565b610cd26000611df2565b565b6040805160808101825284815260208101849052600154835183517f04bde4dd00000000000000000000000000000000000000000000000000000000815265ffffffffffff909116600482015260609360009392908301916001600160a01b03909116906304bde4dd90602401600060405180830381865afa158015610d5e573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610d86919081019061245a565b8152602001610d9485611165565b90526002546040517f7eefcc2400000000000000000000000000000000000000000000000000000000815291925073__$e1d8844a0810dc0e87a665b1f2b5fa7c69$__91637eefcc2491610df8916001600160a01b039091169085906004016127da565b600060405180830381865af4158015610e15573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610e3d919081019061245a565b95945050505050565b6000546001600160a01b03163314610ea05760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161048d565b60025474010000000000000000000000000000000000000000900460ff1615610ef5576040517f6c0a9e3300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001546040517f91b7916a0000000000000000000000000000000000000000000000000000000081526001600160a01b03909116906391b7916a906108ae908590859060040161287c565b6000546001600160a01b03163314610f9a5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161048d565b60025474010000000000000000000000000000000000000000900460ff1615610fef576040517f6c0a9e3300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001546040517f94f785570000000000000000000000000000000000000000000000000000000081526001600160a01b03909116906394f78557906110389084906004016128f3565b600060405180830381600087803b15801561105257600080fd5b505af1158015611066573d6000803e3d6000fd5b5050505050565b6000546001600160a01b031633146110c75760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161048d565b60025474010000000000000000000000000000000000000000900460ff161561111c576040517f6c0a9e3300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001546040517f9d2324020000000000000000000000000000000000000000000000000000000081526001600160a01b0390911690639d232402906110389084906004016128f3565b60015460208201516040517f44cee73c00000000000000000000000000000000000000000000000000000000815265ffffffffffff90911660048201526060916000916001600160a01b03909116906344cee73c90602401600060405180830381865afa1580156111da573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052611202919081019061245a565b60015460408581015190517f7ca9421000000000000000000000000000000000000000000000000000000000815265ffffffffffff90911660048201529192506000916001600160a01b0390911690637ca9421090602401600060405180830381865afa158015611277573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261129f919081019061245a565b60015460608601516040517f5a503f1300000000000000000000000000000000000000000000000000000000815265ffffffffffff90911660048201529192506000916001600160a01b0390911690635a503f1390602401600060405180830381865afa158015611314573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261133c919081019061245a565b60015460808701516040517fb982d1b900000000000000000000000000000000000000000000000000000000815265ffffffffffff90911660048201529192506000916001600160a01b039091169063b982d1b990602401600060405180830381865afa1580156113b1573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526113d9919081019061245a565b60408051600480825260a0820190925291925060009190816020015b6040805180820190915260608152600060208201528152602001906001900390816113f5579050509050604051806040016040528086815260200161143987611e5a565b6001600160a01b03168152508160008151811061145857611458612906565b6020026020010181905250604051806040016040528085815260200161147d86611e5a565b6001600160a01b03168152508160018151811061149c5761149c612906565b602002602001018190525060405180604001604052808481526020016114c185611e5a565b6001600160a01b0316815250816002815181106114e0576114e0612906565b6020026020010181905250604051806040016040528083815260200161150584611e5a565b6001600160a01b03168152508160038151811061152457611524612906565b60209081029190910101529695505050505050565b600154604080517fcc2aa09100000000000000000000000000000000000000000000000000000000815290516000926001600160a01b03169163cc2aa0919160048083019260209291908290030181865afa158015610728573d6000803e3d6000fd5b6000546001600160a01b031633146115f65760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161048d565b60025474010000000000000000000000000000000000000000900460ff161561164b576040517f6c0a9e3300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001546040517fcc8e76c50000000000000000000000000000000000000000000000000000000081526001600160a01b039091169063cc8e76c5906108ae9085908590600401612668565b6000546001600160a01b031633146116f05760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161048d565b60025474010000000000000000000000000000000000000000900460ff1615611745576040517f6c0a9e3300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001546040517fd7063b2e0000000000000000000000000000000000000000000000000000000081526001600160a01b039091169063d7063b2e906108ae9085908590600401612668565b6000546001600160a01b031633146117ea5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161048d565b60025474010000000000000000000000000000000000000000900460ff161561183f576040517f6c0a9e3300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff0000000000000000000000000000000000000000166001600160a01b0383169081179091556040519081527f89382d75256b43b6826ad8d6cbd8e517eaf5e10f1ef4c8f123c9a25ac4529b5590602001610a03565b6000546001600160a01b031633146118ff5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161048d565b6001546040517fe79c9ea60000000000000000000000000000000000000000000000000000000081526001600160a01b039091169063e79c9ea69061194c90869086908690600401612935565b600060405180830381600087803b15801561196657600080fd5b505af115801561197a573d6000803e3d6000fd5b50505050505050565b6000546001600160a01b031633146119dd5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161048d565b60025474010000000000000000000000000000000000000000900460ff1615611a32576040517f6c0a9e3300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001546040517fe7bf68f10000000000000000000000000000000000000000000000000000000081526001600160a01b039091169063e7bf68f1906110389084906004016128f3565b600154604080517feba8180600000000000000000000000000000000000000000000000000000000815290516000926001600160a01b03169163eba818069160048083019260209291908290030181865afa158015610728573d6000803e3d6000fd5b6000546001600160a01b03163314611b385760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161048d565b60025474010000000000000000000000000000000000000000900460ff1615611b8d576040517f6c0a9e3300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001546040517fecc465230000000000000000000000000000000000000000000000000000000081526001600160a01b039091169063ecc46523906110389084906004016128f3565b6000546001600160a01b03163314611c305760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161048d565b6001600160a01b038116611cac5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f6464726573730000000000000000000000000000000000000000000000000000606482015260840161048d565b611cb581611df2565b50565b606081611cf857505060408051808201909152600181527f3000000000000000000000000000000000000000000000000000000000000000602082015290565b8160005b8115611d225780611d0c81612981565b9150611d1b9050600a836129e9565b9150611cfc565b60008167ffffffffffffffff811115611d3d57611d3d611f08565b6040519080825280601f01601f191660200182016040528015611d67576020820181803683370190505b5090505b8415611dea57611d7c6001836129fd565b9150611d89600a86612a14565b611d94906030612a28565b60f81b818381518110611da957611da9612906565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350611de3600a866129e9565b9450611d6b565b949350505050565b600080546001600160a01b038381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b60015481516000916001600160a01b03169063bc2d45fe9084908490611e8257611e82612906565b01602001516040517fffffffff0000000000000000000000000000000000000000000000000000000060e084901b16815260f89190911c6004820152602401602060405180830381865afa158015611ede573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611f029190612a40565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff81118282101715611f6057611f60611f08565b604052919050565b803565ffffffffffff81168114611f7e57600080fd5b919050565b600060a08284031215611f9557600080fd5b60405160a0810181811067ffffffffffffffff82111715611fb857611fb8611f08565b604052905080611fc783611f68565b8152611fd560208401611f68565b6020820152611fe660408401611f68565b6040820152611ff760608401611f68565b606082015261200860808401611f68565b60808201525092915050565b600060a0828403121561202657600080fd5b6106b28383611f83565b60005b8381101561204b578181015183820152602001612033565b8381111561205a576000848401525b50505050565b60008151808452612078816020860160208601612030565b601f01601f19169290920160200192915050565b6020815260006106b26020830184612060565b60008060c083850312156120b257600080fd5b823591506120c38460208501611f83565b90509250929050565b60008083601f8401126120de57600080fd5b50813567ffffffffffffffff8111156120f657600080fd5b6020830191508360208260051b850101111561211157600080fd5b9250929050565b6000806020838503121561212b57600080fd5b823567ffffffffffffffff81111561214257600080fd5b61214e858286016120cc565b90969095509350505050565b6001600160a01b0381168114611cb557600080fd5b60006020828403121561218157600080fd5b81356106b28161215a565b60008083601f84011261219e57600080fd5b50813567ffffffffffffffff8111156121b657600080fd5b60208301915083602082850101111561211157600080fd5b600080602083850312156121e157600080fd5b823567ffffffffffffffff8111156121f857600080fd5b61214e8582860161218c565b600067ffffffffffffffff82111561221e5761221e611f08565b50601f01601f191660200190565b600082601f83011261223d57600080fd5b813561225061224b82612204565b611f37565b81815284602083860101111561226557600080fd5b816020850160208301376000918101602001919091529392505050565b600080600060e0848603121561229757600080fd5b833567ffffffffffffffff808211156122af57600080fd5b6122bb8783880161222c565b945060208601359150808211156122d157600080fd5b506122de8682870161222c565b9250506122ee8560408601611f83565b90509250925092565b60006020828403121561230957600080fd5b813567ffffffffffffffff81111561232057600080fd5b8201604081850312156106b257600080fd5b60006020808301818452808551808352604092508286019150828160051b87010184880160005b838110156123c1577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc08984030185528151805187855261239b88860182612060565b918901516001600160a01b03169489019490945294870194925090860190600101612359565b509098975050505050505050565b6000806000604084860312156123e457600080fd5b833560ff811681146123f557600080fd5b9250602084013567ffffffffffffffff81111561241157600080fd5b61241d8682870161218c565b9497909650939450505050565b600061243861224b84612204565b905082815283838301111561244c57600080fd5b6106b2836020830184612030565b60006020828403121561246c57600080fd5b815167ffffffffffffffff81111561248357600080fd5b8201601f8101841361249457600080fd5b611dea8482516020840161242a565b600081518084526020808501808196508360051b8101915082860160005b8581101561250a5782840389528151604081518187526124e382880182612060565b928801516001600160a01b03169688019690965250988501989350908401906001016124c1565b5091979650505050505050565b6001600160a01b0383168152604060208201526000825160408084015261254160808401826124a3565b905060208401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc0848303016060850152610c648282612060565b60006020828403121561258e57600080fd5b5051919050565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe18436030181126125ca57600080fd5b830160208101925035905067ffffffffffffffff8111156125ea57600080fd5b80360383131561211157600080fd5b818352818160208501375060006020828401015260006020601f19601f840116840101905092915050565b600081356bffffffffffffffffffffffff811680821461264357600080fd5b8452506126536020830183612595565b60406020860152610e3d6040860182846125f9565b60208082528181018390526000906040600585901b840181019084018684805b88811015612707577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc088860301845282357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc18b36030181126126e8578283fd5b6126f4868c8301612624565b9550509285019291850191600101612688565b509298975050505050505050565b602081526000611dea6020830184866125f9565b7f4e6f756e20000000000000000000000000000000000000000000000000000000815260008251612761816005850160208701612030565b9190910160050192915050565b7f4e6f756e200000000000000000000000000000000000000000000000000000008152600082516127a6816005850160208701612030565b7f2069732061206d656d626572206f6620746865204e6f756e732044414f0000006005939091019283015250602201919050565b6001600160a01b038316815260406020820152600082516080604084015261280560c0840182612060565b905060208401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc0808584030160608601526128418383612060565b9250604086015191508085840301608086015261285e8383612060565b925060608601519150808584030160a086015250610c6482826124a3565b60208082528181018390526000906040600585901b8401810190840186845b8781101561250a577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc08785030183526128d4828a612595565b6128df8682846125f9565b95505050918401919084019060010161289b565b6020815260006106b26020830184612624565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60ff84168152604060208201526000610e3d6040830184866125f9565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156129b3576129b3612952565b5060010190565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000826129f8576129f86129ba565b500490565b600082821015612a0f57612a0f612952565b500390565b600082612a2357612a236129ba565b500690565b60008219821115612a3b57612a3b612952565b500190565b600060208284031215612a5257600080fd5b81516106b28161215a56fea2646970667358221220ddd93cb82d34795d853e1e4aa117c9bc8bba1620ab94b353871277133ec5d04564736f6c634300080c0033";

type NounsDescriptorConstructorParams =
  | [linkLibraryAddresses: NounsDescriptorLibraryAddresses, signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: NounsDescriptorConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => {
  return (
    typeof xs[0] === "string" ||
    (Array.isArray as (arg: any) => arg is readonly any[])(xs[0]) ||
    "_isInterface" in xs[0]
  );
};

export class NounsDescriptor__factory extends ContractFactory {
  constructor(...args: NounsDescriptorConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      const [linkLibraryAddresses, signer] = args;
      super(
        _abi,
        NounsDescriptor__factory.linkBytecode(linkLibraryAddresses),
        signer
      );
    }
    this.contractName = "NounsDescriptor";
  }

  static linkBytecode(
    linkLibraryAddresses: NounsDescriptorLibraryAddresses
  ): string {
    let linkedBytecode = _bytecode;

    linkedBytecode = linkedBytecode.replace(
      new RegExp("__\\$e1d8844a0810dc0e87a665b1f2b5fa7c69\\$__", "g"),
      linkLibraryAddresses["contracts/libs/NFTDescriptor.sol:NFTDescriptor"]
        .replace(/^0x/, "")
        .toLowerCase()
    );

    return linkedBytecode;
  }

  deploy(
    _art: string,
    _renderer: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<NounsDescriptor> {
    return super.deploy(
      _art,
      _renderer,
      overrides || {}
    ) as Promise<NounsDescriptor>;
  }
  getDeployTransaction(
    _art: string,
    _renderer: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_art, _renderer, overrides || {});
  }
  attach(address: string): NounsDescriptor {
    return super.attach(address) as NounsDescriptor;
  }
  connect(signer: Signer): NounsDescriptor__factory {
    return super.connect(signer) as NounsDescriptor__factory;
  }
  static readonly contractName: "NounsDescriptor";
  public readonly contractName: "NounsDescriptor";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): NounsDescriptorInterface {
    return new utils.Interface(_abi) as NounsDescriptorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): NounsDescriptor {
    return new Contract(address, _abi, signerOrProvider) as NounsDescriptor;
  }
}

export interface NounsDescriptorLibraryAddresses {
  ["contracts/libs/NFTDescriptor.sol:NFTDescriptor"]: string;
}
