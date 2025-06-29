"use client"; // Mark this component as client-side only

import { useEffect, useState } from "react";
import {
  ChainIds,
  ConnectorError,
  ConnectorErrorType,
  requestRoninWalletConnector,
} from "@sky-mavis/tanto-connect";

function ConnectRoninWalletButton({ onConnect, onDisconnect, className, buttonText }) {
  const [connector, setConnector] = useState(null);
  const [connectedAddress, setConnectedAddress] = useState(null);
  const [error, setError] = useState(null);
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
      const connector = await requestRoninWalletConnector();
      return connector;
    } catch (error) {
      if (error instanceof ConnectorError) {
        setError(error.name);
      }
      return null;
    }
  };

  const connectRoninWallet = async () => {
    if (!connector) {
        if (error === ConnectorErrorType.PROVIDER_NOT_FOUND) {
            window.open("https://wallet.roninchain.com", "_blank");
        }
        return; // Exit if connector is not available
    }

    const connectResult = await connector.connect();
    if (connectResult) {
      setConnectedAddress(connectResult.account);
      setCurrentChainId(connectResult.chainId);
      // Pass the connected account up to the parent App.jsx component
      onConnect && onConnect(connectResult.account, connector);
    }
    const accounts = await connector.getAccounts();
    if (accounts) {
      setUserAddresses(accounts);
    }
  };

  const handleDisconnect = async () => {
    await connector?.disconnect();
    setConnectedAddress(null);
    setCurrentChainId(null);
    setUserAddresses(null);
    onDisconnect && onDisconnect();
  };

  useEffect(() => {
    // Request the connector when the component mounts
    getRoninWalletConnector().then((connector) => {
      setConnector(connector);
    });
  }, []);

  useEffect(() => {
    // Check for existing connection on mount and listen for events
    if (connector) {
        const checkConnection = async () => {
            try {
                const accounts = await connector.getAccounts();
                if (accounts && accounts.length > 0) {
                    const account = accounts[0];
                    const chainId = await connector.getChainId();
                    setConnectedAddress(account);
                    setCurrentChainId(chainId);
                    onConnect && onConnect(account, connector);
                }
            } catch (err) {
                console.error("Error checking connection:", err);
            }
        };
        
        checkConnection();

        // Listen for events to keep state in sync
        const handleAccountsChanged = (accounts) => {
            if (accounts.length === 0) {
                handleDisconnect();
            } else {
                setConnectedAddress(accounts[0]);
                onConnect && onConnect(accounts[0], connector);
            }
        };

        const handleChainChanged = (chainId) => {
            setCurrentChainId(chainId);
        };
        
        connector.on("accountsChanged", handleAccountsChanged);
        connector.on("chainChanged", handleChainChanged);
        connector.on("disconnect", handleDisconnect);

        return () => {
            connector.removeListener("accountsChanged", handleAccountsChanged);
            connector.removeListener("chainChanged", handleChainChanged);
            connector.removeListener("disconnect", handleDisconnect);
        };
    }
  }, [connector, onConnect, onDisconnect]);

  return (
    <div className="flex flex-col items-center">
      {connectedAddress ? (
        <button onClick={handleDisconnect} className={className}>
          <img src="/assets/ronin_wallet_icon.png" alt="Ronin Wallet Icon" className="wallet-logo" />
          {connectedAddress.substring(0, 6)}...{connectedAddress.substring(connectedAddress.length - 4)}
        </button>
      ) : (
        <button onClick={connectRoninWallet} className={className}>
          {buttonText || "Connect Ronin Wallet"}
        </button>
      )}
      {error && (
        <div className="mt-1 bg-red-700 text-white text-xl py-1 px-2 rounded text-center w-full max-w-xl">
          {error}
        </div>
      )}
    </div>
  );
}

export default ConnectRoninWalletButton;