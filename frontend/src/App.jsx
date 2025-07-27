import React, { useState } from 'react';
import { useGameController } from './hooks/useGameController';

import LandingScreen from './components/LandingScreen';
import MainMenuScreen from './components/MainMenuScreen';
import MonsterScreen from './components/MonsterScreen';
// Other screen imports can be added here as we connect them
import InventoryScreen from './components/InventoryScreen';
import IncubatorScreen from './components/IncubatorScreen';
import WalletScreen from './components/WalletScreen';
import { BrowserRouter, Route } from 'react-router-dom';
import DepositScreen from './components/DepositScreen';
import WithdrawScreen from './components/WithdrawScreen';
import BattleScreen from './components/BattleScreen';

export const Routes = {
  landing: "landing",
  mainMenu: "mainMenu",
  monster: "monster",
  inventory: "inventory",
  incubator: "incubator",
  wallet: "wallet",
  deposit: "deposit",
  withdraw: "withdraw",
  battle: "battle"
}

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
      case Routes.landing:
        return <LandingScreen onConnectWallet={connectWallet} navigateTo={navigateTo} />;
      case Routes.mainMenu:
        return <MainMenuScreen player={player} navigateTo={navigateTo} />;
      case Routes.monster:
        return <MonsterScreen player={player} navigateTo={navigateTo} />;
      case Routes.inventory:
        return <InventoryScreen player={player} navigateTo={navigateTo} />;
      case Routes.incubator:
        return <IncubatorScreen player={player} navigateTo={navigateTo} />;
      case Routes.wallet:
        return <WalletScreen player={player} navigateTo={navigateTo} />;
      case Routes.deposit:
        return <DepositScreen player={player} navigateTo={navigateTo} />;
      case Routes.withdraw:
        return <WithdrawScreen player={player} navigateTo={navigateTo} />;
      case Routes.battle:
        return <BattleScreen player={player} navigateTo={navigateTo} />;
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
