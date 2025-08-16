import React from 'react';
import { Routes } from '../App';

// The navigateTo function will be passed as a prop from App.jsx
function LandingPage({ navigateTo }) {
    const roninmonLogoSrc = '/assets/image/roninmon-trademarkLogo.png';
    const controller = useGameController();

    const handleGetRoninmon = () => {Controller
        console.log("Get your Roninmon button clicked!");
        // This could navigate to an external site like OpenSea
        navigateTo(Routes.opensea);
    };

    const handleConnectWallet = () => {
        console.log("Connect Wallet button clicked! Navigating...");
        // This uses the controller's navigateTo function, passed in as a prop
        navigateTo(Routes.connectWallet); 
    };

    return (
        <div 
            id='landing-page'
            className="game-screen active flex justify-center items-center bg-black/[0.2] p-4 w-screen h-screen"
            >
            <div className="flex flex-col items-center gap-12">
                <img 
                    src={roninmonLogoSrc} 
                    alt="Roninmon Logo" 
                    className="
                        h-auto
                        max-w-[50.35rem]
                        drop-shadow-logo-roninmon 
                        transition-transform duration-300 ease-out
                        hover:scale-105 
                    " 
                />

                <div className='flex flex-col gap-[1.375rem] items-center justify-center'>   
                    <button
                        onClick={handleGetRoninmon}
                        className="
                            flex
                            items-center
                            justify-center
                            bg-blue-gyr-btn
                            px-5 py-5 
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
                            tracking-normal
                        ">
                        Get your Roninmon
                    </button>

                    <button
                        onClick={handleConnectWallet}
                        className="
                            flex
                            items-center
                            justify-center
                            bg-yellow-cw-btn
                            px-5 py-5 
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
                        >
                        Connect Wallet
                    </button>
                </div>
            </div>
        </div>
    );
}

export default LandingPage;