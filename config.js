require("dotenv").config();
const { ethers } = require("ethers");

const privateKey = process.argv[2]; // Wallet private key
const infuraProjectID = process.argv[3];
const tokenAddress = process.argv[4]; // ERC20 token contract address

// Load variables from .env
const provider = new ethers.providers.JsonRpcProvider(`https://sepolia.infura.io/v3/${infuraProjectID}`);
const wallet = new ethers.Wallet(privateKey, provider);

const erc20Abi = [
  // Minimal ERC20 ABI
  "function balanceOf(address owner) view returns (uint256)",
  "function transfer(address to, uint256 amount) returns (bool)",
];


module.exports = {
  provider,
  wallet,
  erc20Abi,
  tokenAddress,
};
