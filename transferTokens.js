const { ethers } = require("ethers");
const { wallet, erc20Abi, tokenAddress } = require("./config");

const recipient = process.argv[5]; // Replace with the recipient's address
const transferAmount = process.argv[6];

async function main() {
  const tokenContract = new ethers.Contract(tokenAddress, erc20Abi, wallet);
  const myAddress = wallet.address; // Your wallet address

  // Check balance
  const checkBalance = await tokenContract.balanceOf(myAddress);// you can use any address
  const balance = ethers.utils.formatUnits(checkBalance, 18)

  // Transfer tokens
  const amount = ethers.utils.parseUnits(transferAmount, 18); // Replace with the token amount to transfer
  console.log(balance, amount);
  if(amount>balance){
    console.error('Error: Amount Asked is more than balance Amount:'+amount+" Balance:"+balance);
    return;
  }

//   console.log(`Transferring ${ethers.utils.formatUnits(amount, 18)} tokens to ${recipient}...`);
  
  const tx = await tokenContract.transfer(recipient, amount);
//   console.log("Transaction sent. Waiting for confirmation...");
  
  const receipt = await tx.wait();
  console.log(receipt.transactionHash);
}

main().catch((error) => {
  console.error("Error:", error.reason);
});
