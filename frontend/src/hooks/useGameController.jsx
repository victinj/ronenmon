import { useState } from 'react';

/**
  To make it even easier, you can simply start our next session with a
  phrase like:

  "Okay, let's continue with the Roninmon game controller."

  or

  "Let's pick up where we left off on the frontend MVC for Roninmon."
 */
export function useGameController() {
  // --- MODEL: The Game's State ---

  const [activeScreen, setActiveScreen] = useState('landing');
  const [player, setPlayer] = useState(null);
  
  // NEW: State to track loading and error conditions.
  // This is crucial for giving the user feedback.
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);


  // --- CONTROLLER: Functions to update the state ---

  const navigateTo = (screenName) => {
    setActiveScreen(screenName);
  };

  /**
   * Connects the user's wallet.
   * This function now simulates an asynchronous operation.
   */
  const connectWallet = () => {
    // 1. Clear any previous errors and start loading.
    setError(null);
    setIsLoading(true);
    console.log("Attempting to connect wallet...");

    // Simulate a network request (e.g., to a wallet extension)
    // This will take 1.5 seconds to complete.
    setTimeout(() => {
      try {
        // --- This is where you would put the REAL wallet logic ---
        // For example: const result = await window.ronin.connect();
        
        // For now, we'll simulate a successful connection.
        const simulatedAddress = 'ronin:d35bA91442088446629223343447D3593975b68A';
        
        if (!simulatedAddress) {
          // This is how you would handle a real error.
          throw new Error("Wallet connection failed or was rejected by the user.");
        }

        // 2. On Success: Update the player state.
        setPlayer({
          address: simulatedAddress,
          // We can truncate the address for display purposes later, in the View.
          displayAddress: `${simulatedAddress.substring(0, 6)}...${simulatedAddress.substring(simulatedAddress.length - 4)}`,
          balance: 100, // Placeholder balance
        });

        // 3. Navigate to the main menu.
        navigateTo('mainMenu');

      } catch (err) {
        // 4. On Failure: Set the error message.
        console.error(err);
        setError(err.message);
        setPlayer(null); // Ensure player is logged out on error.
      } finally {
        // 5. Stop loading, whether it succeeded or failed.
        setIsLoading(false);
      }
    }, 1500); // 1.5 second delay
  };


  // --- EXPORT: Make state and functions available ---
  return {
    // State (from our Model)
    activeScreen,
    player,
    isLoading,
    error,

    // Functions (from our Controller)
    navigateTo,
    connectWallet,
  };
}
