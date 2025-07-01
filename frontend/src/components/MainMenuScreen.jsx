import React from 'react';
import PlayerInfoCard from './PlayerInfoCard';

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
      <div className="absolute top-50px left-50px flex items-center">
        {/* Top Left Exit Button with text */}
        <button 
          id="exitBtn" 
          onClick={handleExit}
          className="group px-4 py-2 flex items-center gap-2 
                    text-white text-1-5em font-irish-grover 
                    border-none shadow-none"
        >
          <img src={exitButtonSrc} alt="Exit" 
              className="w-12 h-12 object-contain drop-shadow-icon-base"
          />
          <span>EXIT</span>
        </button>
      </div>
      <div>
        <div className='absolute top-50px right-50px flex items-center gap-50px'>
          {/* Wallet Address*/}
          <div className='flex items-center gap-10px'>
            {/* Player Wallet Info Icon (Standalone) */}
            <img src={logoWalletSrc} alt="Player Icon" className="h-11 w-11 object-contain drop-shadow-icon-base" />
            {/* Player Wallet Info Card (Text Only) */}
            <PlayerInfoCard value={walletAddress || '7wdaxsxia'} isWallet={true}/>
          </div>

          {/* Coin Resource */}
          <div className='flex items-center gap-10px'>
            {/* Resource Info Icon (Standalone) */}
            <img src={logoCoinSrc} alt="Resource Icon" className="h-11 w-11 object-contain drop-shadow-icon-base" />
            {/* Resource Info Card (Text Only) */}
            <PlayerInfoCard value={resourceCount || '0'} />
          </div>
        </div>
      </div>


      {/* UPDATED: Left Sidebar Buttons - Adjusted size, position, and removed all hovers */}
      <div className="absolute left-70px bottom-50px flex flex-col gap-20px"> {/* Adjusted position and gap */}
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
          <div className="absolute inset-sidebar-inner-inset rounded-full border-[1px] border-[#696969]
                          bg-gradient-to-t from-sidebar-inner-first to-sidebar-inner-second
                          flex justify-center items-center overflow-hidden">
            <img src={incubatorButtonSrc} alt="Incubator" 
                 className="w-[67px] h-[70px]object-contain drop-shadow-icon-base" />
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
          <div className="absolute inset-sidebar-inner-inset rounded-full border-[1px] border-[#696969]
                          bg-gradient-to-t from-sidebar-inner-first to-sidebar-inner-second
                          flex justify-center items-center overflow-hidden">
            <img src={inventoryButtonSrc} alt="Inventory" 
                 className="w-[70px] h-[70px] object-contain drop-shadow-icon-base" />
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
          <div className="absolute inset-sidebar-inner-inset rounded-full border-[1px] border-[#696969]
                          bg-gradient-to-t from-sidebar-inner-first to-sidebar-inner-second
                          flex justify-center items-center overflow-hidden">
            <img src={walletButtonSrc} alt="Wallet" 
                 className="w-[70px] h-[70px] object-contain drop-shadow-icon-base" />
          </div>
        </button>
      </div>

      {/* UPDATED: Bottom Right Play Button - Fixed arbitrary values for dimensions and positions */}
      <button 
        id="playBtn" 
        onClick={handlePlay}
        // Corrected positioning to bottom-right, explicitly canceling top/left
        className="group !absolute bottom-[50px] right-[50px] w-[300px] h-[120px] rounded-[100px] 
                   bg-gradient-to-b from-play-outer-light to-play-outer-dark 
                   border-none shadow-play-subtle-shadow 
                   relative flex justify-center items-center cursor-pointer 
                   transition-all duration-200 ease-in-out
                   hover:translate-y-3px active:translate-y-0.5
                   top-auto left-auto /* NEW: Explicitly cancel any top/left properties */
                  "
      >
        {/* Middle Rectangle */}
        <div className="absolute inset-[9px] rounded-[100px] 
                        bg-gradient-to-t from-play-middle-grad-end to-play-middle-grad-start 
                        flex justify-center items-center 
                        transition-all duration-200 ease-in-out">
          {/* Inner Box */}
          <div className="absolute inset-[8px] rounded-[100px] 
                          bg-play-inner-bg 
                          flex justify-center items-center 
                          transition-none
                          border-[3px] border-play-inner-border
                          shadow-play-inner-inset shadow-play-inner-drop 
                          ">
            {/* Play Text */}
            <span className="font-irish-grover text-3-8em text-play-text-color font-bold-[4px] text-stroke-4-black">Play</span>
          </div>
        </div>
      </button>
    </div>
  );
}

export default MainMenuScreen;