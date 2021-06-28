import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { AbstractIntegration, AbstractIntegrationInterface } from "../AbstractIntegration";
export declare class AbstractIntegration__factory {
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
    static createInterface(): AbstractIntegrationInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): AbstractIntegration;
}
