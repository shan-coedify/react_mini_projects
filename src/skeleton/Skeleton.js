import React, { useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./skeleton.css";
const Skeletons = () => {
  const [datalist, setData] = useState("");
  const [body, setbody] = useState("");

  setTimeout(() => {
    setData("List of elements :");
    setbody(["a", "s", "d", "f", "g", "h", "j", "k", "l", "q", "w", "r"]);
  }, 5000);
  return (
    <div>
      <div className="mainContainer">
        <div>
          <h3>
            Diplay skeleton in React as shown below with functionalities :
          </h3>
          <div className="des"> 1. display loading if data no available </div>
          <div className="des"> 2. Render data in List (Title)</div>
        </div>
      </div>
      <div style={{ width: "400px", marginLeft: "450px", fontSize: "18px" }}>
        <h1>{datalist ? datalist : <Skeleton />}</h1>
        {body ? (
          body.map((val) => {
            return <div> {val}</div>;
          })
        ) : (
          <Skeleton count={12} />
        )}
      </div>
    </div>
  );
};

export default Skeletons;
