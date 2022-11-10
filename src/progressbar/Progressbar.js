// import "./App.css";
import ProgressbarComponent from "./ProgressbarComponent";
function Progressbar() {
  return (
    <div className="App margin">
      <h3 className="heading">Progress Bar</h3>
      <ProgressbarComponent bgcolor="orange" progress="30" height={30} />
      <ProgressbarComponent bgcolor="red" progress="60" height={30} />
      {/* <ProgressbarComponent bgcolor="#99ff66" progress="50" height={30} />
      <ProgressbarComponent bgcolor="#ff00ff" progress="85" height={30} />
      <ProgressbarComponent bgcolor="#99ccff" progress="95" height={30} /> */}
    </div>
  );
}

export default Progressbar;
