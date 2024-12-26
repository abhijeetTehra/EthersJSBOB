#!/bin/bash

# Access script arguments using $1, $2, $3, etc.
privateKey=$1
infuraProjectId=$2
tokenAddress=$3
recipientAddress=$4
tokenAmount=$5
# echo "Recipient Address: $4"

# Optionally, show all arguments
# echo "All Arguments: $@"

# Run your node script
npm install > /dev/null 2>&1
output=$(node transferTokens.js $privateKey $infuraProjectId $tokenAddress $recipientAddress $tokenAmount)
echo $output
# cat output.log
# node transferTokens.js "$1" "$2" "$3" "$4"



# npm install
# node transferTokens.js $privateKey $infuraProjectID $tokenAddress $recipientAddress
