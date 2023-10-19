/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type {
  Signer,
  BigNumberish,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { PayableOverrides } from "../common";
import type { Lock, LockInterface } from "../Lock";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_unlockTime",
        type: "uint256",
      },
    ],
    stateMutability: "payable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "when",
        type: "uint256",
      },
    ],
    name: "Withdrawal",
    type: "event",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address payable",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "unlockTime",
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
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040526040516103cf3803806103cf8339810160408190526100229161006d565b80421061004a5760405162461bcd60e51b815260040161004190610096565b60405180910390fd5b600055600180546001600160a01b031916331790556100dd565b80515b92915050565b60006020828403121561008257610082600080fd5b600061008e8484610064565b949350505050565b6020808252810161006781602381527f556e6c6f636b2074696d652073686f756c6420626520696e207468652066757460208201526275726560e81b604082015260600190565b6102e3806100ec6000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c8063251c1aa3146100465780633ccfd60b146100655780638da5cb5b1461006f575b600080fd5b61004f60005481565b60405161005c91906101bc565b60405180910390f35b61006d61009c565b005b60015461008f9073ffffffffffffffffffffffffffffffffffffffff1681565b60405161005c91906101f7565b6000544210156100e1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016100d890610239565b60405180910390fd5b60015473ffffffffffffffffffffffffffffffffffffffff163314610132576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016100d89061027b565b7fbf2ed60bd5b5965d685680c01195c9514e4382e28e3a5a2d2d5244bf59411b93474260405161016392919061028b565b60405180910390a160015460405173ffffffffffffffffffffffffffffffffffffffff909116904780156108fc02916000818181858888f193505050501580156101b1573d6000803e3d6000fd5b50565b805b82525050565b602081016101ca82846101b4565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82166101ca565b6101b6816101d0565b602081016101ca82846101ee565b60168152602081017f596f752063616e27742077697468647261772079657400000000000000000000815290505b60200190565b602080825281016101ca81610205565b60148152602081017f596f75206172656e277420746865206f776e657200000000000000000000000081529050610233565b602080825281016101ca81610249565b6040810161029982856101b4565b6102a660208301846101b4565b939250505056fea2646970667358221220ccc4081e0d261bf8e796cd5e6d44dec2b8aa5146d305067bce300bc33c9da97164736f6c634300080f0033";

type LockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: LockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Lock__factory extends ContractFactory {
  constructor(...args: LockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    _unlockTime: BigNumberish,
    overrides?: PayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(_unlockTime, overrides || {});
  }
  override deploy(
    _unlockTime: BigNumberish,
    overrides?: PayableOverrides & { from?: string }
  ) {
    return super.deploy(_unlockTime, overrides || {}) as Promise<
      Lock & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): Lock__factory {
    return super.connect(runner) as Lock__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): LockInterface {
    return new Interface(_abi) as LockInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): Lock {
    return new Contract(address, _abi, runner) as unknown as Lock;
  }
}