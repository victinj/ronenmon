# Roninmon NFT Minting Guide

This guide walks you through the complete process of creating a new Roninmon NFT, from preparing the assets to minting it on the Ronin blockchain.

The process involves two main stages:
1.  **Asset & Metadata Preparation:** Uploading your monster's image and metadata to the InterPlanetary File System (IPFS).
2.  **On-Chain Minting:** Calling the smart contract function to create the NFT and assign it to a player.

---

## Prerequisites

Before you begin, ensure you have the following set up:

1.  **Pinata Account:** You need a [Pinata](https://pinata.cloud) account to easily "pin" (host) your files on IPFS.
2.  **Environment Files:**
    *   In the `backend/` directory, create a `.env` file with your Pinata API keys:
        ```env
        # backend/.env
        PINATA_API_KEY="YOUR_PINATA_API_KEY"
        PINATA_SECRET_API_KEY="YOUR_PINATA_SECRET_KEY"
        ```
    *   In the `smart-contract/` directory, create a `.env` file with your wallet's private key for the Saigon testnet:
        ```env
        # smart-contract/.env
        SAIGON_PRIVATE_KEY="YOUR_SAIGON_WALLET_PRIVATE_KEY"
        ```
3.  **Dependencies:** Install the necessary packages for both the backend and smart contract projects:
    ```bash
    # From the project root
    pip install -r backend/requirements.txt
    npm install --prefix smart-contract
    ```

---

## Stage 1: Uploading to IPFS

The `backend/ipfs_uploader.py` script handles everything for this stage. It uploads your image, creates a standard metadata file, and uploads that metadata to IPFS.

### Step 1: Prepare Your Asset

Place the image for your new Roninmon into the `backend/` directory. For this example, we'll use `fireheart_example.png`.

### Step 2: Run the Uploader Script

The `ipfs_uploader.py` script is designed to be run directly. It contains an example that you can modify.

1.  **Open `backend/ipfs_uploader.py`**.
2.  **Modify the `if __name__ == "__main__":` block** at the bottom of the file with your monster's details (name, description, attributes).
3.  **Execute the script** from the project root directory:
    ```bash
    python backend/ipfs_uploader.py
    ```

### Step 3: Get the Token URI

The script will print a lot of information, but the most important output is the final **Token URI**. It will look like this:

```
--- Pipeline Complete ---
✅ Final Token URI for smart contract: ipfs://Qmxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

**Copy this `ipfs://...` URI.** You will need it for the next stage.

---

## Stage 2: Minting the NFT

The `smart-contract/scripts/mint.ts` script uses the Token URI from Stage 1 to mint the NFT on the blockchain.

### Step 1: Configure the Minting Script

1.  **Open `smart-contract/scripts/mint.ts`**.
2.  **Update the placeholder values** at the top of the file:
    *   `CONTRACT_ADDRESS`: The address of your deployed `Roninmon.sol` contract.
    *   `TOKEN_URI`: The `ipfs://...` URI you copied from the previous stage.
    *   `RECIPIENT_ADDRESS`: The Ronin wallet address that will receive the newly minted NFT.

### Step 2: Run the Minting Script

Execute the Hardhat script from the `smart-contract` directory:

```bash
# Navigate to the smart-contract directory
cd smart-contract

# Run the minting script
npx hardhat run scripts/mint.ts --network saigon
```

### Step 3: Confirmation

The script will print a confirmation message upon success, including the transaction hash.

```
Connecting to the Roninmon contract...
Minting a new NFT with Token URI: ipfs://Qm...
Recipient: 0x...
Transaction sent. Waiting for confirmation...
✅ NFT successfully minted!
Transaction Hash: 0x...
```

Congratulations! You have successfully minted a new Roninmon NFT. You can verify the transaction and the new token on the [Saigon Testnet Explorer](https://saigon-app.roninchain.com/).
