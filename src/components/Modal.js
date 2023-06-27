import React from "react";

function Modal({ show, onClose }) {
  return (
    <div>
      {show ? (
        <>
          <button onClick={()=>onClose(!show)}>Close</button>
          This is the content of the modal.
        </>
      ) : (
        ""
      )}
    </div>
  );
}

export default Modal;
