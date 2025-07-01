// src/components/MonsterScreen.jsx
import React, { useState } from 'react';
import PlayerInfoCard from './PlayerInfoCard'; // Import the new PlayerInfoCard component

// Mock data for monsters
// In a real game, this would come from an API or a local state management system
const mockMonsters = [
  { id: 'm1', name: 'Beight', image: '/assets/image/Monster/beight-monsterLogo.png', energy: 80, maxEnergy: 100, energyPerHour: 5 },
  { id: 'm2', name: 'Blustar', image: '/assets/image/Monster/blustar-monsterLogo.png', energy: 65, maxEnergy: 100, energyPerHour: 5 },
  { id: 'm3', name: 'Chillguy', image: '/assets/image/Monster/chillguy-monsterLogo.png', energy: 95, maxEnergy: 100, energyPerHour: 5 },
  { id: 'm4', name: 'Fire Heart', image: '/assets/image/Monster/fireheart-monsterLogo.png', energy: 70, maxEnergy: 100, energyPerHour: 5 },
  { id: 'm5', name: 'Smileypong', image: '/assets/image/Monster/smileypong-monsterLogo.png', energy: 50, maxEnergy: 100, energyPerHour: 5 },
  { id: 'm6', name: 'Yeppi', image: '/assets/image/Monster/yepi-monsterLogo.png', energy: 90, maxEnergy: 100, energyPerHour: 5 },
];

function MonsterScreen({ changeScreen, walletAddress, resourceCount }) {
  // State to manage the currently selected monster
  const [selectedMonster, setSelectedMonster] = useState(null);

  // Asset paths
  const backButtonSrc = '/assets/image/backLogo.png'; // Reusing the exit logo for "Back"
  const tvStaticGif = '/assets/videos/static-tv-static.gif'; // Placeholder GIF for TV static/noise
  const logoWalletSrc = '/assets/image/walletLogo.png';
  const logoCoinSrc = '/assets/image/coinLogo.png';
  const energyIconSrc = '/assets/image/energyLogo.png'

  // Handler for Back button
  const handleBack = () => {
    changeScreen('main_menu');
    console.log('Back button clicked! Returning to Main Menu.');
  };

  // Handler for monster selection
  const handleMonsterSelect = (monster) => {
    setSelectedMonster(monster);
    console.log('Monster selected:', monster.name);
  };

  // Handler for Battle button
  const handleBattle = () => {
    if (selectedMonster) {
      console.log(`Initiating battle with ${selectedMonster.name}!`);
      // Future: Navigate to battle screen, pass selectedMonster
      // changeScreen('battle_screen', selectedMonster);
    } else {
      console.log('Please select a monster to battle.');
      // Future: Show a temporary message to the user
    }
  };

  return (
    <div 
      id="monster-screen" 
      className="game-screen active flex flex-col p-5 bg-transparent"
      >
      {/* Top Section: Back button and Player Info Cards */}
      <div className="absolute top-50px left-50px flex items-center">
        {/* Back Button (Top Left) */}
        <button
          onClick={handleBack}
          className="group px-4 py-2 flex items-center gap-2 text-white text-1-5em font-irish-grover border-none shadow-none"
        >
          <img src={backButtonSrc} alt="Back" className="w-12 h-12 object-contain drop-shadow-icon-base" />
          <span>BACK</span>
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

      {/* Main Content Area: Television and Monster Selection */}
      <div className="width-[100] height-[100] flex flex-grow mt-24 mb-5 mx-auto w-[95%] max-w-[1400px] gap-60">
        {/* Left Box: Television Display - REVAMPED */}
        <div className="relative w-2/5 min-w-[400px] h-[470px] bg-gradient-to-r from-tv-bg-second to-tv-bg-first border-[6px] border-[#474747] rounded-3xl p-6 flex flex-col justify-center items-center shadow-lg">
          {/* TV Screen Area */}
          <div className="relative w-full h-[70%] bg-[#CC3470] rounded-lg overflow-hidden border-[3px] border-[#474747]">
            {selectedMonster ? (
              // Display selected monster IMAGE ONLY
              <div className="absolute inset-0 flex flex-col justify-center items-center p-4 bg-[#CC3470] text-white">
                <img src={selectedMonster.image} alt={selectedMonster.name} className="w-60 h-60 object-contain mb-4" />
              </div>
            ) : (
              // Display TV static if no monster selected
              <img src={tvStaticGif} alt="TV Static" className="w-full h-full object-cover" />
            )}
          </div>

          {/* TV Controls (Stylized - non-functional, now displays monster info) */}
          <div className="flex flex-col justify-center items-center w-full mt-6">
            {selectedMonster ? (
              // Display monster details in the grey rectangle area
              <div className="w-4/5 bg-transparent rounded-md p-4 flex flex-col items-center justify-center text-white">
                {/* Monster ID/Name */}
                <h3 className="font-irish-grover text-2em mb-2 text-white drop-shadow-lg">{selectedMonster.name}</h3>
                {/* Energy Bar */}
                <div className="w-80 bg-gray-300 rounded-full h-6 mb-2 border-[2px] border-black overflow-hidden relative">
                  <div
                    className="bg-[#CC3470] h-full"
                    style={{ width: `${(selectedMonster.energy / selectedMonster.maxEnergy) * 100}%` }}
                  ></div>
                  <img src={energyIconSrc} alt="Energy" className="w-10 h-10 object-contain mr-1" />
                  <span className="absolute inset-0 flex items-center justify-center font-bold text-sm text-black">
                    {selectedMonster.energy}/{selectedMonster.maxEnergy}
                  </span>
                </div>
                {/* Energy Per Hour */}
                <div className="flex items-center text-white text-lg font-irish-grover mt-1 text-stroke-paint-order">
                  <img src={energyIconSrc} alt="Energy" className="w-6 h-6 object-contain mr-1" />
                  <span>{selectedMonster.energyPerHour} energy/hour</span>
                </div>
              </div>
            ) : (
              // Original grey rectangle and buttons when no monster is selected
              <>
              
                
                <div className="flex gap-4 mt-4"> {/* Added margin-top for spacing */}
                  <div className="w-8 h-8 bg-[#CC3470] border-3px border-[#000000] rounded-full"></div> {/* Red Button */}
                  <div className="w-8 h-8 bg-[#59FF47] border-3px border-[#000000] rounded-full"></div> {/* Green Button */}
                </div>
                <div className="w-40 h-10 bg-[#474747] rounded-md"></div> {/* Grey Rectangle */}
              </>
            )}
          </div>
        </div>

        {/* Right Box: Monster Selection Grid */}
        <div className="flex-grow w-[400px] h-[470px] bg-monster-bg-box border-[6px] border-[#474747] rounded-3xl p-6 shadow-lg overflow-y-auto custom-scrollbar">
          <div className="grid grid-cols-5 gap-6"> {/* 5 monsters per row */}
            {mockMonsters.map((monster) => (
              <div
                key={monster.id}
                className={`
                  relative bg-gradient-to-t from-[#CC3470] to-[#661A38] p-4 flex flex-col items-center cursor-pointer
                  border-2 ${selectedMonster?.id === monster.id ? 'border-blue-500' : 'border-[#D3BF2C]'}
                  transition-all duration-200 ease-in-out
                  hover:scale-105 hover:shadow-xl h-[80px] w-[80px]
                `}
                onClick={() => handleMonsterSelect(monster)}
              >
                <img src={monster.image} alt={monster.name} className="w-20 h-20 object-contain mb-2" />
                {/* REMOVED: Monster name from here as per request */}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Right: Battle Button */}
      <div className="absolute bottom-50px right-50px flex items-center gap-50px">
        <button
          onClick={handleBattle}
          className="px-10 py-0.5 bg-[#0BA345] text-white text-2em text-stroke-1-black font-irish-grover rounded-sm-mdl 
                    cursor-pointer font-bold
                    border-[3px] border-black transition-all duration-200 ease-in-out shadow-[0px_10px_10px_rgba(0,0,0,0.56)] 
                    active:translate-y-1r"
        >
          Battle
        </button>
      </div>
    </div>
  );
}

export default MonsterScreen;