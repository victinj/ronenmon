import React from 'react';
import WalletConnectButton from './WalletConnectButton';
import { useGameController } from '../hooks/useGameController';

function ConnectWalletScreen({ onConnectWallet, navigateTo }) {
    const roninmonModalLogo = '/assets/image/roninmon-yellowLogo.png';
    const exitButtonSmall = '/assets/image/exitLogo.png'; // Your 'X' button image

    // Figma design base dimensions
    const FIGMA_WIDTH = 1920;
    const FIGMA_HEIGHT = 1080;
    
    // Responsive scaling function
    const getResponsiveValue = (figmaValue, dimension = 'width') => {
        if (dimension === 'width') {
            return `${(figmaValue / FIGMA_WIDTH) * 100}vw`;
        } else {
            return `${(figmaValue / FIGMA_HEIGHT) * 100}vh`;
        }
    };

    const handleConnectSuccess = (account) => {
        onConnectWallet(account);
    };

    return (
        <div 
            id="connect-wallet-screen" 
            className="game-screen active flex justify-center items-center bg-black/[0.2] w-screen h-screen"
        >
            {/* Main Content */}
            <div 
                id="wallet-content" 
                className="absolute bg-gradient-to-b from-[#661A38] via-[#AE2C5F] to-[#CC3470] 
                           border-[#D8C967] flex flex-col items-center justify-start 
                           shadow-lg"
                style={{
                    width: getResponsiveValue(1004),
                    height: getResponsiveValue(420, 'height'),
                    top: getResponsiveValue(355, 'height'),
                    left: getResponsiveValue(458),
                    borderRadius: getResponsiveValue(20),
                    borderWidth: getResponsiveValue(6),
                    borderStyle: 'solid',
                    borderColor: '#D8C967',
                    padding: getResponsiveValue(20),
                    gap: getResponsiveValue(20, 'height')
                }}
            >
                {/* Exit Button */}
                <button 
                    id="modalExitBtn" 
                    onClick={() => navigateTo('landing')}
                    className="absolute bg-transparent 
                                border-[#D8C967] text-transparent 
                                flex justify-center items-center z-10 hover:brightness-125"
                    style={{
                        top: getResponsiveValue(10, 'height'),
                        right: getResponsiveValue(10),
                        width: getResponsiveValue(40),
                        height: getResponsiveValue(40, 'height'),
                        borderRadius: '50%',
                        borderWidth: getResponsiveValue(2),
                        borderStyle: 'solid',
                        padding: getResponsiveValue(8)
                    }}
                >
                    <img 
                        src={exitButtonSmall} 
                        alt="Close" 
                        style={{
                            width: getResponsiveValue(20),
                            height: getResponsiveValue(20, 'height')
                        }}
                        className="object-contain filter-brightness-125" 
                    />
                </button>

                {/* Roninmon Logo */}
                <img 
                    src={roninmonModalLogo} 
                    alt="Roninmon Logo" 
                    className="drop-shadow-md object-contain"
                    style={{
                        width: getResponsiveValue(800),
                        height: getResponsiveValue(180, 'height'),
                    }}
                />
                
                <p 
                    className="text-gray-200 text-shadow-sm flex items-center justify-center"
                    style={{
                        fontFamily: 'Irish Grover',
                        fontWeight: 400,
                        fontStyle: 'normal',
                        fontSize: getResponsiveValue(36),
                        lineHeight: '100%',
                        letterSpacing: '0%',
                        whiteSpace: 'nowrap',
                        textOverflow: 'ellipsis',
                        overflow: 'hidden',
                    }}
                >
                    Connect your wallet to begin:
                </p>

                {/* Wallet Connect Button */}
                <WalletConnectButton 
                    onConnect={handleConnectSuccess} 
                    onDisconnect={() => console.log("Wallet disconnect handled by button")}
                    buttonText="Connect"
                    className="border-black cursor-pointer 
                               transition-all duration-200 ease-in-out shadow-[0px_10px_10px_rgba(0,0,0,0.56)] 
                               active:shadow-[inset_0px_3px_6px_rgba(0,0,0,0.7)] active:translate-y-1 
                               bg-gradient-to-b from-[#D3BF2C] to-[#EBE5B5] text-white 
                               flex items-center justify-center gap-2 relative overflow-hidden"
                    style={{
                        width: getResponsiveValue(170),
                        height: getResponsiveValue(70, 'height'),
                        fontFamily: 'Irish Grover',
                        fontWeight: 400,
                        fontStyle: 'normal',
                        fontSize: getResponsiveValue(36),
                        lineHeight: '100%',
                        letterSpacing: '0%',
                        whiteSpace: 'nowrap',
                        textOverflow: 'ellipsis',
                        overflow: 'hidden',
                        padding: getResponsiveValue(20),
                        borderWidth: getResponsiveValue(4),
                        borderStyle: 'solid',
                        borderRadius: getResponsiveValue(15)
                    }}
                />
            </div>
        </div>
    );
}

export default ConnectWalletScreen;
