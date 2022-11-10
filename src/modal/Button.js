import React from "react";
import "./modal.css";
import Modal from "./Modal";
import Message from "./Message";
import { useState } from "react";
function Button() {
  const [popUpMessage, setPopUpMessage] = useState(false);
  const [statusMessage, setStatusMessage] = useState(<div></div>);

  const handleModal = () => {
    setPopUpMessage(true);
    setStatusMessage(<Message />);
  };
  return (
    <div>
      <button className="button" onClick={handleModal}>
        modal open
      </button>
      {popUpMessage && (
        <Modal onclose={setPopUpMessage} innerContent={statusMessage} />
      )}
    </div>
  );
}

export default Button;
