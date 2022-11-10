import React from "react";
import ComponentB from "./ComponentB";
import { useState } from "react";
import { Mycontext } from "./Context";

function ComponentA() {
  const [user, setUser] = useState("Jesse Hall");
  // console.log(setUser, "setUser");
  // console.log("inside A", user);

  return (
    <div>
      <Mycontext.Provider value={user}>
        <h1>{`Hello ${user}!`}</h1>
        <ComponentB />
      </Mycontext.Provider>
    </div>
  );
}

export default ComponentA;
