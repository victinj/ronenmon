import React from 'react';
import WalletConnectButton from './WalletConnectButton';

function WalletModal({ isOpen, onClose, onWalletConnected }) {
    if (!isOpen) return null; // Don't render if not open

    // Asset path: /assets/logoRoninmonYellow.png assuming it's in public/assets/
    const roninmonModalLogo = '/assets/image/roninmon-yellowLogo.png';
    const exitButtonSmall = '/assets/image/exitLogo.png'; // Your 'X' button image

    const handleConnectSuccess = (account, provider) => {
        onWalletConnected(account, provider); // Pass connected info up to App.jsx
        onClose(); // Close modal on success
    };

    return (
        // Modal Overlay (dim background)
        <div 
            id="wallet-modal-overlay" 
            className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 transition-opacity duration-300"
            onClick={onClose} // Close if clicking on overlay
        >
            {/* Modal Content */}
            <div 
                id="wallet-modal-content" 
                className="relative bg-gradient-to-b from-[#661A38] via-[#AE2C5F] to-[#CC3470] 
                           border-4 border-[#D8C967] rounded-xl p-10 flex flex-col items-center gap-4 
                           shadow-lg transform scale-90 transition-transform duration-300
                           max-w-[600px] w-full box-border"
                onClick={(e) => e.stopPropagation()} // Prevent modal from closing when clicking content
            >
                {/* Exit Button */}
                <button 
                    id="modalExitBtn" 
                    onClick={onClose}
                    className="absolute top-2 right-2 p-2 rounded-full bg-transparent 
                                border-2 border-[#D8C967] text-transparent w-10 h-10 
                                flex justify-center items-center z-10 hover:brightness-125" // Tailwind for your button-img small-icon styling
                >
                    <img src={exitButtonSmall} alt="Close" className="w-5 h-5 object-contain filter-brightness-125" />
                </button>

                {/* Roninmon Logo */}
                <img src={roninmonModalLogo} alt="Roninmon Logo" className="max-w-[100%] h-auto mb-1 drop-shadow-md" />
                
                <p className="font-irish-grover text-1-8em text-gray-200 text-shadow-sm mb-2">
                    Connect your wallet to begin:
                </p>

                {/* Wallet Connect Button */}
                <WalletConnectButton 
                    onConnect={handleConnectSuccess} 
                    onDisconnect={() => console.log("Wallet disconnect handled by button")}
                    buttonText="Connect Ronin Wallet"
                    className="px-6 py-3 my-2 border-0 border-black rounded-lg text-1-8em font-bold cursor-pointer 
                               transition-all duration-200 ease-in-out shadow-[0px_10px_10px_rgba(0,0,0,0.56)] 
                               active:shadow-[inset_0px_3px_6px_rgba(0,0,0,0.7)] active:translate-y-1 
                               bg-gradient-to-b from-[#D3BF2C] to-[#EBE5B5] text-white 
                               flex items-center justify-center gap-2 relative overflow-hidden" // Added overflow-hidden for error text
                />
            </div>
        </div>
    );
}

export default WalletModal;