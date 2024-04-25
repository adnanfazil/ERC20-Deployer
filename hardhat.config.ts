import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const ALCHEMY_API_KEY = "UvHf42LaK7dYiJoWGxbwe6B_608SfrtO";
const SEPOLIA_PRIVATE_KEY =
  "92f27cc70cdb878a2d8bb57f7d38bdca73b5862b7257d4758dbee07244483a6c";

const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: "0.8.0",
      },
      {
        version: "0.8.20",
      },
    ],
  },
  networks: {
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts: [`${SEPOLIA_PRIVATE_KEY}`],
    },
  },
};

export default config;
