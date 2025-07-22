import React from 'react';
import PlayerInfoCard from './PlayerInfoCard';



const backButtonSrc = '/assets/image/backLogo.png'; // Reusing the exit logo for "Back"
const logoWalletSrc = '/assets/image/walletLogo.png';
const logoCoinSrc = '/assets/image/coinLogo.png';
const mocckMonster = [
  { id: 'm1', name: 'Beight', image: '/assets/image/Monster/beight-monsterLogo.png', energy: 80, maxEnergy: 100, energyPerHour: 5 },
  { id: 'm2', name: 'Blustar', image: '/assets/image/Monster/blustar-monsterLogo.png', energy: 65, maxEnergy: 100, energyPerHour: 5 },
  { id: 'm3', name: 'Chillguy', image: '/assets/image/Monster/chillguy-monsterLogo.png', energy: 95, maxEnergy: 100, energyPerHour: 5 },
  { id: 'm4', name: 'Fire Heart', image: '/assets/image/Monster/fireheart-monsterLogo.png', energy: 70, maxEnergy: 100, energyPerHour: 5 },
  { id: 'm5', name: 'Smileypong', image: '/assets/image/Monster/smileypong-monsterLogo.png', energy: 50, maxEnergy: 100, energyPerHour: 5 },
  { id: 'm6', name: 'Yeppi', image: '/assets/image/Monster/yepi-monsterLogo.png', energy: 90, maxEnergy: 100, energyPerHour: 5 },
  { id: 'm6', name: 'Yeppi', image: '/assets/image/Monster/yepi-monsterLogo.png', energy: 90, maxEnergy: 100, energyPerHour: 5 },
  { id: 'm6', name: 'Yeppi', image: '/assets/image/Monster/yepi-monsterLogo.png', energy: 90, maxEnergy: 100, energyPerHour: 5 },

]

function InventoryScreen({ player, navigateTo }) {
  const handleBack = () => {
    navigateTo('mainMenu');
  };

  return (
    <div className="game-screen active">
      <div className='grid grid-cols-2'>
        <div>
          <div className="absolute  left-50px flex items-center">
            {/* Back Button (Top Left) */}
            <button
              onClick={handleBack}
              className="group flex items-center text-white text-1-5em font-irish-grover border-none shadow-none"
            >
              <img src={backButtonSrc} alt="Back" className="w-12 h-12 object-contain drop-shadow-icon-base" />
              <span>BACK</span>
            </button>
          </div>
        </div>
        <div className='flex items-end justify-end'>
          <div className='top-50px right-50px flex items-center gap-50px'>
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
      </div>

      {/* Inventory content will go here */}
      <div className='flex h-full justify-center items-center'>
        <div className='grid grid-cols-7 w-3/4 h-[90%]'>
          <div className='flex col-span-1 items-center justify-center'>
            <button className='text-9xl'>{'<'}</button>
          </div>
          <div className='col-span-5'>
            <div className='grid grid-cols-4 items-center w-full h-full gap-2'>
              {mocckMonster.map(monster => {
                return <div className=''>
                  <img src={monster.image} className='border-[2px] bg-monster-bg-box border-monster-slot-border h-[250px] object-contain ' />
                  <div className=''>
                    <h1 className=''>{monster.name}</h1>
                  </div>
                </div>
              })}
            </div>
          </div>
          <div className='flex col-span-1 justify-center items-center'>
            <button className='text-9xl'>{'>'}</button>
          </div>
        </div>
      </div>
    </div >
  );
}

export default InventoryScreen;
