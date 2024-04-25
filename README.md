Great! Here's an updated README file incorporating the provided Solidity contract:
ERC20 Token Deployment Script

This script is used to deploy an ERC20 token contract on the Ethereum blockchain using Hardhat, a development environment for Ethereum.
Features

    Deploys an ERC20 token contract with customizable parameters such as name, symbol, total supply, and decimals.
    Fetches the Ethereum balance of the deployer's address before and after deployment.
    Logs the token contract address and the transaction link to the console.

Prerequisites

Before using this script, make sure you have the following installed:

    Node.js and npm (Node Package Manager)
    Hardhat

Instructions

    Install dependencies:

    bash

npm install hardhat ethers @openzeppelin/contracts

Set up Hardhat by running:

bash

npx hardhat

Run the deployment script using the following command:

bash

npx hardhat run deploy-token.ts --network sepolia

Wait for the deployment process to complete. The script will log the initial and final ETH balances of the deployer's address, the token contract address, and the transaction link to Etherscan.
