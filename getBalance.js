const { ethers } = require("ethers");
const { wallet, erc20Abi, tokenAddress } = require("./config");

async function main() {
  const tokenContract = new ethers.Contract(tokenAddress, erc20Abi, wallet);
  const myAddress = wallet.address; // Your wallet address

  // Check balance
  const balance = await tokenContract.balanceOf(myAddress);// you can use any address
  console.log(`Your balance: ${ethers.utils.formatUnits(balance, 18)} tokens`);
}

main().catch((error) => {
  console.error("Error:", error);
});
