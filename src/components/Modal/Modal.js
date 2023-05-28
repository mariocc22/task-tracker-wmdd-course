// react
import React from "react";
import ReactDom from "react-dom";

// icons
import { FaTimes } from "react-icons/fa";

// inline styling
const MODAL_STYLES = {
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "#FFF",
  padding: "50px",
  zIndex: 1000,
  width: "30rem",
  borderRadius: "1rem",
};

const OVERLAY_STYLES = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, .7)",
  zIndex: 1000,
};

const CLOSE_ICON = {
  transform: "scale(1.5)",
  cursor: "pointer",
};

const TOP_ROW = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
};

const Modal = ({ children, open, onClose }) => {
  if (!open) return null;

  return ReactDom.createPortal(
    <>
      <div style={OVERLAY_STYLES} />
      <div style={MODAL_STYLES}>
        <div style={TOP_ROW}>
          <h3>Edit Task</h3>
          <FaTimes style={CLOSE_ICON} onClick={onClose} />
        </div>
        {children}
      </div>
    </>,
    document.getElementById("portal")
  );
};

export default Modal;
