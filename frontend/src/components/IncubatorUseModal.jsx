import React from 'react';

// --- Asset Imports (assuming you have these) ---
import incubatorLogo from '/assets/image/incubatorLogo.png'; 

/**
 * A modal component for confirming the use of an incubator on an egg.
 * @param {object} props
 * @param {boolean} props.isOpen - Controls if the modal is visible.
 * @param {function} props.onClose - Function to call when the modal should be closed.
 * @param {function} props.onConfirm - Function to call when the user confirms the action.
 * @param {object} props.egg - The egg object to be incubated.
 */
function IncubatorUseModal({ isOpen, onClose, onConfirm, egg }) {
  if (!isOpen || !egg) {
    return null;
  }

  return (
    // Backdrop
    <div 
      className="fixed inset-0 bg-black/70 backdrop-blur-md flex justify-center items-center z-50"
      onClick={onClose}
    >
      {/* Modal Panel */}
      <div
        className="bg-gradient-to-b from-modal-gradient-dark via-modal-gradient-mid to-modal-gradient-light 
                   text-white rounded-2xl shadow-2xl p-8 max-w-md w-full border-2 border-modal-border"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
      >
        {/* Header */}
        <h2 className="text-3xl font-irish-grover text-center mb-4 text-shadow-heavy">
          Start Incubation
        </h2>

        {/* Body Content */}
        <p className="text-center text-gray-200 mb-6">
          You are about to place an egg in the incubator. The process will begin immediately.
        </p>

        {/* Egg Display */}
        <div className="flex flex-col items-center bg-black/30 rounded-lg p-4 mb-8 border border-gray-600">
          <img src={egg.image} alt={egg.name} className="w-24 h-24 mb-2 drop-shadow-lg" />
          <span className="text-xl font-bold">{egg.name}</span>
          <span className="text-sm text-gray-400">Incubation Time: 24 Hours</span>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center gap-6">
          <button
            onClick={onClose}
            className="px-8 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg font-bold transition-colors text-lg"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-8 py-3 bg-blue-selected hover:bg-blue-700 rounded-lg font-bold transition-colors text-lg shadow-lg transform hover:scale-105"
          >
            Start
          </button>
        </div>
      </div>
    </div>
  );
}

export default IncubatorUseModal;