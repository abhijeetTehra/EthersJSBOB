#!/bin/bash

# Access script arguments using $1, $2, $3, etc.
# privateKey=$1
# infuraProjectId=$2
# tokenAddress=$3
# recipientAddress=$4

# Optionally, show all arguments
# echo "All Arguments: $@"

# Run your node script
npm install > /dev/null 2>&1
output=$(node getBalance.js '$privateKey' '$infuraProjectId' '$tokenAddress')
echo $output
# cat output.log
# node transferTokens.js "$1" "$2" "$3" "$4"




# npm install
# node getBalance.js $privateKey $infuraProjectID $tokenAddress
