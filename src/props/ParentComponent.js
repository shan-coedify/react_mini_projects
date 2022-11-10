import React from "react";
import { useState } from "react";
import ChildComponent from "./ChildComponent";
function ParentComponent() {
  const [state, setState] = useState("shan");
  const handleClick = () => {
    console.log("click");
    setState("Mohammad");
  };
  return (
    <div>
      <div>ParentComponent</div>
      <button type="button1" onClick={handleClick} className="button">
        Click Me!
      </button>
      <ChildComponent state={state} />
    </div>
  );
}

export default ParentComponent;
