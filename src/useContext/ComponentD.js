import React from "react";
// import { Mycontext } from "./ComponentA";
import { Mycontext } from "./Context";

import { useContext } from "react";

function ComponentD() {
  const user = useContext(Mycontext);
  //   console.log("inside D", user);
  return (
    <div>
      <h1>ComponentD</h1>
      <h2>{`Hello ${user} again!`}</h2>
    </div>
  );
}

export default ComponentD;
