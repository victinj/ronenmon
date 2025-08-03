import { useState } from 'react';
import { Routes } from '../App';
import { Route } from 'react-router-dom';

/**
  To make it even easier, you can simply start our next session with a
  phrase like:

  "Okay, let's continue with the Roninmon game controller."

  or

  "Let's pick up where we left off on the frontend MVC for Roninmon."
 */
export function useGameController() {
  // --- MODEL: The Game's State ---

  const [activeScreen, setActiveScreen] = useState(Routes.landing);
  const [player, setPlayer] = useState(null);

  // NEW: State to track loading and error conditions.
  // This is crucial for giving the user feedback.
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);


  // --- CONTROLLER: Functions to update the state ---

  const navigateTo = (screenName) => {
    console.log("active screen:", screenName)
    setActiveScreen(screenName);
  };

  /**
   * Connects the user's wallet.
   * This function now simulates an asynchronous operation.
   */
  const connectWallet = async (walletAddress) => {
    if (!walletAddress) return;

    setError(null);
    setIsLoading(true);
    console.log(`Wallet connected: ${walletAddress}. Fetching player data...`);

    try {
      const response = await fetch(`http://localhost:8000/api/v1/player/${walletAddress}`);
      
      if (!response.ok) {
        throw new Error(`Failed to fetch player data. Status: ${response.status}`);
      }

      const playerData = await response.json();

      setPlayer({
        ...playerData,
        displayAddress: `${playerData.wallet_address.substring(0, 6)}...${playerData.wallet_address.substring(playerData.wallet_address.length - 4)}`,
      });

      navigateTo(Routes.mainMenu);

    } catch (err) {
      console.error(err);
      setError(err.message);
      setPlayer(null);
    } finally {
      setIsLoading(false);
    }
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
