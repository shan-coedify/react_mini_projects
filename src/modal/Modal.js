import React from "react";

function Modal({ innerContent, onclose }) {
  return (
    <>
      <div className="modal-css"></div>
      <div className="Common-modal-css">
        <div className="Rectangle">
          <div className="modal-close-button" onClick={() => onclose(false)}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M18.3 5.71a.996.996 0 0 0-1.41 0L12 10.59 7.11 5.7A.996.996 0 1 0 5.7 7.11L10.59 12 5.7 16.89a.996.996 0 1 0 1.41 1.41L12 13.41l4.89 4.89a.996.996 0 1 0 1.41-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"
                fill="#404179"
              />
            </svg>

            {/* <img src={closeButton} class="cross-platformiconographyclose" /> */}
          </div>
          <div className="modal-inner-content">{innerContent}</div>
        </div>
      </div>
    </>
  );
}

export default Modal;
