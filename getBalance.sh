#!/bin/bash

# Access script arguments using $1, $2, $3, etc.
echo "Private Key: $1"
echo "Infura Project ID: $2"
echo "Token Address: $3"
# echo "Recipient Address: $4"

# Optionally, show all arguments
echo "All Arguments: $@"

# Run your node script
npm install
node getBalance.js "$1" "$2" "$3"
# cat output.log
# node transferTokens.js "$1" "$2" "$3" "$4"




# npm install
# node getBalance.js $privateKey $infuraProjectID $tokenAddress
