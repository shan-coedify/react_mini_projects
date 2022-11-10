import React from "react";
import "./sidebar.css";
const Sidebar = () => {
  return (
    <div>
      <div className="quest">
        <div>
          <h3>Design SdeBar in React as shown below with functionalities :</h3>
          <div className="des">
            1. Has Routes Home, About us, Contact us ,Career, Services{" "}
          </div>
          <div className="des"> 2. Appear On Left side of the screen. </div>
          <div className="des"> 3. Hides when cursor not on it. </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
