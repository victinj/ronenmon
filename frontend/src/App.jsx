import React, { useState } from 'react';
import LandingScreen from './components/LandingScreen';
import WalletModal from './components/WalletModal';
import MainMenuScreen from './components/MainMenuScreen'; // NEW: Import your MainMenuScreen component
// Other screen imports will go here later
// import InventoryScreen from './components/InventoryScreen';
// import MonsterPageScreen from './components/MonsterPageScreen';
// import IncubatorPageScreen from './components/IncubatorPageScreen';
// import WalletPageScreen from './components/WalletPageScreen';


function App() {
  const [gameState, setGameState] = useState('landing'); 
  const [isWalletModalOpen, setIsWalletModalOpen] = useState(false); 
  const [connectedAccount, setConnectedAccount] = useState(null); 
  const [walletProvider, setWalletProvider] = useState(null); 

  // NEW: State for player name/wallet address and resource count (globally managed)
  const [displayWalletAddress, setDisplayWalletAddress] = useState('7wdaxsxia'); 
  const [displayResourceCount, setDisplayResourceCount] = useState('200');

  const changeScreen = (newState) => {
    setGameState(newState);
    console.log(`Game state changed to: ${newState}`); 
    if (newState !== 'landing' && isWalletModalOpen) {
        setIsWalletModalOpen(false); // Close modal if navigating away from landing
    }
  };

  const openWalletModal = () => setIsWalletModalOpen(true);
  const closeWalletModal = () => setIsWalletModalOpen(false);

  const handleWalletConnected = (account, provider) => {
      setConnectedAccount(account);
      setWalletProvider(provider);
      // Update the display address and resource (simulated for now)
      setDisplayWalletAddress(`${account.substring(0, 6)}...${account.substring(account.length - 4)}`);
      setDisplayResourceCount('500'); // Example: Give more resources on connection
      console.log("Wallet connected in App.jsx:", account);
      // Automatically transition to Main Menu after connection
      changeScreen('main_menu'); 
  };

  const handleWalletDisconnected = () => {
      setConnectedAccount(null);
      setWalletProvider(null);
      // Reset display info on disconnect
      setDisplayWalletAddress('7wdaxsxia');
      setDisplayResourceCount('200');
      console.log("Wallet disconnected from App.jsx");
      changeScreen('landing'); // Go back to landing on disconnect
  };

  return (
    <div className="relative w-full h-full"> 
      {gameState === 'landing' && (
        <LandingScreen 
          changeScreen={changeScreen} 
          openWalletModal={openWalletModal} 
        />
      )}
      
      {/* NEW: Render MainMenuScreen */}
      {gameState === 'main_menu' && (
        <MainMenuScreen 
          changeScreen={changeScreen} 
          walletAddress={displayWalletAddress} 
          resourceCount={displayResourceCount} 
        />
      )}

      {/* Wallet Modal */}
      <WalletModal 
        isOpen={isWalletModalOpen} 
        onClose={closeWalletModal} 
        onWalletConnected={handleWalletConnected} 
        onWalletDisconnected={handleWalletDisconnected} // Pass disconnect handler to modal if needed
      />
    </div>
  );
}

export default App;