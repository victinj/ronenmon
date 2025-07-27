import React from 'react';
import PlayerInfoCard from './PlayerInfoCard';

function BattleScreen({ player, navigateTo }) {
  const handleExit = () => {
    navigateTo('mainMenu');
  };

  return (
    <div
      id="battle-screen"
      className="w-full h-full bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/image/battlearenaBackground.png')" }}
    >
      <div className="absolute top-5 left-5">
        <button
          onClick={handleExit}
          className="px-4 py-2 flex items-center gap-2 text-white text-lg font-bold"
        >
          <img src="/assets/image/exitLogo.png" alt="Exit" className="w-10 h-10" />
          EXIT
        </button>
      </div>

      <div className="flex justify-center items-center h-full">
        <h1 className="text-white text-5xl font-bold">Battle Screen Placeholder</h1>
      </div>

      {/* Player's Monster */}
      <div className="absolute bottom-20 left-20">
        <img src="/assets/image/Monster/fireheart-monsterLogo.png" alt="Player's Monster" className="w-48 h-48" />
      </div>

      {/* Opponent's Monster */}
      <div className="absolute top-20 right-20">
        <img src="/assets/image/Monster/chillguy-monsterLogo.png" alt="Opponent's Monster" className="w-48 h-48" />
      </div>
    </div>
  );
}

export default BattleScreen;
