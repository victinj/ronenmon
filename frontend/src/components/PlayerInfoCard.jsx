// src/components/PlayerInfoCard.jsx
import React from 'react';

/**
 * Reusable component to display player information (wallet address or resource count).
 * It takes a value and optional additional classes for styling.
 * The icon should be rendered by the parent component, outside this card.
 */
function PlayerInfoCard({ value, isWallet = false, additionalClasses = "" }) {
  return (
    <div className={`
      px-10px py-3px rounded-md-card bg-game-card-bg border-[3px] border-game-card-border 
      shadow-[0_2px_5px_rgba(0,0,0,0.4)] text-black flex items-center justify-center 
      font-irish-grover text-1-4em h-[30px]
      ${isWallet ? 'min-w-[150px]' : 'w-[150px]'} ${additionalClasses}
    `}>
      <span>{value}</span>
    </div>
  );
}

export default PlayerInfoCard;
