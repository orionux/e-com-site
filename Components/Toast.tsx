import React, { useEffect, useState } from "react";

interface ToastProps {
  message: string;
  type: "success" | "error";
  onClose: () => void;
}

const Toast: React.FC<ToastProps> = ({ message, type, onClose }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      onClose();
    }, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  if (!visible) return null;

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw", 
        height: "100vh", 
        zIndex: 999999999, 
      }}
    >
      <div
        style={{
          color: "#333",
          backgroundColor: "#fff",
          borderRadius: "8px",
          zIndex: 1000,
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          display: "flex",
          position: "relative",
          justifyContent: "center",
          alignItems: "center",
          minWidth: "200px",
          maxWidth: "300px",
          minHeight: "150px",
          padding: "0px",
        }}
        className="d-flex flex-column"
      >
        <div
          className="d-flex w-100 position-absolute top-0 left-0"
          style={{
            backgroundColor: type === "success" ? "#28a745" : "#dc3545",
            height: "12px",
            borderTopLeftRadius: "8px",
            borderTopRightRadius: "8px",
          }}
        ></div>
        <button
          onClick={onClose}
          style={{
            backgroundColor: "transparent",
            border: "none",
            color: "#333",
            fontSize: "16px",
            marginLeft: "15px",
            marginTop: "0px",
            cursor: "pointer",
            zIndex: 9999,
            position: "absolute",
            top: "8px",
            right: "5px",
          }}
        >
          &times;
        </button>
        <span className="p-3 py-5">{message}</span>
        <button
          onClick={onClose}
          style={{
            backgroundColor: "#333",
            border: "none",
            color: "#fff",
            fontSize: "16px",
            marginLeft: "15px",
            marginTop: "0px",
            cursor: "pointer",
            zIndex: 9999,
            position: "absolute",
            bottom: "8px",
            right: "5px",
          }}
        >
          OK
        </button>
      </div>
    </div>
  );
};

export default Toast;
