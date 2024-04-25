import { ethers } from "hardhat";

async function main(): Promise<void> {
  const [deployer] = await ethers.getSigners();

  // Fetch ETH balance before deployment
  const initialETHBalance = await ethers.provider.getBalance(deployer.address);
  console.log("Initial ETH balance:", initialETHBalance.toString() / 10 ** 18);

  // Adjust these values as needed
  const name: string = "Token";
  const symbol: string = "TKN";
  const totalSupply: string = "10000";
  const decimals: string = "18";
  // const initialSupply: ethers.BigNumber = ethers.utils.parseEther("1000");

  const Token = await ethers.getContractFactory("MyToken");
  const token = await Token.deploy(name, symbol, totalSupply, decimals);

  console.log("Token address:", token.target);

  // Fetch ETH balance after deployment
  const finalETHBalance = await ethers.provider.getBalance(deployer.address);
  console.log("Final ETH balance:", finalETHBalance.toString() / 10 ** 18);

  // Console log the link to the transaction scanner
  // Console log the link to the transaction scanner
  console.log(
    "Transaction link:",
    `https://sepolia.etherscan.io/address/${token.target}`
  );
}

main()
  .then(() => process.exit(0))
  .catch((error: Error) => {
    console.error(error);
    process.exit(1);
  });
