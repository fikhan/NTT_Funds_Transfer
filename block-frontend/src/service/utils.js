import { ethers } from "ethers";
import { TESTNET_ADDRESS } from "../shared/constants";

const MintApprovaltypes = {
  MintApproval: [
    { name: "recipient", type: "address" },
    { name: "id", type: "uint256" },
    { name: "amount", type: "uint256" },
  ],
};
const MintBatchApprovalTypes = {
  MintBatchApproval: [
    { name: "recipient", type: "address" },
    { name: "ids", type: "uint256[]" },
    { name: "amounts", type: "uint256[]" },
  ],
};

const getDomain = (chainId, verifyingContract) => ({
  name: "ERC1238 Mint Approval",
  version: "1",
  chainId,
  verifyingContract,
});

export const getContractAddress = async (chainid) => {};

export const getMintApprovalSignature = async ({
  chainId,
  id,
  amount,
  address,
}) => {
  const domain = getDomain(chainId, TESTNET_ADDRESS);

  const provider = new ethers.providers.JsonRpcProvider(
    "https://api.s0.b.hmny.io"
  );

  const signer = provider.getSigner(address);

  const value = {
    recipient: signer.address,
    id,
    amount,
  };

  let sig;
  try {
    sig = await signer._signTypedData(domain, MintApprovaltypes, value);
  } catch (err) {
    console.error(err);
    throw err;
  }

  return { fullSignature: sig, ...ethers.utils.splitSignature(sig) };
};

export const getMintBatchApprovalSignature = async ({
  erc1238ContractAddress,
  chainId,
  ids,
  amounts,
  address,
}) => {
  const provider = new ethers.providers.JsonRpcProvider(
    "https://api.s0.b.hmny.io"
  );

  const signer = provider.getSigner(address);

  const domain = getDomain(chainId, erc1238ContractAddress);

  const value = {
    recipient: address,
    ids,
    amounts,
  };

  const sig = await signer._signTypedData(
    domain,
    MintBatchApprovalTypes,
    value
  );

  return { fullSignature: sig, ...ethers.utils.splitSignature(sig) };
};
