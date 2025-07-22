
import React from 'react';
import PlayerInfoCard from './PlayerInfoCard';
import { useGameController } from '../hooks/useGameController';


const backButtonSrc = '/assets/image/backLogo.png'; // Reusing the exit logo for "Back"
const logoWalletSrc = '/assets/image/walletLogo.png';
const logoCoinSrc = '/assets/image/coinLogo.png';

function DepositScreen({ player, navigateTo }) {
  const controller = useGameController()
  const handleBack = () => {
    navigateTo('wallet');
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
      {/* Wallet content will go here */}
      <div className='flex h-full justify-center items-center'>
        <div className='grid grid-rows-8 w-1/4 h-[70%] gap-50px'>
          <div className='grid grid-rows-4 row-span-4 
            bg-gradient-to-t from-[#661A38] via-[#AE2C5F] to-[#CC3470]
            border-[2px] border-monster-slot-border 
            '>
            <h2 className='text-3xl flex justify-center items-center text-green-700 font-bold text-shadow-heavy'>Eligible to deposit</h2>
            <input type='text' className=' flex text-center text-black rounded-[20px] m-5 h-full text-3xl' />
            <div className='grid grid-cols-1 row-span-2'>
              <button className='bg-blue-primary-btn m-5 mt-10 mb-10 border-black text-2xl border-[3px] rounded-[20px] shadow-button-default'><h2>Deposit</h2></button>
            </div>
          </div>
          <div className='row-span-4 
            border-[2px] border-monster-slot-border 
            bg-gradient-to-t from-[#661A38] via-[#AE2C5F] to-[#CC3470]
            overflow-y-auto
            '>
            <h2 className='text-5xl mt-10'>Deposit History</h2>
            <h2 className='text-5xl mt-10'>No deposit yet</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DepositScreen;
