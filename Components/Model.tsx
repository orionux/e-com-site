import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h2>{title}</h2>
          <button className="close-btn" onClick={onClose}>
            &times;
          </button>
        </div>
        <div className="modal-body">{children}</div>
      </div>
      <style jsx>{`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }

        .modal-content {
          background: white;
          padding: 10px;
          border-radius: 5px;
          width: 80%;
          max-width: 100%;
          position: relative;
          height: 420px;
    overflow-y: scroll;
        }

        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: relative;
        }

        .close-btn {
          background: none;
          border: none;
          font-size: 1.5rem;
          cursor: pointer;
          position: absolute;
          top: 0; 
          right: 0;
        }

        .modal-body {
          margin-top: 20px;
          padding: 20px !important;
        }
      `}</style>
    </div>
  );
};

export default Modal;
