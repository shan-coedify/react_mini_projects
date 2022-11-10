import React from "react";
import { useState } from "react";
function Form({ onSubmit }) {
  const [name, setName] = useState("");
  const handleChange = (e) => {
    setName(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(name);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={handleChange}></input>
        <button type="submit ">Submit</button>
      </form>
    </div>
  );
}

export default Form;
