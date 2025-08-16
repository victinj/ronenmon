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
  { id: 'm6', name: 'Yeppi', image: '/assets/image/Monster/yepi-monsterLogo.png', energy: 90, maxEnergy: 100, energyPerHour: 5 },
  { id: 'm6', name: 'Yeppi', image: '/assets/image/Monster/yepi-monsterLogo.png', energy: 90, maxEnergy: 100, energyPerHour: 5 },
  { id: 'm6', name: 'Yeppi', image: '/assets/image/Monster/yepi-monsterLogo.png', energy: 90, maxEnergy: 100, energyPerHour: 5 },
  { id: 'm6', name: 'Yeppi', image: '/assets/image/Monster/yepi-monsterLogo.png', energy: 90, maxEnergy: 100, energyPerHour: 5 },
  { id: 'm6', name: 'Yeppi', image: '/assets/image/Monster/yepi-monsterLogo.png', energy: 90, maxEnergy: 100, energyPerHour: 5 },
  { id: 'm6', name: 'Yeppi', image: '/assets/image/Monster/yepi-monsterLogo.png', energy: 90, maxEnergy: 100, energyPerHour: 5 },
  { id: 'm6', name: 'Yeppi', image: '/assets/image/Monster/yepi-monsterLogo.png', energy: 90, maxEnergy: 100, energyPerHour: 5 },
  { id: 'm6', name: 'Yeppi', image: '/assets/image/Monster/yepi-monsterLogo.png', energy: 90, maxEnergy: 100, energyPerHour: 5 },
  { id: 'm6', name: 'Yeppi', image: '/assets/image/Monster/yepi-monsterLogo.png', energy: 90, maxEnergy: 100, energyPerHour: 5 },
  { id: 'm6', name: 'Yeppi', image: '/assets/image/Monster/yepi-monsterLogo.png', energy: 90, maxEnergy: 100, energyPerHour: 5 },
  { id: 'm6', name: 'Yeppi', image: '/assets/image/Monster/yepi-monsterLogo.png', energy: 90, maxEnergy: 100, energyPerHour: 5 },
  { id: 'm6', name: 'Yeppi', image: '/assets/image/Monster/yepi-monsterLogo.png', energy: 90, maxEnergy: 100, energyPerHour: 5 },
  { id: 'm6', name: 'Yeppi', image: '/assets/image/Monster/yepi-monsterLogo.png', energy: 90, maxEnergy: 100, energyPerHour: 5 },
  { id: 'm6', name: 'Yeppi', image: '/assets/image/Monster/yepi-monsterLogo.png', energy: 90, maxEnergy: 100, energyPerHour: 5 },
  { id: 'm6', name: 'Yeppi', image: '/assets/image/Monster/yepi-monsterLogo.png', energy: 90, maxEnergy: 100, energyPerHour: 5 },
  { id: 'm6', name: 'Yeppi', image: '/assets/image/Monster/yepi-monsterLogo.png', energy: 90, maxEnergy: 100, energyPerHour: 5 },
  { id: 'm6', name: 'Yeppi', image: '/assets/image/Monster/yepi-monsterLogo.png', energy: 90, maxEnergy: 100, energyPerHour: 5 },
  { id: 'm6', name: 'Yeppi', image: '/assets/image/Monster/yepi-monsterLogo.png', energy: 90, maxEnergy: 100, energyPerHour: 5 },
  { id: 'm6', name: 'Yeppi', image: '/assets/image/Monster/yepi-monsterLogo.png', energy: 90, maxEnergy: 100, energyPerHour: 5 },
];

function MonsterScreen({ player, navigateTo }) {
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
    navigateTo('mainMenu');
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
    <div className='grid-cols-2 gap-[200px] flex h-full'>
      <div className='w-full grid-row-3 mt-5 ml-8'>
        <div className='h-20'>
          <div className="top-50px left-50px flex items-center">
            {/* Back Button (Top Left) */}
            <button
              onClick={handleBack}
              className="group px-4 py-2 flex items-center gap-2 text-white text-1-5em font-irish-grover border-none shadow-none"
            >
              <img src={backButtonSrc} alt="Back" className="w-12 h-12 object-contain drop-shadow-icon-base" />
              <span>BACK</span>
            </button>
          </div>
        </div>
        <div className='relative h-3/4'>
          <div className='h-full'>
            {/* Tv Display */}
            <div className='relative w-full h-full bg-gradient-to-r from-tv-bg-second to-tv-bg-first
                        border-[6px] border-tv-border rounded-3xl flex justify-center'
            >
              {/* Tv Area */}
              <div className='absolute top-6 w-[93%] h-[70%] bg-modal-gradient-light rounded-3xl flex flex-col
                           border-[3px] border-tv-border overflow-hidden'
              >
                {
                  selectedMonster ? (
                    // Display selected monster Image Only
                    <div className='absolute inset-0 flex flex-col justify-center items-center p-4 bg-modal-gradient-light text-white'>
                      <img src={selectedMonster.image} alt={selectedMonster.name} className='w-60 h-60 object-contain mb4' />
                    </div>
                  ) : (
                    // Display Tv static If no Monster Selected
                    <img src={tvStaticGif} alt='TV Static' className='w-full h-full object-cover' />
                  )
                }
              </div>

              {/* Non Functional Red and Green Button - Now independently positioned */}
              <div className='absolute bottom-[20%] right-[40px] flex items-center gap-15px'>
                <div className='bg-red-button w-7 h-7 border-[1px] border-black rounded-full'></div>
                <div className='bg-green-button w-7 h-7 border-[1px] border-black rounded-full'></div>
              </div>

              {selectedMonster ? (
                <div className='absolute bottom-[5%] w-full flex flex-col items-center gap-2px'> {/* Adjusted positioning */}
                  <div className="w-4/5 bg-transparent p-4 flex flex-col items-center justify-center">
                    {/* Monster Name */}
                    <h3 className='font-irish-grover text-3em text-white font-extrabold text-stroke-3-black'>
                      {selectedMonster.name}
                    </h3>
                    {/* Energy Bar */}
                    <div className='w-80 bg-bar-progress rounded-full h-6 mb-2 border-[2px] border-black overflow-hidden relative'>
                      {/* Progress Bar */}
                      <div className='bg-modal-gradient-light h-full rounded-full border-[2px] border-black'
                        style={{ width: `${(selectedMonster.energy / selectedMonster.maxEnergy) * 100}%` }} // Added %
                      >
                      </div>
                      {/* Energy Icon */}
                      {/* Moved this image inside the span for better alignment with text */}
                      <span className="absolute inset-0 flex items-center justify-center font-bold text-sm text-white">
                        <img src={energyIconSrc} alt="Energy" className='w-6 h-6 object-contain mr-1' /> {/* Adjusted size */}
                        {selectedMonster.energy}/{selectedMonster.maxEnergy}
                      </span>
                    </div>
                    {/* Energy Information */}
                    <div className="flex items-center text-white text-3xl font-irish-grover mt-1 text-stroke-2-black">
                      <img src={energyIconSrc} alt="Energy" className="w-6 h-6 object-contain mr-1" />
                      <span>{selectedMonster.energyPerHour} energy/hour</span>
                    </div>
                  </div>
                </div>
              ) : (
                // Grey Rectangle placeholder when no monster is selected
                <div className='absolute bottom-[10%] w-full flex flex-col items-center gap-2px'> {/* Adjusted positioning */}
                  <div className='relative w-[300px] h-[70px] bg-tv-border rounded-md'>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div >
      </div >
      <div className='w-full grid-row-3 mt-5 mr-8'>
        <div className='h-20'>
          <div className='top-50px right-50px flex items-center justify-end gap-50px'>
            {/* Wallet Address*/}
            <div className='flex items-center gap-10px m-2'>
              {/* Player Wallet Info Icon (Standalone) */}
              <img src={logoWalletSrc} alt="Player Icon" className="h-11 w-11 object-contain drop-shadow-icon-base" />
              {/* Player Wallet Info Card (Text Only) */}
              <PlayerInfoCard value={player?.displayAddress || '...'} isWallet={true} />
            </div>

            {/* Coin Resource */}
            <div className='flex items-center gap-10px'>
              {/* Resource Info Icon (Standalone) */}
              <img src={logoCoinSrc} alt="Resource Icon" className="h-11 w-11 object-contain drop-shadow-icon-base" />
              {/* Resource Info Card (Text Only) */}
              <PlayerInfoCard value={player?.balance.toString() || '0'} />
            </div>
          </div>
        </div>
        <div className='relative h-3/4'>
          <div className='h-full'>
            <div className='w-full h-full bg-monster-grid-bg
                        border-[6px] border-tv-border rounded-3xl 
                        p-6 shadow-lg grid grid-cols-5 gap-6'>
              {mockMonsters.map((monster) => (
                <div
                  key={monster.id}
                  className={`
                        relative bg-gradient-to-t from-modal-gradient-light 
                        to-modal-gradient-dark flex flex-col items-center 
                        cursor-pointer border-[1px] 
                        ${selectedMonster?.id == monster.id ? 'border-blue-selected' : 'border-yellow-secondary-btn'}
                        transition-all duration-200 ease-in-out
                        hover:scale-105 hover:shadow-xl h-[100px] w-[100px]
                      `}
                  onClick={() => handleMonsterSelect(monster)}
                >
                  <img src={monster.image} alt={monster.name} className="w-20 h-20 object-contain" />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className='h-full mt-10'>
          <div className="flex items-end justify-end right-0 gap-50px">
            <button
              onClick={handleBattle}
              className="px-10 py-0.5 bg-[#0BA345] text-white text-2em text-stroke-1-black font-irish-grover rounded-sm-mdl 
                    cursor-pointer font-bold
                    border-[3px] border-black transibg-bltion-all duration-200 ease-in-out shadow-[0px_10px_10px_rgba(0,0,0,0.9)] 
                    active:translate-y-1r"
            >
              Battle
            </button>
          </div>
        </div>
      </div >
    </div >)
}

export default MonsterScreen;
