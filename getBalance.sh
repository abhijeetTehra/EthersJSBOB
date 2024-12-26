#!/bin/bash

npm install ethers@5.7.1
node getBalance.js $privateKey $infuraProjectID $tokenAddress $recipientAddress
