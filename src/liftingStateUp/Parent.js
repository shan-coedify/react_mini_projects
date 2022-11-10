import React from "react";
import Form from "./Form";
function Parent() {
  const getData = (data) => {
    console.log("Coming from child component", data);
  };
  return (
    <div>
      <Form onSubmit={getData} />
    </div>
  );
}

export default Parent;
