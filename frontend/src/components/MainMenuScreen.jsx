import React from 'react';

function MainMenuScreen({ changeScreen, walletAddress, resourceCount }) {
  // Asset paths (ensure these are in your public/assets folder)
  const exitButtonSrc = '/assets/image/exitLogo.png';
  const logoWalletSrc = '/assets/image/walletLogo.png';
  const logoCoinSrc = '/assets/image/coinLogo.png';
  const incubatorButtonSrc = '/assets/image/incubatorLogo.png';
  const inventoryButtonSrc = '/assets/image/inventoryLogo.png';
  const walletButtonSrc = '/assets/image/wallet-woshadowLogo.png';

  // Handlers for button clicks
  const handleExit = () => {
    console.log('EXIT button clicked! Returning to Landing Screen.');
    changeScreen('landing');
  };

  const handleIncubator = () => {
    console.log('Incubator button clicked!');
    changeScreen('incubator_page');
  };

  const handleInventory = () => {
    console.log('Inventory button clicked! Transitioning to Inventory Screen.');
    changeScreen('inventory'); // This is your Actual Inventory Page now
  };

  const handleWalletPage = () => {
    console.log('Wallet Page sidebar button clicked! Transitioning to Wallet Page.');
    changeScreen('wallet_page'); // This is your Wallet Page placeholder
  };

  const handlePlay = () => {
    console.log('PLAY button clicked! Transitioning to Monster Page for selection.');
    changeScreen('monster_page'); // This is your Monster Selection Page
  };

  return (
<div 
      id="main-menu-screen" 
      className="game-screen active bg-transparent block p-0" 
    >
      {/* Top-Left EXIT button with text */}
      <button 
        id="exitBtn" 
        onClick={handleExit}
        // UPDATED: Removed hover/active classes and transition
        className="group absolute top-20px left-70px px-4 py-2 flex items-center gap-2 
                   text-white text-base font-irish-grover 
                   border-none shadow-none"
      >
        <img src={exitButtonSrc} alt="Exit" 
             // UPDATED: Removed hover/active classes and transition
             className="w-10 h-10 object-contain drop-shadow-icon-base"
        />
        <span>EXIT</span>
      </button>

      {/* UPDATED: Top Right Info Group - Logos outside cards */}
      <div className="absolute top-30px right-20px flex items-center gap-10px"> {/* Reduced gap for 4 items */}
        {/* Player Wallet Info Icon (Standalone) */}
        <img src={logoWalletSrc} alt="Player Icon" className="h-7 w-7 object-contain drop-shadow-icon-base" />
        {/* Player Wallet Info Card (Text Only) */}
        <div className="px-10px py-3px rounded-md-card bg-game-card-bg border-5 border-game-card-border shadow-[0_2px_5px_rgba(0,0,0,0.4)] text-black flex items-center justify-center font-irish-grover text-1-2em min-w-[150px]"> {/* Removed gap */}
          <span id="walletAddress">{walletAddress || '7wdaxsxia'}</span>
        </div>
        {/* Resource Info Icon (Standalone) */}
        <img src={logoCoinSrc} alt="Resource Icon" className="h-7 w-7 object-contain drop-shadow-icon-base" />
        {/* Resource Info Card (Text Only) */}
        <div className="px-10px py-3px rounded-md-card bg-game-card-bg border-5 border-game-card-border shadow-[0_2px_5px_rgba(0,0,0,0.4)] text-black flex items-center justify-center font-irish-grover text-1-2em w-[150px] h-auto"> {/* Removed gap */}
          <span id="resourceCount">{resourceCount || '200'}</span>
        </div>
      </div>

      {/* UPDATED: Left Sidebar Buttons - Adjusted size, position, and removed all hovers */}
      <div className="absolute left-20px bottom-20px flex flex-col gap-20px"> {/* Adjusted position and gap */}
        {/* Incubator Button */}
        <button 
          id="incubatorBtn" 
          onClick={handleIncubator}
          // UPDATED: Sidebar button dimensions and removed all hovers and transitions
          className="group relative w-sidebar-btn-w h-sidebar-btn-h p-0 rounded-full 
                     bg-gradient-to-t from-sidebar-inner-second to-sidebar-inner-first shadow-sidebar-btn-base 
                     flex justify-center items-center cursor-pointer"
        >
          {/* Inner Circle */}
          <div className="absolute inset-sidebar-inner-inset rounded-full 
                          bg-gradient-to-t from-sidebar-inner-first to-sidebar-inner-second
                          flex justify-center items-center overflow-hidden">
            <img src={incubatorButtonSrc} alt="Incubator" 
                 className="w-[60px] h-[60px]object-contain drop-shadow-icon-base" />
          </div>
        </button>

        {/* Inventory Button */}
        <button 
          id="inventoryBtn" 
          onClick={handleInventory}
          className="group relative w-sidebar-btn-w h-sidebar-btn-h p-0 rounded-full 
                     bg-gradient-to-t from-sidebar-inner-second to-sidebar-inner-first shadow-sidebar-btn-base 
                     flex justify-center items-center cursor-pointer"
        >
          <div className="absolute inset-sidebar-inner-inset rounded-full 
                          bg-gradient-to-t from-sidebar-inner-first to-sidebar-inner-second
                          flex justify-center items-center overflow-hidden">
            <img src={inventoryButtonSrc} alt="Inventory" 
                 className="w-[60px] h-[60px] object-contain drop-shadow-icon-base" />
          </div>
        </button>

        {/* Wallet Button */}
        <button 
          id="walletPageSidebarBtn" 
          onClick={handleWalletPage}
          className="group relative w-sidebar-btn-w h-sidebar-btn-h p-0 rounded-full 
                     bg-gradient-to-t from-sidebar-inner-second to-sidebar-inner-first 
                     shadow-sidebar-btn-base 
                     flex justify-center items-center cursor-pointer"
        >
          <div className="absolute inset-sidebar-inner-inset rounded-full 
                          bg-gradient-to-t from-sidebar-inner-first to-sidebar-inner-second
                          flex justify-center items-center overflow-hidden">
            <img src={walletButtonSrc} alt="Wallet" 
                 className="w-[50px] h-[50px] object-contain drop-shadow-icon-base" />
          </div>
        </button>
      </div>

      {/* UPDATED: Bottom Right Play Button - Fixed arbitrary values for dimensions and positions */}
      <button 
        id="playBtn" 
        onClick={handlePlay}
        // Corrected positioning to bottom-right, explicitly canceling top/left
        className="group !absolute bottom-[10px] right-[100px]  w-[250px] h-[100px] rounded-[100px] 
                   bg-gradient-to-b from-play-outer-light to-play-outer-dark 
                   border-none shadow-play-subtle-shadow 
                   relative flex justify-center items-center cursor-pointer 
                   transition-all duration-200 ease-in-out
                   hover:translate-y-3px active:translate-y-0.5
                   top-auto left-auto /* NEW: Explicitly cancel any top/left properties */
                  "
      >
        {/* Middle Rectangle */}
        <div className="absolute inset-[7px] rounded-[100px] 
                        bg-gradient-to-t from-play-middle-grad-end to-play-middle-grad-start 
                        flex justify-center items-center 
                        transition-all duration-200 ease-in-out">
          {/* Inner Box */}
          <div className="absolute inset-[7px] rounded-[100px] 
                          bg-play-inner-bg 
                          flex justify-center items-center 
                          transition-all duration-200 ease-in-out 
                          shadow-play-inner-inset shadow-play-inner-drop 
                          group-hover:translate-y-[-2px] group-hover:shadow-lg group-hover:shadow-play-inner-drop
                          group-active:translate-y-[1px] group-active:shadow-play-inner-active">
            {/* Play Text */}
            <span className="font-irish-grover text-4em text-play-text-color">Play</span>
          </div>
        </div>
      </button>
    </div>
  );
}

export default MainMenuScreen;