"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoostedTokenWrapper__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "address",
                name: "_stakingToken",
                type: "address",
            },
            {
                internalType: "address",
                name: "_boostDirector",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "_priceCoeff",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "_boostCoeff",
                type: "uint256",
            },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "from",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "value",
                type: "uint256",
            },
        ],
        name: "Transfer",
        type: "event",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_account",
                type: "address",
            },
        ],
        name: "balanceOf",
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
        name: "boostCoeff",
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
        name: "boostDirector",
        outputs: [
            {
                internalType: "contract IBoostDirector",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "decimals",
        outputs: [
            {
                internalType: "uint8",
                name: "",
                type: "uint8",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_account",
                type: "address",
            },
        ],
        name: "getBoost",
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
        name: "name",
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
        inputs: [],
        name: "priceCoeff",
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
                name: "_account",
                type: "address",
            },
        ],
        name: "rawBalanceOf",
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
        name: "stakingToken",
        outputs: [
            {
                internalType: "contract IERC20",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "symbol",
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
        inputs: [],
        name: "totalSupply",
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
];
const _bytecode = "0x61010060405234801561001157600080fd5b5060405161053738038061053783398101604081905261003091610074565b6001600160601b0319606094851b81166080529290931b90911660a05260e05260c0526100b6565b80516001600160a01b038116811461006f57600080fd5b919050565b60008060008060808587031215610089578384fd5b61009285610058565b93506100a060208601610058565b6040860151606090960151949790965092505050565b60805160601c60a05160601c60c05160e0516104426100f5600039600061011f015260006101f0015260006101c90152600061018201526104426000f3fe608060405234801561001057600080fd5b50600436106100a95760003560e01c806367ba3d901161007157806367ba3d901461014157806370a082311461015457806372f702f31461017d57806395d89b41146101bc578063b43082ec146101c4578063f62aa975146101eb576100a9565b806306fdde03146100ae57806312064c34146100cc57806318160ddd14610103578063313ce5671461010b57806338d3eb381461011a575b600080fd5b6100b6610212565b6040516100c39190610333565b60405180910390f35b6100f56100da36600461030c565b6001600160a01b031660009081526005602052604090205490565b6040519081526020016100c3565b6003546100f5565b604051601281526020016100c3565b6100f57f000000000000000000000000000000000000000000000000000000000000000081565b6100f561014f36600461030c565b6102a4565b6100f561016236600461030c565b6001600160a01b031660009081526004602052604090205490565b6101a47f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b0390911681526020016100c3565b6100b66102d7565b6101a47f000000000000000000000000000000000000000000000000000000000000000081565b6100f57f000000000000000000000000000000000000000000000000000000000000000081565b606060018054610221906103d1565b80601f016020809104026020016040519081016040528092919081815260200182805461024d906103d1565b801561029a5780601f1061026f5761010080835404028352916020019161029a565b820191906000526020600020905b81548152906001019060200180831161027d57829003601f168201915b5050505050905090565b6001600160a01b03811660009081526005602090815260408083205460049092528220546102d1916102e6565b92915050565b606060028054610221906103d1565b6000816102fb670de0b6b3a7640000856103a6565b6103059190610386565b9392505050565b60006020828403121561031d578081fd5b81356001600160a01b0381168114610305578182fd5b6000602080835283518082850152825b8181101561035f57858101830151858201604001528201610343565b818111156103705783604083870101525b50601f01601f1916929092016040019392505050565b6000826103a157634e487b7160e01b81526012600452602481fd5b500490565b60008160001904831182151516156103cc57634e487b7160e01b81526011600452602481fd5b500290565b6002810460018216806103e557607f821691505b6020821081141561040657634e487b7160e01b600052602260045260246000fd5b5091905056fea26469706673582212206739e363b8241829e65e7b82ce2058b23af3000c4f75a5299c50d8a22423284164736f6c63430008020033";
class BoostedTokenWrapper__factory extends ethers_1.ContractFactory {
    constructor(signer) {
        super(_abi, _bytecode, signer);
    }
    deploy(_stakingToken, _boostDirector, _priceCoeff, _boostCoeff, overrides) {
        return super.deploy(_stakingToken, _boostDirector, _priceCoeff, _boostCoeff, overrides || {});
    }
    getDeployTransaction(_stakingToken, _boostDirector, _priceCoeff, _boostCoeff, overrides) {
        return super.getDeployTransaction(_stakingToken, _boostDirector, _priceCoeff, _boostCoeff, overrides || {});
    }
    attach(address) {
        return super.attach(address);
    }
    connect(signer) {
        return super.connect(signer);
    }
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.BoostedTokenWrapper__factory = BoostedTokenWrapper__factory;
BoostedTokenWrapper__factory.bytecode = _bytecode;
BoostedTokenWrapper__factory.abi = _abi;
//# sourceMappingURL=BoostedTokenWrapper__factory.js.map