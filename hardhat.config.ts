import * as dotenv from "dotenv";

import { HardhatUserConfig } from "hardhat/config";
import "@nomiclabs/hardhat-etherscan";
import "@nomiclabs/hardhat-waffle";
import "@typechain/hardhat";
import "hardhat-gas-reporter";
import "solidity-coverage";

dotenv.config();

const accounts = process.env.REACT_APP_PRIVATE_KEY
  ? [process.env.REACT_APP_PRIVATE_KEY]
  : [];

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.7",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  networks: {
    mumbai: {
      url: process.env.REACT_APP_MUMBAI_RPC_URL,
      accounts,
    },
  },
  etherscan: {
    apiKey: {
      mumbai: process.env.REACT_APP_MUMBAI_ETHERSCAN_KEY || "",
    },
    customChains: [
      {
        network: "mumbai",
        chainId: 80001,
        urls: {
          apiURL: "https://api-testnet.polygonscan.com/api",
          browserURL: "https://mumbai.polygonscan.com/",
        },
      },
    ],
  },
  gasReporter: {
    enabled: true,
    currency: "USD",
  },
};

export default config;
