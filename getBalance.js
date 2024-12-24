
import { ethers } from "ethers";

// Retrieve DAO Address and User Address from command-line arguments
const daoAddress = process.argv[2];
const userAddress = process.argv[3];

const accounts = await window.ethereum.request({
  method: 'eth_requestAccounts',
});
const provider = new ethers.providers.Web3Provider(window.ethereum);
await provider.send('eth_requestAccounts', []);
const newSigner = provider.getSigner();

