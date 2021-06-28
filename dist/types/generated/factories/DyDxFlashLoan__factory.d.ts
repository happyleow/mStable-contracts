import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { DyDxFlashLoan, DyDxFlashLoanInterface } from "../DyDxFlashLoan";
export declare class DyDxFlashLoan__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<DyDxFlashLoan>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): DyDxFlashLoan;
    connect(signer: Signer): DyDxFlashLoan__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b506000602081905260017f2a11cb67ca5c7e99dba99b50e02c11472d0f19c22ed5af42a1599a7f57e1c7a45560027f70cfd5e45bda79ec08cf51b1938a36ea6a53e22bc2d92dc7d6aa23f7c40714275560037fc6521c8ea4247e8beb499344e591b9401fb2807ff9997dd598fd9e56c73a264d55736b175474e89094c44da98b954eedeac495271d0f905260047f5306b8fbe80b30a74098357ee8e26fad8dc069da9011cca5f0870a0a5982e54155610177806100ce6000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c80636036cba31461003b578063b82687881461006d575b600080fd5b61005b6100493660046100f7565b60006020819052908152604090205481565b60405190815260200160405180910390f35b61005b61007b3660046100f7565b6001600160a01b038116600090815260208190526040812054806100e55760405162461bcd60e51b815260206004820152601c60248201527f466c6173684c6f616e3a20556e737570706f7274656420746f6b656e00000000604482015260640160405180910390fd5b6100f060018261011e565b9392505050565b600060208284031215610108578081fd5b81356001600160a01b03811681146100f0578182fd5b60008282101561013c57634e487b7160e01b81526011600452602481fd5b50039056fea2646970667358221220e942bb66026404bcbd1a317d5dbd67aea26967ac1bc6b2c55d595cf477a18d3164736f6c63430008020033";
    static readonly abi: ({
        inputs: any[];
        stateMutability: string;
        type: string;
        name?: undefined;
        outputs?: undefined;
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
    })[];
    static createInterface(): DyDxFlashLoanInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): DyDxFlashLoan;
}
