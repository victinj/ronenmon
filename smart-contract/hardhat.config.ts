import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "dotenv/config";

// Get the private key from the .env file.
const saigonPrivateKey = process.env.SAIGON_PRIVATE_KEY;

if (!saigonPrivateKey) {
  console.warn("SAIGON_PRIVATE_KEY not found in .env file. Deployment to Saigon will not be possible.");
}

const config: HardhatUserConfig = {
  solidity: "0.8.24",
  networks: {
    saigon: {
      url: "https://saigon-testnet.roninchain.com/rpc",
      chainId: 2021, // Saigon Testnet Chain ID
      accounts: saigonPrivateKey ? [saigonPrivateKey] : [],
    },
  },
};

export default config;
