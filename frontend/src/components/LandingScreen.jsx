import React, { useState } from 'react';
import { useGameController } from '../hooks/useGameController';
import WalletModal from './WalletModal';
import { Routes } from '../App';

function LandingScreen({ navigateTo }) {
  const roninmonLogoSrc = '/assets/image/roninmon-trademarkLogo.png';
  const controller = useGameController()
  const [open, setOpen] = useState(false)
  const handleGetRoninmon = () => {
    // This will eventually navigate to your "Under Construction" page or OpenSea
    console.log("Get your Roninmon button clicked (React)!");
    // For now, let's simulate going to a main menu state for testing React navigation
    // changeScreen('main_menu'); // This assumes you'll build a MainMenuScreen component later
    navigateTo(Routes.mainMenu)
  };

  const handleConnectWallet = () => {
    console.log("Connect Wallet button clicked (React)! Connecting to Ronin Network");
    // This will eventually open your React WalletModal component
    // alert("Wallet modal placeholder for Ronin connection in React!");
    // openWalletModal(); // This assumes you'll pass openWalletModal from App.jsx
    setOpen(!open)
  };

  return (
    <div
      id="landing-screen"
      className="game-screen active flex flex-col justify-center items-center bg-black/[0.2]"
    >
      <img
        src={roninmonLogoSrc}
        alt="Roninmon Logo"
        className="max-w-[40%] h-auto mb-5 drop-shadow-[0_0_10px_rgba(0,0,0,0.7)] 
                   transition-transform duration-300 ease-out 
                   hover:scale-[1.03] hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.6)] hover:drop-shadow-[0_0_25px_rgba(255,255,255,0.8)] 
                   cursor-pointer"
      />

      <button
        onClick={handleGetRoninmon}
        className="px-3 py-2 my-2 border-[3px] border-black rounded-xl text-1-8em cursor-pointer 
                   transition-all duration-200 ease-in-out shadow-[0px_10px_10px_rgba(0,0,0,0.56)] 
                   active:shadow-[inset_0px_3px_6px_rgba(0,0,0,0.43)] active:translate-y-1 
                   bg-[#0B6DA3] text-white flex items-center justify-center gap-2"
      >
        Get your Roninmon
      </button>

      <button
        onClick={handleConnectWallet}
        // Applying Tailwind classes from your old .game-button and .game-button.secondary CSS
        className="px-3 py-2 my-2 border-[3px] border-black rounded-xl text-1-8em cursor-pointer 
                   transition-all duration-200 ease-in-out shadow-[0px_10px_10px_rgba(0,0,0,0.56)] 
                   active:shadow-[inset_0px_3px_6px_rgba(0,0,0,0.43)] active:translate-y-1 
                   bg-[#D3BF2C] text-white flex items-center justify-center gap-2"
      >
        Connect Wallet
      </button>
      <WalletModal isOpen={open} onClose={() => { setOpen(!open) }} />
    </div>
  );
}

export default LandingScreen;
