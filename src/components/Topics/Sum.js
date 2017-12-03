import React, { Component } from "react";

class Sum extends Component {
  constructor() {
    super();

    this.state = {
      number1: 0,
      number2: 0,
      sum: null
    };

    this.updateInput1 = this.updateInput1.bind(this);
    this.updateInput2 = this.updateInput2.bind(this);
    this.totalSum = this.totalSum.bind(this);
  }

  updateInput1(val) {
    this.setState({
      number1: val
    });
  }

  updateInput2(val) {
    this.setState({
      number2: val
    });
  }

  totalSum() {
    let num1 = parseInt(this.state.number1);
    let num2 = parseInt(this.state.number2);
    this.setState({
      sum: num1 + num2
    });
  }

  render() {
    return (
      <div className="puzzleBox sumPB">
        <h4>Sum</h4>
        <input
          className="inputLine"
          onChange={e => this.updateInput1(e.target.value)}
        />
        <input
          className="inputLine"
          onChange={e => this.updateInput2(e.target.value)}
        />
        <button
          className="confirmationButton"
          onClick={() => this.totalSum(this.state.number1, this.state.number2)}
        >
          Add
        </button>
        <span className="resultsBox">Sum:{this.state.sum} </span>
      </div>
    );
  }
}

export default Sum;
