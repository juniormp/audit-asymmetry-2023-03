/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { ICrvEthPool2, ICrvEthPool2Interface } from "../ICrvEthPool2";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "i",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "j",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "dx",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "min_dy",
        type: "uint256",
      },
    ],
    name: "exchange",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "i",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "j",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "dx",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "min_dy",
        type: "uint256",
      },
    ],
    name: "exchange_underlying",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class ICrvEthPool2__factory {
  static readonly abi = _abi;
  static createInterface(): ICrvEthPool2Interface {
    return new utils.Interface(_abi) as ICrvEthPool2Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ICrvEthPool2 {
    return new Contract(address, _abi, signerOrProvider) as ICrvEthPool2;
  }
}
