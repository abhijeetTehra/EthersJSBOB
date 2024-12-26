#!/bin/bash

npm install
node transferTokens.js $privateKey $infuraProjectID $tokenAddress $recipientAddress
