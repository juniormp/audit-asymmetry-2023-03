/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  SafEthV2MockStorage,
  SafEthV2MockStorageInterface,
} from "../SafEthV2MockStorage";

const _abi = [
  {
    inputs: [],
    name: "newFunctionCalled",
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
];

const _bytecode =
  "0x6080604052348015600f57600080fd5b5060838061001e6000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c8063e1aa320f14602d575b600080fd5b60005460399060ff1681565b604051901515815260200160405180910390f3fea264697066735822122029dba25858914426d826eb1b70362ed3ffcfb1b1a7a71958fb5ef9751347809064736f6c634300080d0033";

type SafEthV2MockStorageConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SafEthV2MockStorageConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SafEthV2MockStorage__factory extends ContractFactory {
  constructor(...args: SafEthV2MockStorageConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<SafEthV2MockStorage> {
    return super.deploy(overrides || {}) as Promise<SafEthV2MockStorage>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): SafEthV2MockStorage {
    return super.attach(address) as SafEthV2MockStorage;
  }
  connect(signer: Signer): SafEthV2MockStorage__factory {
    return super.connect(signer) as SafEthV2MockStorage__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SafEthV2MockStorageInterface {
    return new utils.Interface(_abi) as SafEthV2MockStorageInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SafEthV2MockStorage {
    return new Contract(address, _abi, signerOrProvider) as SafEthV2MockStorage;
  }
}
