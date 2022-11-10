import React from "react";
import { useEffect, useState } from "react";
import "./clockTimer.css";
// import "../common.css";

const ClockTimer = () => {
  const [hour, setHour] = useState(0);
  const [minutes, setMin] = useState(0);
  const [second, setSec] = useState(0);
  const [stop, setStop] = useState(false);

  let date = new Date();
  useEffect(() => {
    if (!stop) {
      let time = setInterval(() => {
        setHour(date.getHours());
        setMin(date.getMinutes());
        setSec(date.getSeconds());
      }, 1000);

      return () => {
        clearInterval(time);
      };
    } else {
      setHour(date.getHours());
      setMin(date.getMinutes());
      setSec(date.getSeconds());
    }
  }, [second, minutes, hour, stop]);

  const handleStart = () => {
    setStop(false);
  };
  const handleStop = () => {
    setStop(true);
  };
  return (
    <>
      <div className="quest"></div>
      <div className="wrap border-box">
        <div className="wrapper">
          <div className="d-flex">
            <div className="time-span">{hour}</div> :
            <div className="time-span">{minutes}</div> :
            <div className="time-span">{second}</div>
          </div>
        </div>
        <div className="wrapper" style={{ margin: "40px" }}>
          <button className="red" onClick={handleStop}>
            Stop
          </button>
          <button className="green" onClick={handleStart}>
            Start
          </button>
        </div>
      </div>
    </>
  );
};

export default ClockTimer;
