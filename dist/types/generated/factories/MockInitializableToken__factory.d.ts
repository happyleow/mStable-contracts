import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { MockInitializableToken, MockInitializableTokenInterface } from "../MockInitializableToken";
export declare class MockInitializableToken__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<MockInitializableToken>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): MockInitializableToken;
    connect(signer: Signer): MockInitializableToken__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b50610d7e806100206000396000f3fe608060405234801561001057600080fd5b50600436106100b45760003560e01c80636c945221116100715780636c9452211461014757806370a082311461015c57806395d89b411461016f578063a457c2d714610177578063a9059cbb1461018a578063dd62ed3e1461019d576100b4565b806306fdde03146100b9578063095ea7b3146100d757806318160ddd146100fa57806323b872dd1461010c578063313ce5671461011f5780633950935114610134575b600080fd5b6100c16101d6565b6040516100ce9190610b42565b60405180910390f35b6100ea6100e5366004610a7b565b610268565b60405190151581526020016100ce565b6002545b6040519081526020016100ce565b6100ea61011a366004610a40565b61027e565b60055460405160ff90911681526020016100ce565b6100ea610142366004610a7b565b610336565b61015a610155366004610aa4565b61036d565b005b6100fe61016a3660046109f4565b61040c565b6100c161042b565b6100ea610185366004610a7b565b61043a565b6100ea610198366004610a7b565b6104d5565b6100fe6101ab366004610a0e565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6060600380546101e590610cf7565b80601f016020809104026020016040519081016040528092919081815260200182805461021190610cf7565b801561025e5780601f106102335761010080835404028352916020019161025e565b820191906000526020600020905b81548152906001019060200180831161024157829003601f168201915b5050505050905090565b60006102753384846104e2565b50600192915050565b600061028b848484610606565b6001600160a01b0384166000908152600160209081526040808320338452909152902054828110156103155760405162461bcd60e51b815260206004820152602860248201527f45524332303a207472616e7366657220616d6f756e74206578636565647320616044820152676c6c6f77616e636560c01b60648201526084015b60405180910390fd5b61032985336103248685610ce0565b6104e2565b60019150505b9392505050565b3360008181526001602090815260408083206001600160a01b03871684529091528120549091610275918590610324908690610b95565b6103e287878080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525050604080516020601f8b0181900481028201810190925289815292508991508890819084018382808284376000920191909152508892506107de915050565b610403826103f460ff8616600a610bf3565b6103fe9084610cc1565b61081e565b50505050505050565b6001600160a01b0381166000908152602081905260409020545b919050565b6060600480546101e590610cf7565b3360009081526001602090815260408083206001600160a01b0386168452909152812054828110156104bc5760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b606482015260840161030c565b6104cb33856103248685610ce0565b5060019392505050565b6000610275338484610606565b6001600160a01b0383166105445760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b606482015260840161030c565b6001600160a01b0382166105a55760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b606482015260840161030c565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b6001600160a01b03831661066a5760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b606482015260840161030c565b6001600160a01b0382166106cc5760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b606482015260840161030c565b6001600160a01b038316600090815260208190526040902054818110156107445760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b606482015260840161030c565b61074e8282610ce0565b6001600160a01b038086166000908152602081905260408082209390935590851681529081208054849290610784908490610b95565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516107d091815260200190565b60405180910390a350505050565b82516107f19060039060208601906108fd565b5081516108059060049060208501906108fd565b506005805460ff191660ff929092169190911790555050565b6001600160a01b0382166108745760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640161030c565b80600260008282546108869190610b95565b90915550506001600160a01b038216600090815260208190526040812080548392906108b3908490610b95565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b82805461090990610cf7565b90600052602060002090601f01602090048101928261092b5760008555610971565b82601f1061094457805160ff1916838001178555610971565b82800160010185558215610971579182015b82811115610971578251825591602001919060010190610956565b5061097d929150610981565b5090565b5b8082111561097d5760008155600101610982565b80356001600160a01b038116811461042657600080fd5b60008083601f8401126109be578182fd5b50813567ffffffffffffffff8111156109d5578182fd5b6020830191508360208285010111156109ed57600080fd5b9250929050565b600060208284031215610a05578081fd5b61032f82610996565b60008060408385031215610a20578081fd5b610a2983610996565b9150610a3760208401610996565b90509250929050565b600080600060608486031215610a54578081fd5b610a5d84610996565b9250610a6b60208501610996565b9150604084013590509250925092565b60008060408385031215610a8d578182fd5b610a9683610996565b946020939093013593505050565b600080600080600080600060a0888a031215610abe578283fd5b873567ffffffffffffffff80821115610ad5578485fd5b610ae18b838c016109ad565b909950975060208a0135915080821115610af9578485fd5b50610b068a828b016109ad565b909650945050604088013560ff81168114610b1f578384fd5b9250610b2d60608901610996565b91506080880135905092959891949750929550565b6000602080835283518082850152825b81811015610b6e57858101830151858201604001528201610b52565b81811115610b7f5783604083870101525b50601f01601f1916929092016040019392505050565b60008219821115610ba857610ba8610d32565b500190565b80825b6001808611610bbf5750610bea565b818704821115610bd157610bd1610d32565b80861615610bde57918102915b9490941c938002610bb0565b94509492505050565b600061032f6000198484600082610c0c5750600161032f565b81610c195750600061032f565b8160018114610c2f5760028114610c3957610c66565b600191505061032f565b60ff841115610c4a57610c4a610d32565b6001841b915084821115610c6057610c60610d32565b5061032f565b5060208310610133831016604e8410600b8410161715610c99575081810a83811115610c9457610c94610d32565b61032f565b610ca68484846001610bad565b808604821115610cb857610cb8610d32565b02949350505050565b6000816000190483118215151615610cdb57610cdb610d32565b500290565b600082821015610cf257610cf2610d32565b500390565b600281046001821680610d0b57607f821691505b60208210811415610d2c57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fdfea26469706673582212203af6e3506785fae6691c61c933d4e12dd0363e11bff44c129b1f31251db2b2e964736f6c63430008020033";
    static readonly abi: ({
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        outputs?: undefined;
        stateMutability?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[];
    static createInterface(): MockInitializableTokenInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): MockInitializableToken;
}
