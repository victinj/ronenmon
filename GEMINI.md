## Gemini Development History

This document tracks the development progress and context for the Roninmon project when using Gemini.

### July 17, 2025

**Goal:** Refactor the Roninmon frontend to be responsive and implement an MVC-like architecture.

**Progress:**

1.  **Architecture (MVC-like Pattern):**
    *   Introduced a `useGameController` hook to act as a central controller, managing game state (`activeScreen`, `player`) and core logic (`navigateTo`, `connectWallet`).
    *   Refactored all major screen components to be "controlled" by `useGameController`. This involved updating the following files to receive and use the `player` object and `navigateTo` function as props:
        *   `MainMenuScreen.jsx`
        *   `MonsterScreen.jsx`
        *   `IncubatorScreen.jsx`
    *   Created placeholder components for `InventoryScreen.jsx` and `WalletScreen.jsx` so they could be integrated into the navigation flow.
    *   Updated `App.jsx` to act as a router, rendering the correct screen component based on the `activeScreen` state from the controller.

2.  **UI/Responsiveness:**
    *   The `LandingScreen.jsx` component was previously made responsive.

**Next Steps:**

*   Continue the responsiveness refactoring for the remaining screens, starting with `MainMenuScreen.jsx`.
*   Begin implementing the actual features and UI for the placeholder screens (`InventoryScreen.jsx`, `WalletScreen.jsx`).
*   Continue to move any remaining local state and logic into the `useGameController` as appropriate.