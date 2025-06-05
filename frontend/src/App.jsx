import React, { useState } from 'react';
import InitialPage from './pages/InitialPage';
import HomePage from './pages/HomePage';
import WalletModal from './components/modals/WalletModal';
// import MonsterPage from './pages/MonsterPage'; // Future import
// import BattlePage from './pages/BattlePage';   // Future import

// #############################################################################
// #  Main App Component (Router)
// #############################################################################
function App() {
  const [currentPage, setCurrentPage] = useState('initial'); // 'initial', 'home', 'monster', 'battle'
  const [showWalletModal, setShowWalletModal] = useState(false);
  const [userWalletAddress, setUserWalletAddress] = useState(null); // Store connected wallet address

  const navigateTo = (page) => {
    setCurrentPage(page);
  };

  const handleShowWallet = () => {
    setShowWalletModal(true);
  };

  const handleCloseWallet = () => {
    setShowWalletModal(false);
  };

  // Callback for WalletModal to update App's state
  const handleWalletConnect = (address) => {
    setUserWalletAddress(address);
    if (address) {
      console.log("App: Wallet connected with address:", address);
    } else {
      console.log("App: Wallet disconnected.");
    }
  };

  // Render page based on currentPage state
  const renderPage = () => {
    switch (currentPage) {
      case 'initial':
        return <InitialPage onNavigate={navigateTo} onShowWallet={handleShowWallet} />; // Added onShowWallet
      case 'home':
        return <HomePage 
                  onNavigate={navigateTo} 
                  onShowWallet={handleShowWallet} 
                  connectedWalletAddress={userWalletAddress} 
                />;
      default:
        return <InitialPage onNavigate={navigateTo} onShowWallet={handleShowWallet} />;
    }
  };

  return (
    <>
      {renderPage()}
      <WalletModal
        isVisible={showWalletModal}
        onClose={handleCloseWallet}
        onConnectWallet={handleWalletConnect} 
      />
    </>
  );
}

export default App;