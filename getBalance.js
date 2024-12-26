const { ethers } = require("ethers");
const { wallet, erc20Abi, tokenAddress } = require("./config");

async function main() {
  // try{
    const tokenContract = new ethers.Contract(tokenAddress, erc20Abi, wallet);
    const myAddress = wallet.address; // Your wallet address
  
    // Check balance
    const balance = await tokenContract.balanceOf(myAddress);// you can use any address
    // console.log(`Your balance: ${balance} tokens`);
    console.log(ethers.utils.formatUnits(balance, 18));
  // } catch(e) {
  //   console.log("Message", e.reason);
  // }
}

main().catch((error) => {
  console.error("Error:", error.reason);
});
