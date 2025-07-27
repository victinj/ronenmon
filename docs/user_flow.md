# User Interaction Flow

This document outlines the primary user flow for logging in, funding a wallet, and purchasing in-game items like incubators.

## 1. Wallet Connection (Login)

1.  **User Arrives at Landing Screen:** The user first sees the `LandingScreen`.
2.  **User Clicks "Connect Wallet":** The user initiates the login process by clicking the "Connect Wallet" button.
3.  **Wallet Extension Prompt:** The Ronin Wallet browser extension (or a similar wallet provider) prompts the user to approve the connection to the Roninmon application.
4.  **Connection Confirmation:**
    *   **On Success:** The application receives the user's wallet address. The `useGameController` updates the `player` state with the address and a starting balance (fetched from the backend/smart contract). The user is then navigated to the `MainMenuScreen`.
    *   **On Failure:** If the user rejects the connection, an error message is displayed on the `LandingScreen`, and the user remains there.

## 2. Topping Up Balance (Funding the Wallet)

1.  **User Navigates to Wallet:** From the `MainMenuScreen`, the user clicks on the "Wallet" button in the sidebar to go to the `WalletScreen`.
2.  **User Selects "Deposit":** On the `WalletScreen`, the user clicks a "Deposit" or "Top Up" button.
3.  **Deposit Screen:** The user is taken to the `DepositScreen`. This screen will display a QR code and a wallet address to which the user can send funds (e.g., RON, AXS, or a stablecoin) from their external wallet or an exchange.
4.  **Backend Confirmation:** A backend service monitors the blockchain for incoming transactions to that address.
5.  **Balance Update:** Once the transaction is confirmed on-chain, the backend updates the user's in-game balance, which is then reflected in the UI (e.g., the `PlayerInfoCard`).

## 3. Purchasing an Item (e.g., Incubator)

1.  **User Navigates to Shop/Incubator:** From the `MainMenuScreen`, the user clicks the "Incubator" button.
2.  **User Selects Item:** On the `IncubatorScreen`, the user sees available incubators or other items for purchase and clicks a "Buy" button.
3.  **Purchase Confirmation:**
    *   A modal or confirmation screen appears, showing the item's price and asking the user to confirm the purchase.
    *   The application checks if the user's in-game balance is sufficient.
4.  **Transaction Execution:**
    *   **On Confirmation:** The application calls the backend API to process the purchase.
    *   The backend interacts with the smart contract to transfer the item (as an NFT or in-game asset) to the user's wallet and deduct the cost from their balance.
5.  **UI Update:**
    *   The user's in-game balance is updated in the UI.
    *   The purchased item now appears in the user's `InventoryScreen`.
    *   A success message is displayed to the user.
