import React from 'react';

// --- Asset Imports (assuming you have these) ---
import coinLogo from '/assets/image/coinLogo.png'; 

/**
 * A modal component for confirming the purchase of a new incubator slot.
 * @param {object} props
 * @param {boolean} props.isOpen - Controls if the modal is visible.
 * @param {function} props.onClose - Function to call when the modal should be closed.
 * @param {function} props.onConfirm - Function to call when the user confirms the purchase.
 * @param {number} props.cost - The cost of the new incubator slot.
 */
function IncubatorBuyModal({ isOpen, onClose, onConfirm, cost = 500 }) {
  if (!isOpen) {
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
          Purchase New Incubator
        </h2>

        {/* Body Content */}
        <p className="text-center text-gray-200 mb-6">
          Are you sure you want to purchase a new incubator slot? This will allow you to hatch another Roninmon simultaneously.
        </p>

        {/* Cost Display */}
        <div className="flex justify-center items-center bg-black/30 rounded-lg p-4 mb-8 border border-gray-600">
          <span className="text-lg font-bold mr-4">Cost:</span>
          <img src={coinLogo} alt="Coin" className="w-8 h-8 mr-2" />
          <span className="text-2xl font-irish-grover text-yellow-400">{cost}</span>
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
            className="px-8 py-3 bg-green-button hover:bg-green-600 rounded-lg font-bold transition-colors text-lg shadow-lg transform hover:scale-105"
          >
            Confirm Purchase
          </button>
        </div>
      </div>
    </div>
  );
}

export default IncubatorBuyModal;