# Roninmon Beta Test Plan v3

## 1. Beta Program Goals & Success Criteria

### Primary Objective
To rigorously test the end-to-end user experience, from onboarding to core gameplay, while measuring the performance and reliability of both the frontend application and the backend infrastructure.

### Overall Success Metric
The beta test will be considered **successful**, and the project ready for the next phase, if the following condition is met:
*   **Core Loop Completion Rate:** **At least 90% of beta testers** can successfully complete the entire critical path (Onboarding -> Incubating a Monster -> Completing a Battle) without encountering a blocking bug that prevents them from proceeding.

---

## 2. Beta Test Flow & Measurement

Testers are required to follow these steps and report their status. Success for each step will be measured by the metrics defined below.

### Step 1: First-Time User Onboarding
*   **User Action:** Launch the application and connect your Ronin wallet for the very first time.
*   **Frontend Target:**
    *   **Goal:** A smooth, uninterrupted transition from the wallet connection screen to the main menu.
    *   **Measurement:**
        *   **Success Rate:** >95% of new users are redirected to the Main Menu automatically after a successful wallet connection.
        *   **Performance:** The UI remains responsive and does not freeze. Redirection occurs in **under 15 seconds**.
*   **Backend Target:**
    *   **Goal:** A new player profile is successfully created and persisted in the database.
    *   **Measurement:**
        *   **Data Integrity:** A new, unique record is created in the `players` table containing the user's wallet address. No duplicate entries are created.
        *   **Performance:** The `/api/v1/player/` creation endpoint responds with a `201 Created` status in **under 500ms**.

### Step 2: Returning User Login
*   **User Action:** Disconnect from the main menu, then reconnect using the **same** Ronin wallet.
*   **Frontend Target:**
    *   **Goal:** A fast and seamless login experience for existing users.
    *   **Measurement:**
        *   **Success Rate:** >98% of returning users are logged in and see the Main Menu.
        *   **Performance:** Redirection to the Main Menu occurs in **under 10 seconds**.
*   **Backend Target:**
    *   **Goal:** The system correctly identifies and fetches the existing player's data without creating a new profile.
    *   **Measurement:**
        *   **Data Integrity:** The system correctly fetches the existing player record. No new player record is created in the database.
        *   **Performance:** The `/api/v1/player/{wallet_address}` lookup endpoint responds with a `200 OK` status in **under 300ms**.

### Step 3: Receiving & Verifying Beta Gift
*   **User Action:** On first login, acknowledge the welcome gift modal. Then, navigate to the inventory screen.
*   **Frontend Target:**
    *   **Goal:** The welcome gift is clearly communicated, and the inventory UI accurately reflects the new items.
    *   **Measurement:**
        *   **Clarity:** >99% of testers report seeing the welcome modal.
        *   **UI Accuracy:** The inventory screen correctly displays **5 Beta Eggs**.
*   **Backend Target:**
    *   **Goal:** The beta gift items are correctly and securely credited to the player's account.
    *   **Measurement:**
        *   **Data Integrity:** The backend database shows exactly 5 "Beta Egg" items correctly associated with the player's ID.

### Step 4: Core Loop - Incubating a Roninmon
*   **User Action:** Navigate to the Incubator, select a Beta Egg, and complete the hatching process.
*   **Frontend Target:**
    *   **Goal:** The incubation process is visually clear, functional, and provides correct feedback to the user.
    *   **Measurement:**
        *   **Success Rate:** >98% of incubation attempts proceed from start to finish without UI errors.
        *   **UI Accuracy:** The hatched monster correctly appears in the "Monsters" or inventory screen.
*   **Backend Target:**
    *   **Goal:** The incubation logic is processed correctly, a random monster is assigned, and the player's data is updated.
    *   **Measurement:**
        *   **Data Integrity:** The used egg is removed from the player's inventory, and a new monster record (with a randomized monster ID) is added and linked to the player. This state change is accurately reflected in the database.

### Step 5: Core Loop - Completing a Battle
*   **User Action:** Take your newly hatched monster to the Battle Arena and complete one full battle.
*   **Frontend Target:**
    *   **Goal:** A stable, responsive, and understandable battle experience.
    *   **Measurement:**
        *   **Stability:** >98% of battles are completed without freezing, crashing, or major visual glitches.
        *   **Clarity:** The battle outcome (win/loss) is clearly displayed.
*   **Backend Target:**
    *   **Goal:** Battle logic is resolved correctly on the server, and results are recorded.
    *   **Measurement:**
        *   **Data Integrity:** The battle result is correctly logged in the `battles` table, including the participating players and the outcome.

---

## 3. Known Issues

*   **Wallet Connection Redirect:** An intermittent issue exists where the wallet connection fails to redirect to the main menu.
    *   **Workaround:** Please restart the application.
    *   **Tester Action:** Report if this occurs more than once in five attempts.

---

## 4. How to Report Feedback

When you encounter an issue, please provide the following information:
*   **Feature:** (e.g., Wallet Connect, Incubation, Battle)
*   **Your Wallet Address:** (For backend log tracing)
*   **Summary of Issue:** (A brief, one-sentence description)
*   **Steps to Reproduce:** (What you did before the issue occurred)
*   **Expected Result:** (What you thought would happen)
*   **Actual Result:** (What actually happened)
*   **Supporting Media:** (Screenshots or video recordings are extremely helpful)
