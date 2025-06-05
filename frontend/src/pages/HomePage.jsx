import React, { useState, useEffect } from 'react';

// Placeholder for Icon components or direct SVG/img usage
const Icon = ({ src, alt, className = "w-8 h-8", iconClassName = "" }) => (
  <img 
    src={src} 
    alt={alt} 
    className={`${className} ${iconClassName} inline-block object-contain`} 
    onError={(e) => { e.target.style.display='none'; console.warn(`Icon not found: ${src}`)}} 
  />
);


function HomePage({ onNavigate, onShowWallet, connectedWalletAddress }) {
  const [currency, setCurrency] = useState(200); // Example currency state

  const homePageStyle = {
    // ACTION: Replace 'home-page-bg.jpg' with your actual background image file name.
    // Make sure the image is in `frontend/public/assets/images/home-page-bg.jpg`
    position: 'fixed',
    width: '1920px',
    height: '1080px', 
    backgroundImage: `url('/assets/images/background4.png')`,
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  const handleExit = () => {
    onNavigate('initial'); 
  }

  // Styles for the buttons based on your specifications
  const bagWalletButtonStyle = "w-[125px] h-[125px] rounded-full border-[4px] flex items-center justify-center transition-transform duration-150 hover:scale-110 backdrop-blur-sm";
  const monsterBattleButtonStyle = "w-[523px] h-[169px] border-t-[5px] border-r-[5px] border-b-[5px] border-l-0 rounded-r-2xl flex items-center justify-center gap-4 text-3xl font-bold text-starlight-white shadow-xl transition-transform duration-150 hover:scale-105 backdrop-blur-sm";
  // Note: rounded-r-2xl and border-l-0 attempts to mimic the tab style. Adjust as needed.

  return (
    <div 
      style={homePageStyle}
      className="min-h-screen w-screen flex flex-col font-display text-starlight-white relative overflow-hidden p-5 sm:p-8" // Added padding to main container
    >
      {/* Header Section - Positioned absolutely at the top */}
      <header className="w-full flex justify-between items-center absolute top-5 left-0 px-5 sm:px-8 z-20">
        {/* Exit Button */}
        <button 
          onClick={handleExit}
          className="bg-rgba(255, 255, 255, .4) hover:bg-rgba(255, 255, 255, .4) text-white font-bold shadow-md flex items-center gap-2 transition-transform duration-150 hover:scale-105"
        >
          <Icon src="/assets/images/exit-button.png" alt="Exit" className="w-100 h-100" />
        </button>

        <div className="flex items-center gap-3 sm:gap-4">
          {/* Wallet Address Display */}
          {connectedWalletAddress && (
            <div className="bg-black/60 backdrop-blur-sm text-sm text-starlight-white py-2 px-4 rounded-lg shadow-md flex items-center gap-2 border border-gray-500">
              <Icon src="/assets/images/wallet-icons.png" alt="Wallet" className="w-5 h-5" />
              {connectedWalletAddress.substring(0, 6)}...{connectedWalletAddress.substring(connectedWalletAddress.length - 4)}
            </div>
          )}

          {/* Currency Display */}
          <div className="bg-black/60 backdrop-blur-sm text-starlight-white py-2 px-4 rounded-lg shadow-md flex items-center gap-2 border border-yellow-500">
            <Icon src="/assets/images/coin-icons.png" alt="Coins" className="w-7 h-7" />
            <span className="font-semibold text-xl">{currency}</span>
          </div>
        </div>
      </header>

      {/* Main content area for background visibility - This div is mostly for spacing if needed */}
      <div className="flex-grow"></div>


      {/* Navigation Buttons - Positioned absolutely at the bottom */}
      <footer className="w-full flex justify-between items-end absolute bottom-5 left-0 px-5 sm:px-8 z-20">
        {/* Left Buttons (Bag, Wallet) */}
        <div className="flex flex-col items-center gap-4"> {/* gap-4 for spacing between button and text */}
          <div className="flex flex-col items-center">
            <button 
              onClick={() => console.log("Bag clicked")}
              className={`${bagWalletButtonStyle} bg-green-500/80 hover:bg-green-600/90 border-green-300`}
              aria-label="Bag"
            >
              <Icon src="/assets/icons/bag-icon.png" alt="Bag" className="w-16 h-16" /> {/* Larger icon */}
            </button>
            <span className="mt-2 text-xl font-semibold text-starlight-white filter drop-shadow-sm">Bag</span>
          </div>
          <div className="flex flex-col items-center">
            <button 
              onClick={onShowWallet}
              className={`${bagWalletButtonStyle} bg-orange-500/80 hover:bg-orange-600/90 border-orange-300`}
              aria-label="Wallet"
            >
              <Icon src="/assets/icons/wallet-icon.png" alt="Wallet" className="w-16 h-16" /> {/* Larger icon */}
            </button>
            <span className="mt-2 text-xl font-semibold text-starlight-white filter drop-shadow-sm">Wallet</span>
          </div>
        </div>

        {/* Right Buttons (Monster, Battle) */}
        <div className="flex flex-col gap-4"> {/* gap-4 for spacing between buttons */}
          <button 
            onClick={() => console.log("Monster clicked")}
            className={`${monsterBattleButtonStyle} bg-[#0B6DA3] hover:bg-[#0B6DA3] border-black rounded-l-2xl`} // Added rounded-l-2xl
          >
            <Icon src="/assets/images/Frame 5.png" alt="Monster Icon" className="w-40 h-40" /> {/* Larger icon */}
         
          </button>
          <button 
            onClick={() => console.log("Battle clicked")}
            className={`${monsterBattleButtonStyle} bg-linear-gradient(180deg, #661A38 0%, #AD2C5F 60.58%, #CC3470 100%) hover:bg-linear-gradient(180deg, #661A38 0%, #AD2C5F 60.58%, #CC3470 100%) border-black rounded-l-2xl`} // Added rounded-l-2xl
          >
            <Icon src="/assets/images/Frame 6.png" alt="Battle Icon" className="w-40 h-40" /> {/* Larger icon */}
            
          </button>
        </div>
      </footer>
    </div>
  );
}
export default HomePage;