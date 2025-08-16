import React from 'react';
import PlayerInfoCard from './PlayerInfoCard';
import { Routes } from '../App';

function HomePage({ player, navigateTo }) {
  const exitButtonSrc = '/assets/image/exitLogo.png';
  const logoWalletSrc = '/assets/image/walletLogo.png';
  const logoCoinSrc = '/assets/image/coinLogo.png';
  const incubatorButtonSrc = '/assets/image/incubatorLogo.png';
  const inventoryButtonSrc = '/assets/image/inventoryLogo.png';
  const walletButtonSrc = '/assets/image/wallet-woshadowLogo.png';

  const handleExit = () => {
    console.log('Exit button clicked! Returning to Landing Page.');
    navigateTo('landing');
  }

  const handleIncubator = () => {
    console.log('Incubator button clicked!');
    navigateTo('incubator');
  };

  const handleInventory = () => {
    console.log('Inventory button clicked! Transitioning to Inventory Screen.');
    navigateTo('inventory');
  };

  const handleWalletPage = () => {
    console.log('Wallet Page sidebar button clicked! Transitioning to Wallet Page.');
    navigateTo('wallet');
  };

  const handlePlay = () => {
    console.log('PLAY button clicked! Transitioning to Monster Page for selection.');
    navigateTo('monster');
  };

  return (
    <div
        id='home-page'
        className='game-screen active bg-black/[0.2] h-screen w-screen'
        >
        {/* headers */}
        <div className='relative flex flex-row items-center justify-between px-[3.125rem] py-[3.125rem]'>
            <button
                onClick={handleExit}
                className='px-5 py-5 text-white text-[2.5rem]
                            flex flex-row items-center gap-2
                '
                >
                <img
                    src={exitButtonSrc}
                    className='w-16 h-16 object-contain drop-shadow-icon-base'
                />

                <span>EXIT</span>
            </button>

            <div className='flex items-center gap-9'>
                <div className='flex flex-row items-center px-1 py-1 gap-[10px]'>
                    <img
                        src={logoWalletSrc}
                        className='w-16 h-16 object-contain drop-shadow-icon-base'
                    />
                    <PlayerInfoCard  className='px-1 py-1' value={player?.displayAddress || 'abcdefghi'} isWallet={true} />
                </div>

                <div className='flex flex-row items-center px-1 py-1 gap-[10px]'>
                    <img
                        src={logoCoinSrc}
                        className='w-16 h-16 object-contain drop-shadow-icon-base'
                    />
                    <PlayerInfoCard value={player?.balance.toString() || '0'} />
                </div>
            </div>

        </div>
    </div>
  )
}

export default HomePage;