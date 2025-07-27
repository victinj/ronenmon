## Gemini Development History

This document tracks the development progress and context for the Roninmon project when using Gemini.

### July 28, 2025

**Goal:** Connect the FastAPI backend to the Supabase database and resolve environment issues.

**Progress:**

1.  **Backend Architecture:**
    *   Refactored the backend into a professional, separated structure using `main.py` for routing, `crud.py` for database logic, `models.py` for ORM models, and `schemas.py` for API data shapes.
    *   Restructured the backend directory into a proper Python package (`app/`) to resolve relative import errors.
    *   Configured the application to use Supabase as the primary database.

2.  **Environment & Debugging:**
    *   Diagnosed a `pyenv` issue where the wrong Python environment was active. Resolved it by setting a local `.python-version` file.
    *   Encountered a `psycopg2.OperationalError: Network is unreachable` when starting the server.
    *   **Diagnosis:** Confirmed the error is not in the code but is an external network issue, most likely a firewall on the company-issued laptop blocking port `5432`.
    *   **Resolution:** The user will move the project to a personal laptop to bypass the restrictive network environment.

**Next Steps (To be executed on new personal machine):**

*   **Phase 1: Verify Project Setup**
    1.  Clone the project from GitHub.
    2.  Install all dependencies (`npm install` in `frontend` & `smart-contract`, `pip install -r requirements.txt` in `backend`).
    3.  Run `uvicorn app.main:app --reload` in the `backend` directory.
    4.  **Goal:** Confirm the server starts and can connect to Supabase. Test the `/api/v1/player/{wallet_address}` endpoint via the browser docs.

*   **Phase 2: Build the On-Chain "Reader" Service**
    1.  **Configure:** Add the deployed smart contract address and a Ronin RPC URL to the `backend/.env` file.
    2.  **Isolate Logic:** Create a new `backend/app/blockchain_service.py` file to contain all `web3.py` logic for interacting with the smart contract.
    3.  **Create Sync Endpoint:** Add a new `POST /api/v1/player/{wallet_address}/sync` endpoint to `main.py`.

*   **Phase 3: Implement the Synchronization Logic**
    1.  The new sync endpoint will call the `blockchain_service` to fetch on-chain data (NFT count, token URIs).
    2.  It will then fetch the corresponding metadata from IPFS.
    3.  Finally, it will use `crud.py` functions to save the retrieved NFT information into the Supabase `nfts` table, linking it to the correct player.

---

### July 27, 2025 (Afternoon)

**Goal:** Create, deploy, and interact with the first Roninmon NFT smart contract.

**Progress:**

1.  **Smart Contract Development (Hardhat):**
    *   Initialized a Hardhat project and wrote the `Roninmon.sol` contract.
    *   Configured Hardhat for Saigon testnet deployment.
    *   Created deployment and minting scripts.

2.  **IPFS Integration:**
    *   Set up Pinata and created a Python script to upload assets and metadata to IPFS.

3.  **Deployment & Minting:**
    *   Successfully deployed the contract and minted the first Roninmon NFT.

---

### July 27, 2025 (Morning)

**Goal:** Scaffold the backend and smart contract structure.

**Progress:**
*   Created `backend` and `smart-contract` directories.
*   Initialized FastAPI and created a placeholder `BattleScreen.jsx`.

---

### July 17, 2025

**Goal:** Refactor the frontend to an MVC-like pattern.

**Progress:**
*   Introduced `useGameController` hook and refactored screen components.
