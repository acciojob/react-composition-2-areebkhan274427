import React from "react";

function Modal({ show, onClose }) {
  return (
    <div className="model-overlay">
      {show ? (
        <>
          <button className="model-close" onClick={()=>onClose(!show)}>Close</button>
          <p>This is the content of the modal.</p>
        </>
      ) : (
        ""
      )}
    </div>
  );
}

export default Modal;
