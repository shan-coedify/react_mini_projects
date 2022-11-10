import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  handleIncrement = () => {
    //const count = this.state.count;
    this.setState({ count: this.state.count + 1 });
  };

  handleDecrement = () => {
    //const count = this.state.count;
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.handleIncrement}> + </button>
        <button
          onClick={this.handleDecrement}
          style={{ margin: "10px" }}
        ></button>
      </div>
    );
  }
}

export default Counter;
