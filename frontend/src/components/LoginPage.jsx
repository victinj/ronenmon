import React from 'react';
import WalletConnectButton from './WalletConnectButton';
import { useGameController } from '../hooks/useGameController';

function LoginPage({ onConnectWallet, navigateTo }) {
    const roninmonModalLogo = '/assets/image/roninmon-yellowLogo.png';
    const exitButtonSmall = '/assets/image/exitLogo.png'; 

    const handleConnectSuccess = (account) => {
        console.log("Wallet connected successfully:", account);
        onConnectWallet(account);
    };

    return (
        <div 
            id='login-page' 
            className='game-screen active flex justify-center items-center bg-black/[0.2] w-screen h-screen'
            >
            <div
                className='
                    relative
                    h-auto
                    min-w-[62.75rem]
                    rounded-md-card
                    px-5 py-5 gap-5
                    bg-gradient-to-b from-modal-gradient-dark via-modal-gradient-mid to-modal-gradient-light
                    border-modal-border border-2 flex flex-col items-center justify-center shadow-lg
                '>

                <div className='flex flex-row item-center justify-center'>
                    <img
                        src={roninmonModalLogo}
                        className='h-auto min-w-[47.3125rem] object-contain drop-shadow-md'
                    />

                    <button
                        onClick={() => navigateTo('landing')}
                        className='
                            absolute top-4 right-4
                            bg-transparent
                            border-modal-border
                            border-2
                            rounded-full-circle
                            flex
                            px-2 py-2
                            justify-center items-center
                        '>
                        <img
                            src={exitButtonSmall}
                            className='w-8 h-8 object-contain filter-brightness-125'
                        />
                    </button>
                </div>

                <p className='text-4xl font-normal leading-none tracking-normal text-gray-200 text-shadow-sm flex items-center justify-center'>
                    Connect your wallet to begin:
                </p>

                <WalletConnectButton
                    onConnect={handleConnectSuccess}
                    onDisconnect={() => console.log("Wallet disconnect handled by button")}
                    buttonText="Connect"
                    className='
                        flex
                        items-center
                        justify-center
                        bg-yellow-cw-btn
                        px-2 py-2 
                        rounded-md-card

                        cursor-pointer
                        transition-all
                        duration-200
                        ease-in-out
                        shadow-button-default
                        active:shadow-button-active-inset
                        active:translate-y-1
                        border-4
                        border-black
                        
                        text-white
                        text-4xl
                        font-normal
                        leading-none
                        tracking-normal"
                    '
                />
            </div>
        </div>
    )
}

export default LoginPage;