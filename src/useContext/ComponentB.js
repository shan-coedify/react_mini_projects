import React from "react";
import ComponentC from "./ComponentC";
function ComponentB() {
  // console.log("inside B");
  return (
    <div>
      <ComponentC />
    </div>
  );
}

export default ComponentB;
