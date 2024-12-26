#!/bin/bash

npm install
node getBalance.js $privateKey $infuraProjectID $tokenAddress $recipientAddress
