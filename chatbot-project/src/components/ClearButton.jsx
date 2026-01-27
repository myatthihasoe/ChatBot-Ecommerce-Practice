import { useState } from "react";
import "./ClearButton.css";

export default function ClearButton({
  chatMessages,
  setChatMessages,
  loading,
}) {
  const [showClearConfirm, setShowClearConfirm] = useState(false);
  function handleClearClick() {
    if (chatMessages.length === 0) return;
    setShowClearConfirm(true);
  }

  function confirmClear() {
    setChatMessages([]);
    setShowClearConfirm(false);
  }

  function cancelClear() {
    setShowClearConfirm(false);
  }
  return (
    <>
      {/* Confirmation Modal */}
      {showClearConfirm && (
        <div className="confirmation-modal-overlay" onClick={cancelClear}>
          <div className="confirmation-modal">
            <div className="modal-header">
              <h3>Clear Chat History</h3>
            </div>
            <div className="modal-body">
              <p>
                Are you sure you want to clear all chat messages? This action
                cannot be undone.
              </p>
            </div>
            <div className="modal-footer">
              <button
                className="modal-cancel-btn"
                onClick={cancelClear}
                autoFocus
              >
                Cancel
              </button>
              <button className="modal-confirm-btn" onClick={confirmClear}>
                Clear All
              </button>
            </div>
          </div>
        </div>
      )}

      <button
        className="clear-button"
        onClick={handleClearClick}
        disabled={loading}
      >
        Clear
      </button>
    </>
  );
}
