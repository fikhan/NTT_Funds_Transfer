export const contactEmail = "support@soh.com";

export const routes = {
  home: "/home",
  walletconnect: "/walletconnect",
  admin: "/admin",
  onerepfile: "/onerepfile",
  onerepboard: "/onerepboard",
  // faq: "/faq/",
  // giveaway: "/giveaway/",
  // support: "/support/",
  // company: "/company/",
  // assets: "/assets",

  // welcomepage: "/",
  portfoliopage: "/portfolio",
  dashboardpage: "/dashboard",
  // addcurrencypage: "/addcurrency",
  walletspage: "/wallets",
  // historypage: "/history",
  // securebackuppage: "/securebackup",
  // settingspage: "/settings",
  // restorewalletpage: "/restorewallet",
  // currencypage: "/currency",
  // accountsupportpage: "/accountsupport",
  // account: "/dashboard/account",

  loginpage: "/",
  //login2fa: "/account/login/2fa/",
  // signup: "/signup",
  // forgotten: "/forgotten",
  logout: "/logout",
};

// export const ABI = [
//   {
//     inputs: [
//       {
//         internalType: "address",
//         name: "owner_",
//         type: "address",
//       },
//       {
//         internalType: "string",
//         name: "baseURI_",
//         type: "string",
//       },
//     ],
//     stateMutability: "nonpayable",
//     type: "constructor",
//   },
//   {
//     anonymous: false,
//     inputs: [
//       {
//         indexed: true,
//         internalType: "address",
//         name: "burner",
//         type: "address",
//       },
//       {
//         indexed: true,
//         internalType: "address",
//         name: "owner",
//         type: "address",
//       },
//       {
//         indexed: false,
//         internalType: "uint256[]",
//         name: "ids",
//         type: "uint256[]",
//       },
//       {
//         indexed: false,
//         internalType: "uint256[]",
//         name: "amounts",
//         type: "uint256[]",
//       },
//     ],
//     name: "BurnBatch",
//     type: "event",
//   },
//   {
//     anonymous: false,
//     inputs: [
//       {
//         indexed: true,
//         internalType: "address",
//         name: "burner",
//         type: "address",
//       },
//       {
//         indexed: true,
//         internalType: "address",
//         name: "owner",
//         type: "address",
//       },
//       {
//         indexed: true,
//         internalType: "uint256",
//         name: "id",
//         type: "uint256",
//       },
//       {
//         indexed: false,
//         internalType: "uint256",
//         name: "amount",
//         type: "uint256",
//       },
//     ],
//     name: "BurnSingle",
//     type: "event",
//   },
//   {
//     anonymous: false,
//     inputs: [
//       {
//         indexed: true,
//         internalType: "address",
//         name: "minter",
//         type: "address",
//       },
//       {
//         indexed: true,
//         internalType: "address",
//         name: "to",
//         type: "address",
//       },
//       {
//         indexed: false,
//         internalType: "uint256[]",
//         name: "ids",
//         type: "uint256[]",
//       },
//       {
//         indexed: false,
//         internalType: "uint256[]",
//         name: "amounts",
//         type: "uint256[]",
//       },
//     ],
//     name: "MintBatch",
//     type: "event",
//   },
//   {
//     anonymous: false,
//     inputs: [
//       {
//         indexed: true,
//         internalType: "address",
//         name: "minter",
//         type: "address",
//       },
//       {
//         indexed: true,
//         internalType: "address",
//         name: "to",
//         type: "address",
//       },
//       {
//         indexed: true,
//         internalType: "uint256",
//         name: "id",
//         type: "uint256",
//       },
//       {
//         indexed: false,
//         internalType: "uint256",
//         name: "amount",
//         type: "uint256",
//       },
//     ],
//     name: "MintSingle",
//     type: "event",
//   },
//   {
//     anonymous: false,
//     inputs: [
//       {
//         indexed: true,
//         internalType: "uint256",
//         name: "id",
//         type: "uint256",
//       },
//       {
//         indexed: false,
//         internalType: "string",
//         name: "value",
//         type: "string",
//       },
//     ],
//     name: "URI",
//     type: "event",
//   },
//   {
//     inputs: [],
//     name: "DOMAIN_SEPARATOR",
//     outputs: [
//       {
//         internalType: "bytes32",
//         name: "",
//         type: "bytes32",
//       },
//     ],
//     stateMutability: "view",
//     type: "function",
//   },
//   {
//     inputs: [
//       {
//         internalType: "address",
//         name: "account",
//         type: "address",
//       },
//       {
//         internalType: "uint256",
//         name: "id",
//         type: "uint256",
//       },
//     ],
//     name: "balanceOf",
//     outputs: [
//       {
//         internalType: "uint256",
//         name: "",
//         type: "uint256",
//       },
//     ],
//     stateMutability: "view",
//     type: "function",
//   },
//   {
//     inputs: [
//       {
//         internalType: "address",
//         name: "account",
//         type: "address",
//       },
//       {
//         internalType: "uint256[]",
//         name: "ids",
//         type: "uint256[]",
//       },
//     ],
//     name: "balanceOfBatch",
//     outputs: [
//       {
//         internalType: "uint256[]",
//         name: "",
//         type: "uint256[]",
//       },
//     ],
//     stateMutability: "view",
//     type: "function",
//   },
//   {
//     inputs: [
//       {
//         internalType: "address[]",
//         name: "accounts",
//         type: "address[]",
//       },
//       {
//         internalType: "uint256[][]",
//         name: "ids",
//         type: "uint256[][]",
//       },
//     ],
//     name: "balanceOfBundle",
//     outputs: [
//       {
//         internalType: "uint256[][]",
//         name: "",
//         type: "uint256[][]",
//       },
//     ],
//     stateMutability: "view",
//     type: "function",
//   },
//   {
//     inputs: [
//       {
//         internalType: "address",
//         name: "from",
//         type: "address",
//       },
//       {
//         internalType: "uint256",
//         name: "id",
//         type: "uint256",
//       },
//       {
//         internalType: "uint256",
//         name: "amount",
//         type: "uint256",
//       },
//       {
//         internalType: "bool",
//         name: "deleteURI",
//         type: "bool",
//       },
//     ],
//     name: "burn",
//     outputs: [],
//     stateMutability: "nonpayable",
//     type: "function",
//   },
//   {
//     inputs: [
//       {
//         internalType: "address",
//         name: "from",
//         type: "address",
//       },
//       {
//         internalType: "uint256[]",
//         name: "ids",
//         type: "uint256[]",
//       },
//       {
//         internalType: "uint256[]",
//         name: "amounts",
//         type: "uint256[]",
//       },
//       {
//         internalType: "bool",
//         name: "deleteURI",
//         type: "bool",
//       },
//     ],
//     name: "burnBatch",
//     outputs: [],
//     stateMutability: "nonpayable",
//     type: "function",
//   },
//   {
//     inputs: [
//       {
//         internalType: "address[]",
//         name: "to",
//         type: "address[]",
//       },
//       {
//         internalType: "uint256[][]",
//         name: "ids",
//         type: "uint256[][]",
//       },
//       {
//         internalType: "uint256[][]",
//         name: "amounts",
//         type: "uint256[][]",
//       },
//       {
//         internalType: "string[][]",
//         name: "uris",
//         type: "string[][]",
//       },
//       {
//         internalType: "bytes[]",
//         name: "data",
//         type: "bytes[]",
//       },
//     ],
//     name: "mintBundle",
//     outputs: [],
//     stateMutability: "nonpayable",
//     type: "function",
//   },
//   {
//     inputs: [
//       {
//         internalType: "address",
//         name: "to",
//         type: "address",
//       },
//       {
//         internalType: "uint256",
//         name: "id",
//         type: "uint256",
//       },
//       {
//         internalType: "uint256",
//         name: "amount",
//         type: "uint256",
//       },
//       {
//         internalType: "string",
//         name: "uri",
//         type: "string",
//       },
//       {
//         internalType: "bytes",
//         name: "data",
//         type: "bytes",
//       },
//     ],
//     name: "mintToContract",
//     outputs: [],
//     stateMutability: "nonpayable",
//     type: "function",
//   },
//   {
//     inputs: [
//       {
//         internalType: "address",
//         name: "to",
//         type: "address",
//       },
//       {
//         internalType: "uint256",
//         name: "id",
//         type: "uint256",
//       },
//       {
//         internalType: "uint256",
//         name: "amount",
//         type: "uint256",
//       },
//       {
//         internalType: "uint8",
//         name: "v",
//         type: "uint8",
//       },
//       {
//         internalType: "bytes32",
//         name: "r",
//         type: "bytes32",
//       },
//       {
//         internalType: "bytes32",
//         name: "s",
//         type: "bytes32",
//       },
//       {
//         internalType: "string",
//         name: "uri",
//         type: "string",
//       },
//       {
//         internalType: "bytes",
//         name: "data",
//         type: "bytes",
//       },
//     ],
//     name: "mintToEOA",
//     outputs: [],
//     stateMutability: "nonpayable",
//     type: "function",
//   },
//   {
//     inputs: [],
//     name: "owner",
//     outputs: [
//       {
//         internalType: "address",
//         name: "",
//         type: "address",
//       },
//     ],
//     stateMutability: "view",
//     type: "function",
//   },
//   {
//     inputs: [
//       {
//         internalType: "string",
//         name: "newBaseURI",
//         type: "string",
//       },
//     ],
//     name: "setBaseURI",
//     outputs: [],
//     stateMutability: "nonpayable",
//     type: "function",
//   },
//   {
//     inputs: [
//       {
//         internalType: "address",
//         name: "newOwner",
//         type: "address",
//       },
//     ],
//     name: "setOwner",
//     outputs: [],
//     stateMutability: "nonpayable",
//     type: "function",
//   },
//   {
//     inputs: [
//       {
//         internalType: "bytes",
//         name: "sig",
//         type: "bytes",
//       },
//     ],
//     name: "splitSignature",
//     outputs: [
//       {
//         internalType: "bytes32",
//         name: "r",
//         type: "bytes32",
//       },
//       {
//         internalType: "bytes32",
//         name: "s",
//         type: "bytes32",
//       },
//       {
//         internalType: "uint8",
//         name: "v",
//         type: "uint8",
//       },
//     ],
//     stateMutability: "pure",
//     type: "function",
//   },
//   {
//     inputs: [
//       {
//         internalType: "uint256",
//         name: "id",
//         type: "uint256",
//       },
//     ],
//     name: "tokenURI",
//     outputs: [
//       {
//         internalType: "string",
//         name: "",
//         type: "string",
//       },
//     ],
//     stateMutability: "view",
//     type: "function",
//   },
// ];

// export const bytecode = "";


// export const TESTNET_ADDRESS = "0x6e6dcef2535d8c2303f78a259d6844477d03f8ea";

export const ABI = [
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "owner_",
        "type": "address"
      },
      {
        "internalType": "string",
        "name": "baseURI_",
        "type": "string"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "burner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256[]",
        "name": "ids",
        "type": "uint256[]"
      },
      {
        "indexed": false,
        "internalType": "uint256[]",
        "name": "amounts",
        "type": "uint256[]"
      }
    ],
    "name": "BurnBatch",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "burner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "BurnSingle",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "minter",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256[]",
        "name": "ids",
        "type": "uint256[]"
      },
      {
        "indexed": false,
        "internalType": "uint256[]",
        "name": "amounts",
        "type": "uint256[]"
      }
    ],
    "name": "MintBatch",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "minter",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "MintSingle",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "value",
        "type": "string"
      }
    ],
    "name": "URI",
    "type": "event"
  },
  {
    "inputs": [],
    "name": "DOMAIN_SEPARATOR",
    "outputs": [
      {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      }
    ],
    "name": "balanceOf",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      },
      {
        "internalType": "uint256[]",
        "name": "ids",
        "type": "uint256[]"
      }
    ],
    "name": "balanceOfBatch",
    "outputs": [
      {
        "internalType": "uint256[]",
        "name": "",
        "type": "uint256[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address[]",
        "name": "accounts",
        "type": "address[]"
      },
      {
        "internalType": "uint256[][]",
        "name": "ids",
        "type": "uint256[][]"
      }
    ],
    "name": "balanceOfBundle",
    "outputs": [
      {
        "internalType": "uint256[][]",
        "name": "",
        "type": "uint256[][]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      },
      {
        "internalType": "bool",
        "name": "deleteURI",
        "type": "bool"
      }
    ],
    "name": "burn",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "internalType": "uint256[]",
        "name": "ids",
        "type": "uint256[]"
      },
      {
        "internalType": "uint256[]",
        "name": "amounts",
        "type": "uint256[]"
      },
      {
        "internalType": "bool",
        "name": "deleteURI",
        "type": "bool"
      }
    ],
    "name": "burnBatch",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address[]",
        "name": "to",
        "type": "address[]"
      },
      {
        "internalType": "uint256[][]",
        "name": "ids",
        "type": "uint256[][]"
      },
      {
        "internalType": "uint256[][]",
        "name": "amounts",
        "type": "uint256[][]"
      },
      {
        "internalType": "string[][]",
        "name": "uris",
        "type": "string[][]"
      },
      {
        "internalType": "bytes[]",
        "name": "data",
        "type": "bytes[]"
      }
    ],
    "name": "mintBundle",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "uri",
        "type": "string"
      },
      {
        "internalType": "bytes",
        "name": "data",
        "type": "bytes"
      }
    ],
    "name": "mintToContract",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      },
      {
        "internalType": "uint8",
        "name": "v",
        "type": "uint8"
      },
      {
        "internalType": "bytes32",
        "name": "r",
        "type": "bytes32"
      },
      {
        "internalType": "bytes32",
        "name": "s",
        "type": "bytes32"
      },
      {
        "internalType": "string",
        "name": "uri",
        "type": "string"
      },
      {
        "internalType": "bytes",
        "name": "data",
        "type": "bytes"
      }
    ],
    "name": "mintToEOA",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "owner",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "newBaseURI",
        "type": "string"
      }
    ],
    "name": "setBaseURI",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "setOwner",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes",
        "name": "sig",
        "type": "bytes"
      }
    ],
    "name": "splitSignature",
    "outputs": [
      {
        "internalType": "bytes32",
        "name": "r",
        "type": "bytes32"
      },
      {
        "internalType": "bytes32",
        "name": "s",
        "type": "bytes32"
      },
      {
        "internalType": "uint8",
        "name": "v",
        "type": "uint8"
      }
    ],
    "stateMutability": "pure",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      }
    ],
    "name": "tokenURI",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
]

export const bytecode = "0x60806040523480156200001157600080fd5b506040516200495038038062004950833981810160405281019062000037919062000303565b80600060405180608001604052806040518060400160405280601581526020017f45524331323338204d696e7420417070726f76616c000000000000000000000081525081526020016040518060400160405280600181526020017f310000000000000000000000000000000000000000000000000000000000000081525081526020014681526020013073ffffffffffffffffffffffffffffffffffffffff1681525090507f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f816000015180519060200120826020015180519060200120836040015184606001516040516020016200013695949392919062000390565b60405160208183030381529060405280519060200120600081905550506200016481620001ae60201b60201c565b5081600460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050620005bf565b8060029080519060200190620001c6929190620001ca565b5050565b828054620001d890620004ca565b90600052602060002090601f016020900481019282620001fc576000855562000248565b82601f106200021757805160ff191683800117855562000248565b8280016001018555821562000248579182015b82811115620002475782518255916020019190600101906200022a565b5b5090506200025791906200025b565b5090565b5b80821115620002765760008160009055506001016200025c565b5090565b6000620002916200028b8462000416565b620003ed565b905082815260208101848484011115620002aa57600080fd5b620002b784828562000494565b509392505050565b600081519050620002d081620005a5565b92915050565b600082601f830112620002e857600080fd5b8151620002fa8482602086016200027a565b91505092915050565b600080604083850312156200031757600080fd5b60006200032785828601620002bf565b925050602083015167ffffffffffffffff8111156200034557600080fd5b6200035385828601620002d6565b9150509250929050565b62000368816200044c565b82525050565b620003798162000460565b82525050565b6200038a816200048a565b82525050565b600060a082019050620003a760008301886200036e565b620003b660208301876200036e565b620003c560408301866200036e565b620003d460608301856200037f565b620003e360808301846200035d565b9695505050505050565b6000620003f96200040c565b905062000407828262000500565b919050565b6000604051905090565b600067ffffffffffffffff82111562000434576200043362000565565b5b6200043f8262000594565b9050602081019050919050565b600062000459826200046a565b9050919050565b6000819050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60005b83811015620004b457808201518184015260208101905062000497565b83811115620004c4576000848401525b50505050565b60006002820490506001821680620004e357607f821691505b60208210811415620004fa57620004f962000536565b5b50919050565b6200050b8262000594565b810181811067ffffffffffffffff821117156200052d576200052c62000565565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b620005b0816200044c565b8114620005bc57600080fd5b50565b61438180620005cf6000396000f3fe608060405234801561001057600080fd5b50600436106100e95760003560e01c806355f804b31161008c578063a7bb580311610066578063a7bb58031461021e578063afd6908614610250578063c87b56dd14610280578063dbee1524146102b0576100e9565b806355f804b3146101c85780638af702a1146101e45780638da5cb5b14610200576100e9565b806331126dd1116100c857806331126dd1146101565780633644e515146101725780633ebce34a1461019057806344893bf3146101ac576100e9565b8062fdd58e146100ee57806313af40351461011e578063198fe9c21461013a575b600080fd5b61010860048036038101906101039190612c58565b6102e0565b6040516101159190613979565b60405180910390f35b61013860048036038101906101339190612b48565b6103aa565b005b610154600480360381019061014f9190612d9e565b6104ee565b005b610170600480360381019061016b9190612c94565b6105a1565b005b61017a610659565b60405161018791906136b6565b60405180910390f35b6101aa60048036038101906101a59190612cf7565b61065f565b005b6101c660048036038101906101c19190612bc5565b61070c565b005b6101e260048036038101906101dd9190613045565b6107c4565b005b6101fe60048036038101906101f99190612eec565b610860565b005b610208610c7d565b604051610215919061357a565b60405180910390f35b61023860048036038101906102339190613004565b610ca3565b6040516102479392919061375b565b60405180910390f35b61026a60048036038101906102659190612b71565b610d0b565b604051610277919061365d565b60405180910390f35b61029a60048036038101906102959190613086565b610e3e565b6040516102a791906137d7565b60405180910390f35b6102ca60048036038101906102c59190612e80565b610f0e565b6040516102d7919061363b565b60405180910390f35b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610351576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610348906138d9565b60405180910390fd5b6001600083815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461043a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161043190613819565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156104aa576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104a1906137f9565b60405180910390fd5b80600460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461057e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161057590613819565b60405180910390fd5b61058d88888888888887611085565b61059787836110b7565b5050505050505050565b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610631576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161062890613819565b60405180910390fd5b80156106475761064284848461111b565b610653565b610652848484611134565b5b50505050565b60005481565b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146106ef576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106e690613819565b60405180910390fd5b6106fb85858584611311565b61070584836110b7565b5050505050565b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461079c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161079390613819565b60405180910390fd5b80156107b2576107ad84848461138e565b6107be565b6107bd848484611665565b5b50505050565b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610854576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161084b90613819565b60405180910390fd5b61085d81611933565b50565b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146108f0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108e790613819565b60405180910390fd5b60005b8551811015610c7557610986858281518110610938577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6020026020010151848381518110610979577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002602001015161194d565b6109e58682815181106109c2577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002602001015173ffffffffffffffffffffffffffffffffffffffff16611a3f565b15610afb57610af6868281518110610a26577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6020026020010151868381518110610a67577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6020026020010151868481518110610aa8577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6020026020010151858581518110610ae9577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6020026020010151611a62565b610c62565b6000806000610b49858581518110610b3c577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6020026020010151610ca3565b925092509250610c5e898581518110610b8b577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6020026020010151898681518110610bcc577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6020026020010151898781518110610c0d577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200260200101518487878b8b81518110610c51577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6020026020010151611adf565b5050505b8080610c6d90613d7a565b9150506108f3565b505050505050565b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008060006041845114610cec576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ce390613959565b60405180910390fd5b6020840151925060408401519150606084015160001a90509193909250565b60606000825167ffffffffffffffff811115610d50577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051908082528060200260200182016040528015610d7e5781602001602082028036833780820191505090505b50905060008351905060005b81811015610e3257610ddc86868381518110610dcf577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200260200101516102e0565b838281518110610e15577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200260200101818152505080610e2b90613d7a565b9050610d8a565b50819250505092915050565b60606000600360008481526020019081526020016000208054610e6090613d17565b80601f0160208091040260200160405190810160405280929190818152602001828054610e8c90613d17565b8015610ed95780601f10610eae57610100808354040283529160200191610ed9565b820191906000526020600020905b815481529060010190602001808311610ebc57829003601f168201915b50505050509050610ee983611b11565b15610ef75780915050610f09565b6000610f01611b3c565b905080925050505b919050565b60606000835167ffffffffffffffff811115610f53577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051908082528060200260200182016040528015610f8657816020015b6060815260200190600190039081610f715790505b50905060008451905060005b8181101561107957611024868281518110610fd6577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6020026020010151868381518110611017577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6020026020010151610d0b565b83828151811061105d577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200260200101819052508061107290613d7a565b9050610f92565b50819250505092915050565b6000611092888888611bce565b90506110a18882878787611c67565b6110ad88888885611d59565b5050505050505050565b806003600084815260200190815260200160002090805190602001906110de92919061252b565b50817f369737eac2f50072db0001f8a5c3f225ab50d5ab38d8cbdbabf885abf2ab722a8260405161110f91906137d7565b60405180910390a25050565b611126838383611134565b61112f82611e3f565b505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156111a4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161119b90613899565b60405180910390fd5b60003390506111b581858585611e70565b60006001600085815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490508281101561124d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161124490613839565b60405180910390fd5b8281036001600086815260200190815260200160002060008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550838573ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f995c922928fc04a31c6446db7f51f402ddb95ac41fa3dca51c98ff1fe7300531866040516113029190613979565b60405180910390a45050505050565b6113308473ffffffffffffffffffffffffffffffffffffffff16611a3f565b61136f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161136690613939565b60405180910390fd5b61137b84848484611d59565b6113883385858585611e76565b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156113fe576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016113f590613899565b60405180910390fd5b8051825114611442576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161143990613919565b60405180910390fd5b600033905060005b83518110156115f757600084828151811061148e577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6020026020010151905060008483815181106114d3577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002602001015190506114e984888484611e70565b60006001600084815260200190815260200160002060008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015611581576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161157890613839565b60405180910390fd5b8181036001600085815260200190815260200160002060008a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506115e183611e3f565b50505080806115ef90613d7a565b91505061144a565b508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167ff6d51a8d20e8b0143ca41399aa93b2a480cb0b95e39847e4ebd3144b2db8775d858560405161165792919061367f565b60405180910390a350505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156116d5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016116cc90613899565b60405180910390fd5b8051825114611719576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161171090613919565b60405180910390fd5b600033905060005b83518110156118c5576000848281518110611765577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6020026020010151905060008483815181106117aa577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002602001015190506117c084888484611e70565b60006001600084815260200190815260200160002060008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015611858576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161184f90613839565b60405180910390fd5b8181036001600085815260200190815260200160002060008a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555050505080806118bd90613d7a565b915050611721565b508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167ff6d51a8d20e8b0143ca41399aa93b2a480cb0b95e39847e4ebd3144b2db8775d858560405161192592919061367f565b60405180910390a350505050565b806002908051906020019061194992919061252b565b5050565b8051825114611991576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611988906138f9565b60405180910390fd5b60005b8251811015611a3a57611a278382815181106119d9577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6020026020010151838381518110611a1a577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200260200101516110b7565b8080611a3290613d7a565b915050611994565b505050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b611a818473ffffffffffffffffffffffffffffffffffffffff16611a3f565b611ac0576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611ab790613939565b60405180910390fd5b611acc84848484612035565b611ad93385858585612280565b50505050565b6000611aec88888861243f565b9050611afb8882878787611c67565b611b0788888885612035565b5050505050505050565b600080600360008481526020019081526020016000208054611b3290613d17565b9050119050919050565b606060028054611b4b90613d17565b80601f0160208091040260200160405190810160405280929190818152602001828054611b7790613d17565b8015611bc45780601f10611b9957610100808354040283529160200191611bc4565b820191906000526020600020905b815481529060010190602001808311611ba757829003601f168201915b5050505050905090565b60008060405180606001604052808673ffffffffffffffffffffffffffffffffffffffff1681526020018581526020018481525090507f97b28eca24e5080ea4d0af02f80111ea0596b75fdd4228411a50c43abfdd3eed816000015182602001518360400151604051602001611c479493929190613716565b604051602081830303815290604052805190602001209150509392505050565b6000805485604051602001611c7d929190613543565b6040516020818303038152906040528051906020012090508573ffffffffffffffffffffffffffffffffffffffff1660018286868660405160008152602001604052604051611ccf9493929190613792565b6020604051602081039080840390855afa158015611cf1573d6000803e3d6000fd5b5050506020604051035173ffffffffffffffffffffffffffffffffffffffff1614611d51576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611d4890613859565b60405180910390fd5b505050505050565b6000339050611d6b8186868686612524565b826001600086815260200190815260200160002060008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254611dcb9190613bf4565b92505081905550838573ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f17facb1ae55b1a0fe54049767ddeb027123cb5d0379a5a1c6f5c954287d88fb386604051611e309190613979565b60405180910390a45050505050565b611e4881611b11565b15611e6d57600360008281526020019081526020016000206000611e6c91906125b1565b5b50565b50505050565b8373ffffffffffffffffffffffffffffffffffffffff166345ed75d5868585856040518563ffffffff1660e01b8152600401611eb594939291906135ef565b602060405180830381600087803b158015611ecf57600080fd5b505af1925050508015611f0057506040513d601f19601f82011682018060405250810190611efd9190612fdb565b60015b611fa657611f0c613e5a565b806308c379a01415611f695750611f2161422b565b80611f2c5750611f6b565b806040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611f6091906137d7565b60405180910390fd5b505b6040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611f9d906138b9565b60405180910390fd5b6345ed75d560e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161461202d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161202490613879565b60405180910390fd5b505050505050565b8151835114612079576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161207090613919565b60405180910390fd5b600033905060005b84518110156122115761211782878784815181106120c8577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6020026020010151878581518110612109577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002602001015187612524565b838181518110612150577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002602001015160016000878481518110612195577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6020026020010151815260200190815260200160002060008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546121f79190613bf4565b92505081905550808061220990613d7a565b915050612081565b508473ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f5c5ac6bfb3f54a39f008d2e9be10d575012f29230716d49e92da377d748b1a87868660405161227192919061367f565b60405180910390a35050505050565b8373ffffffffffffffffffffffffffffffffffffffff1663c0bfec68868585856040518563ffffffff1660e01b81526004016122bf9493929190613595565b602060405180830381600087803b1580156122d957600080fd5b505af192505050801561230a57506040513d601f19601f820116820180604052508101906123079190612fdb565b60015b6123b057612316613e5a565b806308c379a01415612373575061232b61422b565b806123365750612375565b806040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161236a91906137d7565b60405180910390fd5b505b6040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016123a7906138b9565b60405180910390fd5b63c0bfec6860e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614612437576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161242e90613879565b60405180910390fd5b505050505050565b60008060405180606001604052808673ffffffffffffffffffffffffffffffffffffffff1681526020018581526020018481525090507f3766a97e8e4290ccc4e1f96c50729afab6e1e51b341c132ce910495c64b43d0e816000015182602001516040516020016124b0919061352c565b6040516020818303038152906040528051906020012083604001516040516020016124db919061352c565b6040516020818303038152906040528051906020012060405160200161250494939291906136d1565b604051602081830303815290604052805190602001209150509392505050565b5050505050565b82805461253790613d17565b90600052602060002090601f01602090048101928261255957600085556125a0565b82601f1061257257805160ff19168380011785556125a0565b828001600101855582156125a0579182015b8281111561259f578251825591602001919060010190612584565b5b5090506125ad91906125f1565b5090565b5080546125bd90613d17565b6000825580601f106125cf57506125ee565b601f0160209004906000526020600020908101906125ed91906125f1565b5b50565b5b8082111561260a5760008160009055506001016125f2565b5090565b600061262161261c846139b9565b613994565b9050808382526020820190508285602086028201111561264057600080fd5b60005b858110156126705781612656888261297a565b845260208401935060208301925050600181019050612643565b5050509392505050565b600061268d612688846139e5565b613994565b905080838252602082019050828560208602820111156126ac57600080fd5b60005b858110156126f657813567ffffffffffffffff8111156126ce57600080fd5b8086016126db8982612a37565b855260208501945060208401935050506001810190506126af565b5050509392505050565b600061271361270e84613a11565b613994565b9050808382526020820190508285602086028201111561273257600080fd5b60005b8581101561277c57813567ffffffffffffffff81111561275457600080fd5b8086016127618982612a61565b85526020850194506020840193505050600181019050612735565b5050509392505050565b600061279961279484613a3d565b613994565b905080838252602082019050828560208602820111156127b857600080fd5b60005b8581101561280257813567ffffffffffffffff8111156127da57600080fd5b8086016127e78982612aca565b855260208501945060208401935050506001810190506127bb565b5050509392505050565b600061281f61281a84613a69565b613994565b9050808382526020820190508285602086028201111561283e57600080fd5b60005b8581101561288857813567ffffffffffffffff81111561286057600080fd5b80860161286d8982612af4565b85526020850194506020840193505050600181019050612841565b5050509392505050565b60006128a56128a084613a95565b613994565b905080838252602082019050828560208602820111156128c457600080fd5b60005b858110156128f457816128da8882612b1e565b8452602084019350602083019250506001810190506128c7565b5050509392505050565b600061291161290c84613ac1565b613994565b90508281526020810184848401111561292957600080fd5b612934848285613cd5565b509392505050565b600061294f61294a84613af2565b613994565b90508281526020810184848401111561296757600080fd5b612972848285613cd5565b509392505050565b600081359050612989816142c1565b92915050565b600082601f8301126129a057600080fd5b81356129b084826020860161260e565b91505092915050565b600082601f8301126129ca57600080fd5b81356129da84826020860161267a565b91505092915050565b600082601f8301126129f457600080fd5b8135612a04848260208601612700565b91505092915050565b600082601f830112612a1e57600080fd5b8135612a2e848260208601612786565b91505092915050565b600082601f830112612a4857600080fd5b8135612a5884826020860161280c565b91505092915050565b600082601f830112612a7257600080fd5b8135612a82848260208601612892565b91505092915050565b600081359050612a9a816142d8565b92915050565b600081359050612aaf816142ef565b92915050565b600081519050612ac481614306565b92915050565b600082601f830112612adb57600080fd5b8135612aeb8482602086016128fe565b91505092915050565b600082601f830112612b0557600080fd5b8135612b1584826020860161293c565b91505092915050565b600081359050612b2d8161431d565b92915050565b600081359050612b4281614334565b92915050565b600060208284031215612b5a57600080fd5b6000612b688482850161297a565b91505092915050565b60008060408385031215612b8457600080fd5b6000612b928582860161297a565b925050602083013567ffffffffffffffff811115612baf57600080fd5b612bbb85828601612a61565b9150509250929050565b60008060008060808587031215612bdb57600080fd5b6000612be98782880161297a565b945050602085013567ffffffffffffffff811115612c0657600080fd5b612c1287828801612a61565b935050604085013567ffffffffffffffff811115612c2f57600080fd5b612c3b87828801612a61565b9250506060612c4c87828801612a8b565b91505092959194509250565b60008060408385031215612c6b57600080fd5b6000612c798582860161297a565b9250506020612c8a85828601612b1e565b9150509250929050565b60008060008060808587031215612caa57600080fd5b6000612cb88782880161297a565b9450506020612cc987828801612b1e565b9350506040612cda87828801612b1e565b9250506060612ceb87828801612a8b565b91505092959194509250565b600080600080600060a08688031215612d0f57600080fd5b6000612d1d8882890161297a565b9550506020612d2e88828901612b1e565b9450506040612d3f88828901612b1e565b935050606086013567ffffffffffffffff811115612d5c57600080fd5b612d6888828901612af4565b925050608086013567ffffffffffffffff811115612d8557600080fd5b612d9188828901612aca565b9150509295509295909350565b600080600080600080600080610100898b031215612dbb57600080fd5b6000612dc98b828c0161297a565b9850506020612dda8b828c01612b1e565b9750506040612deb8b828c01612b1e565b9650506060612dfc8b828c01612b33565b9550506080612e0d8b828c01612aa0565b94505060a0612e1e8b828c01612aa0565b93505060c089013567ffffffffffffffff811115612e3b57600080fd5b612e478b828c01612af4565b92505060e089013567ffffffffffffffff811115612e6457600080fd5b612e708b828c01612aca565b9150509295985092959890939650565b60008060408385031215612e9357600080fd5b600083013567ffffffffffffffff811115612ead57600080fd5b612eb98582860161298f565b925050602083013567ffffffffffffffff811115612ed657600080fd5b612ee2858286016129e3565b9150509250929050565b600080600080600060a08688031215612f0457600080fd5b600086013567ffffffffffffffff811115612f1e57600080fd5b612f2a8882890161298f565b955050602086013567ffffffffffffffff811115612f4757600080fd5b612f53888289016129e3565b945050604086013567ffffffffffffffff811115612f7057600080fd5b612f7c888289016129e3565b935050606086013567ffffffffffffffff811115612f9957600080fd5b612fa5888289016129b9565b925050608086013567ffffffffffffffff811115612fc257600080fd5b612fce88828901612a0d565b9150509295509295909350565b600060208284031215612fed57600080fd5b6000612ffb84828501612ab5565b91505092915050565b60006020828403121561301657600080fd5b600082013567ffffffffffffffff81111561303057600080fd5b61303c84828501612aca565b91505092915050565b60006020828403121561305757600080fd5b600082013567ffffffffffffffff81111561307157600080fd5b61307d84828501612af4565b91505092915050565b60006020828403121561309857600080fd5b60006130a684828501612b1e565b91505092915050565b60006130bb8383613177565b905092915050565b60006130cf83836134f0565b60208301905092915050565b60006130e7838361350e565b60208301905092915050565b6130fc81613c4a565b82525050565b600061310d82613b43565b6131178185613b89565b93508360208202850161312985613b23565b8060005b85811015613165578484038952815161314685826130af565b945061315183613b6f565b925060208a0199505060018101905061312d565b50829750879550505050505092915050565b600061318282613b4e565b61318c8185613b9a565b935061319783613b33565b8060005b838110156131c85781516131af88826130c3565b97506131ba83613b7c565b92505060018101905061319b565b5085935050505092915050565b60006131e082613b4e565b6131ea8185613bab565b93506131f583613b33565b8060005b8381101561322657815161320d88826130c3565b975061321883613b7c565b9250506001810190506131f9565b5085935050505092915050565b600061323e82613b4e565b6132488185613bbc565b935061325383613b33565b8060005b8381101561328457815161326b88826130db565b975061327683613b7c565b925050600181019050613257565b5085935050505092915050565b61329a81613c68565b82525050565b6132b16132ac82613c68565b613dc3565b82525050565b60006132c282613b59565b6132cc8185613bc7565b93506132dc818560208601613ce4565b6132e581613e7c565b840191505092915050565b60006132fb82613b64565b6133058185613bd8565b9350613315818560208601613ce4565b61331e81613e7c565b840191505092915050565b6000613336601d83613bd8565b915061334182613e9a565b602082019050919050565b6000613359602583613bd8565b915061336482613ec3565b604082019050919050565b600061337c600283613be9565b915061338782613f12565b600282019050919050565b600061339f602483613bd8565b91506133aa82613f3b565b604082019050919050565b60006133c2602583613bd8565b91506133cd82613f8a565b604082019050919050565b60006133e5602883613bd8565b91506133f082613fd9565b604082019050919050565b6000613408602383613bd8565b915061341382614028565b604082019050919050565b600061342b603483613bd8565b915061343682614077565b604082019050919050565b600061344e602b83613bd8565b9150613459826140c6565b604082019050919050565b6000613471603283613bd8565b915061347c82614115565b604082019050919050565b6000613494602883613bd8565b915061349f82614164565b604082019050919050565b60006134b7602483613bd8565b91506134c2826141b3565b604082019050919050565b60006134da601883613bd8565b91506134e582614202565b602082019050919050565b6134f981613cbe565b82525050565b61350881613cbe565b82525050565b61351781613cbe565b82525050565b61352681613cc8565b82525050565b60006135388284613233565b915081905092915050565b600061354e8261336f565b915061355a82856132a0565b60208201915061356a82846132a0565b6020820191508190509392505050565b600060208201905061358f60008301846130f3565b92915050565b60006080820190506135aa60008301876130f3565b81810360208301526135bc81866131d5565b905081810360408301526135d081856131d5565b905081810360608301526135e481846132b7565b905095945050505050565b600060808201905061360460008301876130f3565b61361160208301866134ff565b61361e60408301856134ff565b818103606083015261363081846132b7565b905095945050505050565b600060208201905081810360008301526136558184613102565b905092915050565b6000602082019050818103600083015261367781846131d5565b905092915050565b6000604082019050818103600083015261369981856131d5565b905081810360208301526136ad81846131d5565b90509392505050565b60006020820190506136cb6000830184613291565b92915050565b60006080820190506136e66000830187613291565b6136f360208301866130f3565b6137006040830185613291565b61370d6060830184613291565b95945050505050565b600060808201905061372b6000830187613291565b61373860208301866130f3565b61374560408301856134ff565b61375260608301846134ff565b95945050505050565b60006060820190506137706000830186613291565b61377d6020830185613291565b61378a604083018461351d565b949350505050565b60006080820190506137a76000830187613291565b6137b4602083018661351d565b6137c16040830185613291565b6137ce6060830184613291565b95945050505050565b600060208201905081810360008301526137f181846132f0565b905092915050565b6000602082019050818103600083015261381281613329565b9050919050565b600060208201905081810360008301526138328161334c565b9050919050565b6000602082019050818103600083015261385281613392565b9050919050565b60006020820190508181036000830152613872816133b5565b9050919050565b60006020820190508181036000830152613892816133d8565b9050919050565b600060208201905081810360008301526138b2816133fb565b9050919050565b600060208201905081810360008301526138d28161341e565b9050919050565b600060208201905081810360008301526138f281613441565b9050919050565b6000602082019050818103600083015261391281613464565b9050919050565b6000602082019050818103600083015261393281613487565b9050919050565b60006020820190508181036000830152613952816134aa565b9050919050565b60006020820190508181036000830152613972816134cd565b9050919050565b600060208201905061398e60008301846134ff565b92915050565b600061399e6139af565b90506139aa8282613d49565b919050565b6000604051905090565b600067ffffffffffffffff8211156139d4576139d3613e2b565b5b602082029050602081019050919050565b600067ffffffffffffffff821115613a00576139ff613e2b565b5b602082029050602081019050919050565b600067ffffffffffffffff821115613a2c57613a2b613e2b565b5b602082029050602081019050919050565b600067ffffffffffffffff821115613a5857613a57613e2b565b5b602082029050602081019050919050565b600067ffffffffffffffff821115613a8457613a83613e2b565b5b602082029050602081019050919050565b600067ffffffffffffffff821115613ab057613aaf613e2b565b5b602082029050602081019050919050565b600067ffffffffffffffff821115613adc57613adb613e2b565b5b613ae582613e7c565b9050602081019050919050565b600067ffffffffffffffff821115613b0d57613b0c613e2b565b5b613b1682613e7c565b9050602081019050919050565b6000819050602082019050919050565b6000819050602082019050919050565b600081519050919050565b600081519050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b6000602082019050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600082825260208201905092915050565b600081905092915050565b600082825260208201905092915050565b600082825260208201905092915050565b600081905092915050565b6000613bff82613cbe565b9150613c0a83613cbe565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115613c3f57613c3e613dcd565b5b828201905092915050565b6000613c5582613c9e565b9050919050565b60008115159050919050565b6000819050919050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b82818337600083830152505050565b60005b83811015613d02578082015181840152602081019050613ce7565b83811115613d11576000848401525b50505050565b60006002820490506001821680613d2f57607f821691505b60208210811415613d4357613d42613dfc565b5b50919050565b613d5282613e7c565b810181811067ffffffffffffffff82111715613d7157613d70613e2b565b5b80604052505050565b6000613d8582613cbe565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415613db857613db7613dcd565b5b600182019050919050565b6000819050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600060033d1115613e795760046000803e613e76600051613e8d565b90505b90565b6000601f19601f8301169050919050565b60008160e01c9050919050565b7f496e76616c6964206164647265737320666f72206e6577206f776e6572000000600082015250565b7f556e617574686f72697a65643a2073656e646572206973206e6f74207468652060008201527f6f776e6572000000000000000000000000000000000000000000000000000000602082015250565b7f1901000000000000000000000000000000000000000000000000000000000000600082015250565b7f455243313233383a206275726e20616d6f756e7420657863656564732062616c60008201527f616e636500000000000000000000000000000000000000000000000000000000602082015250565b7f455243313233383a20417070726f76616c20766572696669636174696f6e206660008201527f61696c6564000000000000000000000000000000000000000000000000000000602082015250565b7f455243313233383a204552433132333852656365697665722072656a6563746560008201527f6420746f6b656e73000000000000000000000000000000000000000000000000602082015250565b7f455243313233383a206275726e2066726f6d20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b7f455243313233383a207472616e7366657220746f206e6f6e204552433132333860008201527f526563656976657220696d706c656d656e746572000000000000000000000000602082015250565b7f455243313233383a2062616c616e636520717565727920666f7220746865207a60008201527f65726f2061646472657373000000000000000000000000000000000000000000602082015250565b7f4552433132333853746f726167653a2069647320616e6420746f6b656e20555260008201527f4973206c656e677468206d69736d617463680000000000000000000000000000602082015250565b7f455243313233383a2069647320616e6420616d6f756e7473206c656e6774682060008201527f6d69736d61746368000000000000000000000000000000000000000000000000602082015250565b7f455243313233383a20526563697069656e74206973206e6f74206120636f6e7460008201527f7261637400000000000000000000000000000000000000000000000000000000602082015250565b7f696e76616c6964207369676e6174757265206c656e6774680000000000000000600082015250565b600060443d101561423b576142be565b6142436139af565b60043d036004823e80513d602482011167ffffffffffffffff8211171561426b5750506142be565b808201805167ffffffffffffffff81111561428957505050506142be565b80602083010160043d0385018111156142a65750505050506142be565b6142b582602001850186613d49565b82955050505050505b90565b6142ca81613c4a565b81146142d557600080fd5b50565b6142e181613c5c565b81146142ec57600080fd5b50565b6142f881613c68565b811461430357600080fd5b50565b61430f81613c72565b811461431a57600080fd5b50565b61432681613cbe565b811461433157600080fd5b50565b61433d81613cc8565b811461434857600080fd5b5056fea2646970667358221220f841405b5e4d2d14e59eb4c3646f129fc39fdb9f28f029472120d608feafd3bd64736f6c63430008040033"


export const ABI2 = [
  {
    "inputs": [],
    "name": "ERC1238_ON_BATCH_MINT",
    "outputs": [
      {
        "internalType": "bytes4",
        "name": "",
        "type": "bytes4"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "ERC1238_ON_MINT",
    "outputs": [
      {
        "internalType": "bytes4",
        "name": "",
        "type": "bytes4"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      },
      {
        "internalType": "uint256[]",
        "name": "ids",
        "type": "uint256[]"
      },
      {
        "internalType": "uint256[]",
        "name": "",
        "type": "uint256[]"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "name": "onERC1238BatchMint",
    "outputs": [
      {
        "internalType": "bytes4",
        "name": "",
        "type": "bytes4"
      }
    ],
    "stateMutability": "pure",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "name": "onERC1238Mint",
    "outputs": [
      {
        "internalType": "bytes4",
        "name": "",
        "type": "bytes4"
      }
    ],
    "stateMutability": "pure",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes4",
        "name": "interfaceId",
        "type": "bytes4"
      }
    ],
    "name": "supportsInterface",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
];

export const bytecode2="0x608060405234801561001057600080fd5b506105b6806100206000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c806301ffc9a71461005c57806345ed75d51461008c5780635f6ea4d6146100bc578063c0bfec68146100da578063db3778e61461010a575b600080fd5b6100766004803603810190610071919061044a565b610128565b6040516100839190610491565b60405180910390f35b6100a660048036038101906100a191906103ca565b610192565b6040516100b391906104ac565b60405180910390f35b6100c46101bc565b6040516100d191906104ac565b60405180910390f35b6100f460048036038101906100ef9190610311565b6101c7565b60405161010191906104ac565b60405180910390f35b610112610233565b60405161011f91906104ac565b60405180910390f35b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b6000808514156101a857600060e01b90506101b3565b6345ed75d560e01b90505b95945050505050565b6345ed75d560e01b81565b60008087876000818110610204577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b90506020020135141561021d57600060e01b9050610228565b63c0bfec6860e01b90505b979650505050505050565b63c0bfec6860e01b81565b60008135905061024d8161053b565b92915050565b60008083601f84011261026557600080fd5b8235905067ffffffffffffffff81111561027e57600080fd5b60208301915083602082028301111561029657600080fd5b9250929050565b6000813590506102ac81610552565b92915050565b60008083601f8401126102c457600080fd5b8235905067ffffffffffffffff8111156102dd57600080fd5b6020830191508360018202830111156102f557600080fd5b9250929050565b60008135905061030b81610569565b92915050565b60008060008060008060006080888a03121561032c57600080fd5b600061033a8a828b0161023e565b975050602088013567ffffffffffffffff81111561035757600080fd5b6103638a828b01610253565b9650965050604088013567ffffffffffffffff81111561038257600080fd5b61038e8a828b01610253565b9450945050606088013567ffffffffffffffff8111156103ad57600080fd5b6103b98a828b016102b2565b925092505092959891949750929550565b6000806000806000608086880312156103e257600080fd5b60006103f08882890161023e565b9550506020610401888289016102fc565b9450506040610412888289016102fc565b935050606086013567ffffffffffffffff81111561042f57600080fd5b61043b888289016102b2565b92509250509295509295909350565b60006020828403121561045c57600080fd5b600061046a8482850161029d565b91505092915050565b61047c816104d9565b82525050565b61048b816104e5565b82525050565b60006020820190506104a66000830184610473565b92915050565b60006020820190506104c16000830184610482565b92915050565b60006104d282610511565b9050919050565b60008115159050919050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b610544816104c7565b811461054f57600080fd5b50565b61055b816104e5565b811461056657600080fd5b50565b61057281610531565b811461057d57600080fd5b5056fea2646970667358221220a082d266c545b70b4928eb41ed3230c6d36c50f68b915be5346847cf3dfa7cfb64736f6c63430008040033";

export const TESTNET_ADDRESS = "0xB95df2B5bc0400488C2c2dADb6E4c3eE6DdAc3B3";

export const MAINNET_ADDRESS = "";
