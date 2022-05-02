import { ABI, TESTNET_ADDRESS, MAINNET_ADDRESS } from "../shared/constants";
import { getMintBatchApprovalSignature } from "./utils";

let contract = null;

let mainnetChainIDs = [1666600000, 1666600001, 1666600002, 1666600003];

let testnetChainIDs = [1666700000, 1666700001, 1666700002, 1666700003];

const determineAddress = async (chainId) => {
  if (mainnetChainIDs.find((id) => id === chainId)) {
    return MAINNET_ADDRESS;
  } else if (testnetChainIDs.find((id) => id === chainId)) {
    return TESTNET_ADDRESS;
  } else {
    throw new Error("This chain ID does not exist on the HARMONY NETWORK");
  }
};

export const initContract = async (web3, chainId) => {
  contract = new web3.eth.Contract(ABI, await determineAddress(chainId));
  return contract;
};

export const getContractInstance = async () => {
  if (contract) {
    return contract;
  } else {
    throw new Error("Contract not yet initalized");
  }
};

export const testBundleMint = async (
  signer1,
  eoaRecipient,
  walletAddress,
  chainId
) => {
  const tokenBatchIds = ["2000", "2010", "2020"];
  const tokenBatchURIs = [
    "https://ipfs.io/ipfs/Qme7ss3ARVgxv6rXqVPiikMJ8u2NLgmgszg13pYrDKEoiu",
    "https://ipfs.io/ipfs/Qme7ss3ARVgxv6rXqVPiikMJ8u2NLgmgszg13pYrDKEoiv",
    "https://ipfs.io/ipfs/Qme7ss3ARVgxv6rXqVPiikMJ8u2NLgmgszg13pYrDKEoiw",
  ];
  const mintBatchAmounts = ["5000", "10000", "42195"];

  const ids = [tokenBatchIds, tokenBatchIds, tokenBatchIds];
  const amounts = [mintBatchAmounts, mintBatchAmounts, mintBatchAmounts];
  const uris = [tokenBatchURIs, tokenBatchURIs, tokenBatchURIs];

  const signatureFromSigner1 = await getMintBatchApprovalSignature({
    erc1238ContractAddress: TESTNET_ADDRESS,
    chainId,
    signer: signer1,
    ids: ids[0],
    amounts: amounts[0],
  });

  const signatureFromEoaRecipient = await getMintBatchApprovalSignature({
    erc1238ContractAddress: TESTNET_ADDRESS,
    chainId,
    signer: eoaRecipient,
    ids: ids[2],
    amounts: amounts[2],
  });

  const data = [
    signatureFromSigner1.fullSignature,
    [],
    signatureFromEoaRecipient.fullSignature,
  ];

  // mintBundle(to, ids, amounts, uris, data, walletAddress);
};

export const mintBundle = async (to, ids, amounts, uris, data, address) => {
  return await contract.methods
    .mintBundle(to, ids, amounts, uris, data)
    .send({ from: address });
};
