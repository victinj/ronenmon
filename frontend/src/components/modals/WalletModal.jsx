import React, { useState, useEffect } from 'react';

function WalletModal({ isVisible, onClose, onConnectWallet }) {
  const [isConnecting, setIsConnecting] = useState(false);
  const [internalAddress, setInternalAddress] = useState("");
  const [internalIsConnected, setInternalIsConnected] = useState(false);
  
  useEffect(() => {
    // This effect could be used to check global wallet state if passed as props
    // For now, it just resets if visibility changes and it's not connected.
    if (!isVisible) {
        // setIsConnecting(false); // Optional: reset connecting state when modal closes
    }
  }, [isVisible]);

  const handleConnect = async () => {
    setIsConnecting(true);
    console.log("WalletModal: Attempting to connect wallet...");
    
    // Simulate connection (replace with actual web3 logic)
    // Example with window.ethereum (MetaMask)
    // if (typeof window.ethereum !== 'undefined') {
    //   try {
    //     const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    //     const account = accounts[0];
    //     setInternalAddress(account);
    //     setInternalIsConnected(true);
    //     onConnectWallet(account); // Notify parent (App.jsx)
    //     console.log("WalletModal: Wallet connected:", account);
    //   } catch (error) {
    //     console.error("WalletModal: Error connecting wallet:", error);
    //     onConnectWallet(null); 
    //   } finally {
    //     setIsConnecting(false);
    //   }
    // } else {
    //   console.warn("WalletModal: MetaMask (or other Ethereum provider) not detected.");
    //   onConnectWallet(null);
    //   setIsConnecting(false);
    // }

    // Current simulation
    setTimeout(() => {
        const dummyAddress = "0xSimulatedUser" + Math.random().toString(16).substring(2, 10).toUpperCase();
        setInternalAddress(dummyAddress);
        setInternalIsConnected(true);
        onConnectWallet(dummyAddress); 
        setIsConnecting(false);
        console.log("WalletModal: Wallet connected (simulated):", dummyAddress);
    }, 1000);
  };

  const handleDisconnect = () => {
    setInternalIsConnected(false);
    setInternalAddress("");
    onConnectWallet(null); 
    console.log("WalletModal: Wallet disconnected (simulated)");
  }

  if (!isVisible) return null;

  return (
    <div 
      className={`fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50 p-4 transition-opacity duration-300 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      onClick={onClose} 
    >
      <div 
        className="bg-nebula-blue p-6 sm:p-8 rounded-xl shadow-2xl border border-pulsar-purple w-full max-w-md transform transition-all duration-300 ease-in-out"
        onClick={e => e.stopPropagation()} 
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-starlight-white">HyperNet Wallet</h2>
          <button onClick={onClose} className="text-nebula-gray hover:text-starfire-pink text-3xl leading-none">&times;</button>
        </div>

        {internalIsConnected ? (
            <div className="text-center">
                <p className="text-lg text-hyperdrive-cyan mb-2 font-sans">Wallet Connected!</p>
                <p className="text-sm text-starlight-white font-sans break-all mb-4">Address: {internalAddress}</p>
                <img src={`https://placehold.co/100x100/0B0725/00FFFF?text=GXY&font=irishgrover`} alt="Wallet Icon" className="mx-auto w-20 h-20 rounded-full border-2 border-hyperdrive-cyan mb-6"/>
                <button
                    onClick={handleDisconnect}
                    className="w-full px-6 py-3 bg-nova-orange hover:bg-starfire-pink text-starlight-white font-semibold rounded-lg shadow-md transition-colors"
                >
                    Disconnect Wallet
                </button>
            </div>
        ) : (
            <div className="text-center">
                <img src={`https://placehold.co/100x100/0B0725/A0AEC0?text=Link&font=irishgrover`} alt="Wallet Icon" className="mx-auto w-20 h-20 rounded-full border-2 border-nebula-gray mb-6"/>
                <p className="text-lg text-starlight-white mb-6 font-sans">Connect your wallet to manage your Cosmic Entities and interact with the Roninmon universe.</p>
                <button
                    onClick={handleConnect}
                    disabled={isConnecting}
                    className="w-full px-6 py-4 bg-gradient-to-r from-hyperdrive-cyan to-starfire-pink hover:from-starfire-pink hover:to-hyperdrive-cyan text-starlight-white text-xl font-semibold rounded-xl shadow-lg transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {isConnecting ? 'Connecting...' : 'Connect Wallet'}
                </button>
                <p className="text-xs text-nebula-gray mt-4 font-sans">Connect to manage your Roninmon NFTs.</p>
            </div>
        )}
      </div>
    </div>
  );
}
export default WalletModal;