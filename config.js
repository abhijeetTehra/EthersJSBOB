require("dotenv").config();
const { ethers } = require("ethers");

// Load variables from .env
const provider = new ethers.providers.JsonRpcProvider(`https://sepolia.infura.io/v3/${process.env.INFURA_PROJECT_ID}`);
const privateKey = process.env.PRIVATE_KEY; // Wallet private key
const wallet = new ethers.Wallet(privateKey, provider);

const erc20Abi = [
  // Minimal ERC20 ABI
  "function balanceOf(address owner) view returns (uint256)",
  "function transfer(address to, uint256 amount) returns (bool)",
];

const tokenAddress = process.env.TOKEN_ADDRESS; // ERC20 token contract address

module.exports = {
  provider,
  wallet,
  erc20Abi,
  tokenAddress,
};
