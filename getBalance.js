const { ethers } = require("ethers");
const { wallet, erc20Abi, tokenAddress } = require("./config");

async function main() {
  const tokenContract = new ethers.Contract(tokenAddress, erc20Abi, wallet);
  const myAddress = wallet.address; // Your wallet address

  // Check balance
  const balance = await tokenContract.balanceOf(myAddress);// you can use any address
  console.log(`Your balance: ${ethers.utils.formatUnits(balance, 18)} tokens`);

  // Transfer tokens
  const recipient = "0x77231Bbe719a9220E5d1e87CC1B09A3ca733422f"; // Replace with the recipient's address
  const amount = ethers.utils.parseUnits("10", 18); // Replace with the token amount to transfer

  console.log(`Transferring ${ethers.utils.formatUnits(amount, 18)} tokens to ${recipient}...`);
  
  const tx = await tokenContract.transfer(recipient, amount);
  console.log("Transaction sent. Waiting for confirmation...");
  
  const receipt = await tx.wait();
  console.log("Transaction confirmed:", receipt.transactionHash);
}

main().catch((error) => {
  console.error("Error:", error);
});
