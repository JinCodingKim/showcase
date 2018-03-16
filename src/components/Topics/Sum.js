import React, { Component } from "react";

class Sum extends Component {
  constructor() {
    super();

    this.state = {
      number1: 0,
      number2: 0,
      sum: null
    };

    this.updateInput = this.updateInput.bind(this);

    this.totalSum = this.totalSum.bind(this);
  }

  updateInput(key, val) {
    this.setState({
      [key]: val
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
          type="number"
          className="inputLine"
          onChange={e => this.updateInput("number1", e.target.value)}
        />
        <input
          type="number"
          className="inputLine"
          onChange={e => this.updateInput("number2", e.target.value)}
        />
        <button className="confirmationButton" onClick={this.totalSum}>
          Add
        </button>
        <span className="resultsBox">Sum: {this.state.sum}</span>
      </div>
    );
  }
}

export default Sum;
