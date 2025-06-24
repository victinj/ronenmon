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
        className="group absolute top-20px left-70px px-4 py-2 flex items-center gap-2 
                   text-white text-base font-irish-grover 
                   border-none shadow-none transition-all duration-200 ease-in-out
                   hover:translate-y-3px active:translate-y-6px"
      >
        <img src={exitButtonSrc} alt="Exit" 
             className="w-10 h-10 object-contain drop-shadow-icon-base
                        transition-filter duration-200 ease-in-out
                        group-hover:brightness-130 group-active:brightness-70"
        />
        <span className="font-irish-grover text-1-4em">EXIT</span>
      </button>

      {/* Top Right Info Group */}
      <div className="absolute top-30px right-20px flex items-center gap-60px">
        {/* Player Wallet Info Card */}
        <div className="px-10px py-3px rounded-md-card bg-game-card-bg border-5 border-game-card-border shadow-[0_2px_5px_rgba(0,0,0,0.4)] text-black flex items-center gap-5px font-irish-grover text-1-2em min-w-[150px] justify-center">
          <img src={logoWalletSrc} alt="Player Icon" className="h-7 w-7 object-contain" />
          <span id="walletAddress">{walletAddress || '7wdaxsxia'}</span>
        </div>
        {/* Resource Info Card */}
        <div className="px-10px py-3px rounded-md-card bg-game-card-bg border-5 border-game-card-border shadow-[0_2px_5px_rgba(0,0,0,0.4)] text-black flex items-center gap-5px font-irish-grover text-1-2em w-[150px] h-auto justify-center">
          <img src={logoCoinSrc} alt="Resource Icon" className="h-7 w-7 object-contain" />
          <span id="resourceCount">{resourceCount || '200'}</span>
        </div>
      </div>

      {/* UPDATED: Left Sidebar Buttons - Now with Outer/Inner Circle structure */}
      <div className="absolute left-75px bottom-[-120px] transform -translate-y-1/2 flex flex-col gap-40px">
        {/* Incubator Button */}
        <button 
          id="incubatorBtn" 
          onClick={handleIncubator}
          // Outer circle: Fixed size, rounded-full, base transparent, border, shadow
          // Added 'group' class for inner element hover effects
          className="group relative w-60px h-60px p-0 rounded-full 
                     bg-gradient-to-t from-sidebar-inner-second to-sidebar-inner-first shadow-sidebar-btn-base 
                     flex justify-center items-center cursor-pointer transition-all duration-200 ease-in-out 
                     hover:translate-y-0.5 hover:shadow-sidebar-btn-hover 
                     active:translate-y-1.5 active:shadow-sidebar-btn-active"
        >
          {/* Inner Circle: Inset, rounded-full, default background, flex for logo centering */}
          <div className="absolute inset-sidebar-inner-inset rounded-full 
                          bg-gradient-to-t from-sidebar-inner-first to-sidebar-inner-second
                          flex justify-center items-center overflow-hidden
                          transition-colors duration-200 ease-in-out
                          group-hover:bg-[#3498db] group-active:bg-[#2980b9]">
            <img src={incubatorButtonSrc} alt="Incubator" 
                 className="w-70% h-70% object-contain drop-shadow-icon-base
                            transition-filter duration-200 ease-in-out
                            group-hover:brightness-130 group-active:brightness-70" />
          </div>
        </button>

        {/* Inventory Button */}
        <button 
          id="inventoryBtn" 
          onClick={handleInventory}
          className="group relative w-60px h-60px p-0 rounded-full 
                     bg-gradient-to-t from-sidebar-inner-second to-sidebar-inner-first shadow-sidebar-btn-base 
                     flex justify-center items-center cursor-pointer transition-all duration-200 ease-in-out 
                     hover:translate-y-0.5 hover:shadow-sidebar-btn-hover 
                     active:bg-[#2980b9] active:translate-y-1.5 active:shadow-sidebar-btn-active"
        >
          <div className="absolute inset-sidebar-inner-inset rounded-full 
                          bg-gradient-to-t from-sidebar-inner-first to-sidebar-inner-second
                          flex justify-center items-center overflow-hidden
                          transition-colors duration-200 ease-in-out
                          group-hover:bg-[#3498db] group-active:bg-[#2980b9]">
            <img src={inventoryButtonSrc} alt="Inventory" 
                 className="w-70% h-70% object-contain drop-shadow-icon-base
                            transition-filter duration-200 ease-in-out
                            group-hover:brightness-130 group-active:brightness-70" />
          </div>
        </button>

        {/* Wallet Button */}
        <button 
          id="walletPageSidebarBtn" 
          onClick={handleWalletPage}
          className="group relative w-60px h-60px p-0 rounded-full 
                     bg-gradient-to-t from-sidebar-inner-second to-sidebar-inner-first 
                     shadow-sidebar-btn-base 
                     flex justify-center items-center cursor-pointer transition-all duration-200 ease-in-out 
                     hover:translate-y-0.5 hover:shadow-sidebar-btn-hover 
                     active:bg-[#2980b9] active:translate-y-1.5 active:shadow-sidebar-btn-active"
        >
          <div className="absolute inset-sidebar-inner-inset rounded-full 
                          bg-gradient-to-t from-sidebar-inner-first to-sidebar-inner-second
                          flex justify-center items-center overflow-hidden
                          transition-colors duration-200 ease-in-out
                          group-hover:bg-[#3498db] group-active:bg-[#2980b9]">
            <img src={walletButtonSrc} alt="Wallet" 
                 className="w-100% h-100% object-contain drop-shadow-icon-base
                            transition-filter duration-200 ease-in-out
                            group-hover:brightness-130 group-active:brightness-70" />
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