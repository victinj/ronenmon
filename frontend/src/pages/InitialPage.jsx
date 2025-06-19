import React, { useEffect } from 'react';

function InitialPage({ onNavigate, onShowWallet }) { // Added onShowWallet prop
  useEffect(() => {
    const audioEl = document.getElementById('bg-music-initial');
    if (audioEl) {
      audioEl.volume = 0.1; 
      audioEl.play().catch(error => {
        console.warn("Background music autoplay was prevented.", error);
      });
    }
  }, []);

  const handleGetRoninmon = () => {
    // For now, this might lead to a section about Roninmon, or directly to a minting page/register.
    // Let's navigate to home page as a placeholder for now, or a future "about/mint" page.
    console.log("'Get your Roninmon' button clicked");
    onNavigate('home'); // Or a future specific page like 'mint' or 'about'
  };

  const handleConnectWallet = () => {
    console.log("'Connect Wallet' button clicked on Initial Page");
    onShowWallet(); // This will trigger the WalletModal from App.jsx
  };

  // Define styles for the background image
  const fixedBackgroundStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    // width: '100vw', // Make the div cover the full viewport width
    // height: '100vh', // Make the div cover the full viewport height
    backgroundImage: `md:url('/assets/images/background5.png sm:url('/assets/images/background2.png')`,
    //backgroundSize: 'contain', // This will scale the image to cover the area, cropping if needed
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    //zIndex: -1
  };

  return (
    <div 
      //className="w-screen h-screen bg-[#0a0a1a] relative"
      className="h-screen w-screen bg-[#0a0a1a] flex flex-col items-center justify-center p-4 font-display text-starlight-white relative overflow-hidden"
    >
      {/* Fixed Background Image Element */}
      <div className='w-screen h-screen bg-fill' style={fixedBackgroundStyle}></div>
      
      {/* Background Music */}
      <audio 
        id="bg-music-initial" 
        loop 
        src="/assets/audio/galactic-battle.mp3" 
        onError={(e) => console.warn("Error loading background music.", e.target.error)}
      >
        Your browser does not support the audio element.
      </audio>

      {/* Comet/Particle Animation Layer - z-index 5 (between background and main content) */}
      {/* ACTION: You need to provide 'comet-particle.png' in `public/assets/images/` */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-[5]"> 
        {[...Array(20)].map((_, i) => ( 
          <img
            key={`comet-img-${i}`}
            src="/assets/images/9251.png" // ACTION: Provide this image
            alt="" // Decorative image
            className="absolute" // Tailwind class for absolute positioning
            style={{
              width: `${Math.random() * 10 + 5}px`, // Adjust size of particle image
              height: 'auto', // Maintain aspect ratio
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * -50}%`, 
              animation: `fall ${Math.random() * 7 + 5}s linear infinite`, // Slightly adjusted duration
              animationDelay: `${Math.random() * 12}s`, // Slightly adjusted delay
              opacity: Math.random() * 0.7 + 0.2, // Slightly adjusted opacity
              transform: 'rotate(10deg)', // Slight angle for falling comets
            }}
            onError={(e) => { e.target.style.display='none'; console.warn("Comet particle image not found.") }}
          />
        ))}
      </div>


      {/* Content container - z-index 10 (above comets) */}
      <div className="z-10 flex flex-col items-center text-center w-full max-w-lg md:max-w-2xl">
        
        {/* Logo and Subtitle Section */}
        <div className="mb-8 flex flex-col items-center">
          <img 
            src="/assets/images/logo-roninmon.png" 
            alt="RONINMON Logo" 
            className="object-contain mb-0 filter drop-shadow-[0_3px_3px_rgba(0,0,0,0.6)] hover:scale-105 transition-transform duration-300" 
            style={{ width: '805.5px', height: '254.79px' }}
            onError={(e) => { 
              e.target.onerror = null; 
              e.target.style.display='none'; 
              const fallbackText = document.createElement('h1');
              fallbackText.className = "text-7xl sm:text-8xl md:text-9xl font-bold text-starlight-white filter drop-shadow-[0_2px_1px_rgba(0,0,0,0.7)]";
              fallbackText.style.cssText = "WebkitTextStroke: 2px #A72954; color: #F9A1C9;";
              fallbackText.textContent = "RONINMON";
              e.target.parentNode.insertBefore(fallbackText, e.target.nextSibling);
            }}
          />
          <p 
            className="text-3xl sm:text-4xl text-starlight-white font-semibold mt-0 filter drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]" // Enhanced shadow
            style={{color: '#E2C2A4'}} 
            >
          </p>
        </div>
        
        {/* Action Buttons - New Layout */}
        <div className="flex flex-col items-center gap-5 mt-4"> {/* mt-4 for spacing from subtitle */}
          <button
            onClick={handleGetRoninmon}
            
            className="flex items-center justify-center text-[34px] text-white  bg-[#0b6da3] hover:bg-[#2d437a] 
                       w-[357px] h-[84px] p-5 rounded-[20px] border-[4px] border-[#000000] hover:border-[#1e2d50] 
                       shadow-[0px_14px_3.1px_0px_#0000008F]
                       transition-all duration-300 ease-in-out transform hover:scale-105"
            // Added w-full and max-width
          >
            Get your Roninmon
          </button>
          <button
            onClick={handleConnectWallet}
            //className="px-10 py-3 text-xl sm:text-2xl text-white bg-[#d3bf2c] hover:bg-[#e9ca59] font-semibold rounded-md shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105 border-2 border-[#000000] hover:border-[#d4b648] w-full max-w-xs sm:max-w-sm" // Added w-full and max-width
            className="flex items-center justify-center text-[34px] text-white bg-[#d3bf2c] hover:bg-[#e9ca59] 
                       w-[279px] h-[84px] p-5 rounded-[20px] border-[4px] border-[#000000] hover:border-[#d4b648]
                       shadow-[0px_14px_3.1px_0px_#0000008F]
                       transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            Connect Wallet
          </button>
        </div>
      </div>
    </div>
  );
}
export default InitialPage;