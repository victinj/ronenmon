import { ethers } from "hardhat";
import "dotenv/config";

async function main() {
  // --- IMPORTANT: REPLACE THESE VALUES ---
  // The address of your deployed Roninmon contract.
  const CONTRACT_ADDRESS = "0x1bA276CfdF513A6580b98C92B2F86f309bfb145f"; 
  
  // The IPFS link for your NFT's metadata.
  const TOKEN_URI = "ipfs://QmRfVWe6Mv9rqETRNwsqtYG98vGhL14XXA3hYYSuoQYRon"; 
  
  // The address that will receive the new NFT.
  // This is typically your own wallet address.
  const RECIPIENT_ADDRESS = "0xe235f72C4f8debbf6aE9D3B42cb888BD58ff4bDF";
  // ---

  console.log("Connecting to the Roninmon contract...");

  // Get the contract factory and attach it to the deployed contract address.
  // This is how you interact with a contract that is already on the blockchain.
  const Roninmon = await ethers.getContractFactory("Roninmon");
  const contract = Roninmon.attach(CONTRACT_ADDRESS);

  console.log(`Minting a new NFT with Token URI: ${TOKEN_URI}`);
  console.log(`Recipient: ${RECIPIENT_ADDRESS}`);

  // Call the safeMint function on the contract.
  const tx = await contract.safeMint(RECIPIENT_ADDRESS, TOKEN_URI);

  console.log("Transaction sent. Waiting for confirmation...");
  
  // Wait for the transaction to be mined and confirmed on the blockchain.
  await tx.wait();

  console.log("✅ NFT successfully minted!");
  console.log(`Transaction Hash: ${tx.hash}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
