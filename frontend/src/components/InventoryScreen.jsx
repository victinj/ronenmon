import React from 'react';

function InventoryScreen({ player, navigateTo }) {
  const handleBack = () => {
    navigateTo('mainMenu');
  };

  return (
    <div className="game-screen active">
      <h1 className="text-3xl font-bold underline text-white">
        Inventory Screen
      </h1>
      <button
        onClick={handleBack}
        className="absolute top-4 left-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Back to Main Menu
      </button>
      {/* Inventory content will go here */}
    </div>
  );
}

export default InventoryScreen;
