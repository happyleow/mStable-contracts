"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.MockRoot__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "uint256",
                name: "r",
                type: "uint256",
            },
        ],
        name: "sqrt",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "pure",
        type: "function",
    },
];
const _bytecode = "0x608060405234801561001057600080fd5b50610279806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063677342ce14610030575b600080fd5b61004361003e3660046101e7565b610055565b60405190815260200160405180910390f35b600061006082610068565b90505b919050565b60008161007757506000610063565b816001600160801b82106100905760809190911c9060401b5b6801000000000000000082106100ab5760409190911c9060201b5b64010000000082106100c25760209190911c9060101b5b6201000082106100d75760109190911c9060081b5b61010082106100eb5760089190911c9060041b5b601082106100fe5760049190911c9060021b5b6008821061010a5760011b5b60016101168286610223565b61012090836101ff565b901c905060016101308286610223565b61013a90836101ff565b901c9050600161014a8286610223565b61015490836101ff565b901c905060016101648286610223565b61016e90836101ff565b901c9050600161017e8286610223565b61018890836101ff565b901c905060016101988286610223565b6101a290836101ff565b901c905060016101b28286610223565b6101bc90836101ff565b901c905060006101cc8286610223565b90508082106101db57806101dd565b815b9350505050610063565b6000602082840312156101f8578081fd5b5035919050565b6000821982111561021e57634e487b7160e01b81526011600452602481fd5b500190565b60008261023e57634e487b7160e01b81526012600452602481fd5b50049056fea26469706673582212205d60f476c80e4c5a895058f95a13a060b78e95e1b3af180a1865b563166e35bf64736f6c63430008020033";
class MockRoot__factory extends ethers_1.ContractFactory {
    constructor(signer) {
        super(_abi, _bytecode, signer);
    }
    deploy(overrides) {
        return super.deploy(overrides || {});
    }
    getDeployTransaction(overrides) {
        return super.getDeployTransaction(overrides || {});
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
exports.MockRoot__factory = MockRoot__factory;
MockRoot__factory.bytecode = _bytecode;
MockRoot__factory.abi = _abi;
//# sourceMappingURL=MockRoot__factory.js.map