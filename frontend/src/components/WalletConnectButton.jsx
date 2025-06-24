import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers'; // Import ethers library

function WalletConnectButton({ onConnect, onDisconnect, buttonText, className }) {
    const [account, setAccount] = useState(null);
    const [isConnected, setIsConnected] = useState(false);
    const [error, setError] = useState(null); // State to hold error messages

    // --- Helper function to detect and get the Ronin provider ---
    const getRoninProvider = () => {
        if (window.ethereum && window.ethereum.providers) {
            const roninProvider = window.ethereum.providers.find(p => p.isRonin);
            if (roninProvider) {
                return roninProvider;
            }
        } 
        else if (window.ethereum && window.ethereum.isRonin) {
            return window.ethereum;
        }
        return null;
    };

    // --- Connect Wallet Function ---
    const connectWallet = async () => {
        setError(null); // Clear any previous errors when trying to connect
        try {
            const ronin = getRoninProvider();

            if (!ronin) {
                // UPDATED: Replace alert with setting the error state directly
                setError('Ronin Wallet extension not found. Please install it!');
                // Optionally, you can still open the Ronin Wallet download page here:
                // window.open('https://wallet.roninchain.com/', '_blank'); 
                return; // Stop execution if no Ronin provider
            }

            // Create an Ethers.js provider from the detected Ronin provider
            const provider = new ethers.BrowserProvider(ronin);
            
            // Request account access (using provider.send for broader compatibility with specific wallet methods)
            const accounts = await provider.send("eth_requestAccounts", []);

            if (accounts.length > 0) {
                const connectedAccount = accounts[0].address || accounts[0]; // Get the first account address
                setAccount(connectedAccount);
                setIsConnected(true);
                onConnect && onConnect(connectedAccount, provider); // Callback to parent component
                console.log("Ronin Wallet connected:", connectedAccount);
            } else {
                setError('No accounts found in Ronin Wallet.');
            }

        } catch (err) {
            console.error("Failed to connect Ronin Wallet:", err);
            if (err.code === 4001) {
                setError('Wallet connection rejected by user.');
            } else {
                // Generic error message if code is unknown
                setError('Error connecting wallet: ' + (err.message || 'Unknown error.'));
            }
        }
    };

    // --- Disconnect Wallet Function (Conceptual - User usually disconnects via extension) ---
    const disconnectWallet = () => {
        setAccount(null);
        setIsConnected(false);
        setError(null);
        onDisconnect && onDisconnect(); // Callback to parent component
        console.log("Ronin Wallet disconnected (app-side).");
        // Inform user they might need to disconnect manually in the extension
        // alert("Please disconnect your Ronin Wallet manually via the extension if needed.");
    };

    // --- Effect for handling account changes/disconnections from the wallet ---
    useEffect(() => {
        const ronin = getRoninProvider();
        if (ronin) {
            const handleAccountsChanged = (accounts) => {
                if (accounts.length === 0) {
                    console.log("Ronin Wallet: Accounts disconnected.");
                    disconnectWallet();
                } else {
                    console.log("Ronin Wallet: Account changed to", accounts[0]);
                    setAccount(accounts[0].address || accounts[0]);
                    setIsConnected(true);
                    // Re-send connect info to parent if account changes while connected
                    onConnect && onConnect(accounts[0].address || accounts[0]); 
                }
            };

            const handleChainChanged = (chainId) => {
                console.log("Ronin Wallet: Chain changed to", chainId);
                // Display error or prompt user to switch to Ronin Network (chainId 0x898)
                setError(`Connected to unsupported chain: ${parseInt(chainId, 16)}. Please switch to Ronin Network.`);
            };

            const handleDisconnect = (err) => {
                console.error("Ronin Wallet: Disconnected from chain", err);
                disconnectWallet();
                setError('Wallet disconnected unexpectedly. ' + (err.message || ''));
            };

            // Subscribe to wallet events
            ronin.on('accountsChanged', handleAccountsChanged);
            ronin.on('chainChanged', handleChainChanged);
            ronin.on('disconnect', handleDisconnect);

            // Cleanup function: unsubscribe from events when component unmounts
            return () => {
                ronin.removeListener('accountsChanged', handleAccountsChanged);
                ronin.removeListener('chainChanged', handleChainChanged);
                ronin.removeListener('disconnect', handleDisconnect);
            };
        }
    }, [onConnect, onDisconnect]); // Dependencies for useEffect

    // --- Initial check for existing connection on component mount ---
    useEffect(() => {
        const checkConnection = async () => {
            try {
                const ronin = getRoninProvider();
                if (ronin) {
                    const provider = new ethers.BrowserProvider(ronin);
                    // listAccounts() is preferred for checking existing connections in Ethers v6
                    const accounts = await provider.listAccounts(); 
                    if (accounts.length > 0) {
                        setAccount(accounts[0].address || accounts[0]);
                        setIsConnected(true);
                        // Send existing connection info to parent
                        onConnect && onConnect(accounts[0].address || accounts[0], provider);
                    }
                }
            } catch (err) {
                console.error("Error checking Ronin Wallet connection on mount:", err);
                // Do not set global error if just failed check on mount, wait for user action
            }
        };
        checkConnection();
    }, [onConnect]); // Dependency for useEffect


    return (
        // UPDATED: New wrapper div for the button AND the error message
        // This div is now the parent that controls their vertical alignment and spacing
        <div className="flex flex-col items-center"> 
            <button 
                onClick={isConnected ? disconnectWallet : connectWallet} 
                // Removed 'relative overflow-hidden' from button, as error is now outside it
                className={className} 
            >
                {isConnected ? (
                    <>
                        <img src="/assets/ronin_wallet_icon.png" alt="Ronin Wallet Icon" className="wallet-logo" />
                        {account ? `${account.substring(0, 6)}...${account.substring(account.length - 4)}` : 'Connected'}
                    </>
                ) : (
                    <>
                        {buttonText || 'Connect Ronin Wallet'}
                    </>
                )}
            </button>
            {/* UPDATED: Display error message *below* the button with margin-top */}
            {error && (
                <div className="mt-1 bg-red-700 text-white text-xl py-1 px-2 rounded text-center w-full max-w-xl">
                    {error}
                </div>
            )}
        </div>
    );
}

export default WalletConnectButton;