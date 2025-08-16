"use client"; // Mark this component as client-side only

import { useEffect, useState } from "react";
import {
  ChainIds,
  ConnectorError,
  ConnectorErrorType,
  requestRoninWalletConnector,
} from "@sky-mavis/tanto-connect";

// --- Self-Contained Modal Component for a better UX ---
const InstallWalletModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleInstallClick = () => {
    window.open("https://wallet.roninchain.com", "_blank");
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50"
      onClick={onClose} // Close modal on backdrop click
    >
      <div 
        className="bg-gray-800 text-white rounded-2xl shadow-2xl p-8 max-w-sm w-full border border-gray-700"
        onClick={(e) => e.stopPropagation()} // Prevent modal close when clicking inside
      >
        <h2 className="text-2xl font-bold text-center mb-4">Ronin Wallet Not Found</h2>
        <p className="text-center text-gray-300 mb-6">
          To connect your wallet, you need to install the Ronin Wallet browser extension first.
        </p>
        <div className="flex flex-col gap-4">
          <button
            onClick={handleInstallClick}
            className="w-full bg-modal-gradient-dark hover:bg-cyan-600 text-white font-bold py-3 px-4 rounded-lg transition-all duration-200 ease-in-out transform hover:scale-105"
          >
            Install Ronin Wallet
          </button>
          <button
            onClick={onClose}
            className="w-full bg-modal-gradient-mid hover:bg-gray-600 text-gray-300 font-bold py-3 px-4 rounded-lg transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};


function ConnectRoninWalletButton({ onConnect, onDisconnect, className, buttonText, style, ...rest }) {
  const [connector, setConnector] = useState(null);
  const [connectedAddress, setConnectedAddress] = useState(null);
  const [error, setError] = useState(null);
  const [isInstallModalOpen, setInstallModalOpen] = useState(false); // State for our new modal
  const [userAddresses, setUserAddresses] = useState(null);
  const [currentChainId, setCurrentChainId] = useState(null);

  const switchChain = async (chainId) => {
    try {
      await connector?.switchChain(chainId);
      setCurrentChainId(chainId);
    } catch (error) {
      console.error(error);
    }
  };

  const getRoninWalletConnector = async () => {
    try {
      const newConnector = await requestRoninWalletConnector();
      setConnector(newConnector);
      setError(null); // Clear previous errors on success
      return newConnector;
    } catch (err) {
      if (err instanceof ConnectorError) {
        setError(err.name);
      }
      return null;
    }
  };

  const connectRoninWallet = async () => {
    let currentConnector = connector;
    if (!currentConnector) {
      currentConnector = await getRoninWalletConnector();
    }

    // If the provider is still not found after trying, show the modal.
    if (error === ConnectorErrorType.PROVIDER_NOT_FOUND || !currentConnector) {
      setInstallModalOpen(true);
      return;
    }

    try {
      const connectResult = await currentConnector.connect();
      if (connectResult) {
        setConnectedAddress(connectResult.account);
        setCurrentChainId(connectResult.chainId);
        onConnect?.(connectResult.account, currentConnector);
      }
      const accounts = await currentConnector.getAccounts();
      if (accounts) {
        setUserAddresses(accounts);
      }
    } catch (err) {
      console.error("Failed to connect:", err);
      // Handle other connection errors if necessary
    }
  };

  const handleDisconnect = async () => {
    await connector?.disconnect();
    setConnectedAddress(null);
    setCurrentChainId(null);
    setUserAddresses(null);
    onDisconnect?.();
  };

  useEffect(() => {
    getRoninWalletConnector();
  }, []);

  useEffect(() => {
    if (!connector) return;

    const checkConnection = async () => {
      try {
        const accounts = await connector.getAccounts();
        if (accounts?.length > 0) {
          const account = accounts[0];
          const chainId = await connector.getChainId();
          setConnectedAddress(account);
          setCurrentChainId(chainId);
          onConnect?.(account, connector);
        }
      } catch (err) {
        console.error("Error checking initial connection:", err);
      }
    };
    
    checkConnection();

    const handleAccountsChanged = (accounts) => {
      if (accounts.length === 0) {
        handleDisconnect();
      } else {
        setConnectedAddress(accounts[0]);
        onConnect?.(accounts[0], connector);
      }
    };

    const handleChainChanged = (chainId) => setCurrentChainId(chainId);
    
    connector.on("accountsChanged", handleAccountsChanged);
    connector.on("chainChanged", handleChainChanged);
    connector.on("disconnect", handleDisconnect);

    return () => {
      connector.removeListener("accountsChanged", handleAccountsChanged);
      connector.removeListener("chainChanged", handleChainChanged);
      connector.removeListener("disconnect", handleDisconnect);
    };
  }, [connector, onConnect, onDisconnect]);

  return (
    <>
      <div className="flex flex-col items-center">
        {connectedAddress ? (
          <button onClick={handleDisconnect} className={className} style={style} {...rest}>
            <img src="/assets/ronin_wallet_icon.png" alt="Ronin Wallet Icon" className="wallet-logo" />
            {connectedAddress.substring(0, 6)}...{connectedAddress.substring(connectedAddress.length - 4)}
          </button>
        ) : (
          <button onClick={connectRoninWallet} className={className} style={style} {...rest}>
            {buttonText || "Connect Ronin Wallet"}
          </button>
        )}
        {/* Display other errors, but not the 'provider not found' one */}
        {error && error !== ConnectorErrorType.PROVIDER_NOT_FOUND && (
          <div className="mt-1 bg-red-700 text-white text-xl py-1 px-2 rounded text-center w-full max-w-xl">
            An unexpected error occurred: {error}
          </div>
        )}
      </div>
      
      {/* Render our new modal */}
      <InstallWalletModal 
        isOpen={isInstallModalOpen} 
        onClose={() => setInstallModalOpen(false)} 
      />
    </>
  );
}

export default ConnectRoninWalletButton;