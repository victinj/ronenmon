import React from 'react';
import { useGameController } from './hooks/useGameController';

import LandingScreen from './components/LandingScreen';
import MainMenuScreen from './components/MainMenuScreen';
import MonsterScreen from './components/MonsterScreen';
// Other screen imports can be added here as we connect them
// import InventoryScreen from './components/InventoryScreen';
// import IncubatorScreen from './components/IncubatorScreen';
// import WalletScreen from './components/WalletScreen';

function App() {
  // All our logic and state now comes from our single controller hook.
  // Look how much cleaner this is!
  const {
    activeScreen,
    player,
    navigateTo,
    connectWallet,
  } = useGameController();

  // This function acts as a "router" to decide which screen to display.
  const renderScreen = () => {
    switch (activeScreen) {
      case 'landing':
        return <LandingScreen onConnectWallet={connectWallet} />;
      case 'mainMenu':
        return <MainMenuScreen player={player} navigateTo={navigateTo} />;
      case 'monster':
        return <MonsterScreen player={player} navigateTo={navigateTo} />;
      // Add cases for other screens here as you build them
      // case 'inventory':
      //   return <InventoryScreen />;
      default:
        // If the screen name is unknown, default to the landing screen.
        return <LandingScreen onConnectWallet={connectWallet} />;
    }
  };

  return (
    <div className="relative w-full h-full">
      {renderScreen()}
      {/* The WalletModal could be managed by the controller in the future too */}
    </div>
  );
}

export default App;
