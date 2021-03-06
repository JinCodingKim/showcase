import React, { Component } from "react";

class EvenAndOdd extends Component {
  constructor() {
    super();

    this.state = {
      evenArray: [],
      oddArray: [],
      userInput: ""
    };

    this.inputUpdate = this.inputUpdate.bind(this);
    this.updateArrayValue = this.updateArrayValue.bind(this);
  }

  inputUpdate(val) {
    this.setState({
      userInput: val
    });
  }

  updateArrayValue() {
    this.setState({
      evenArray: this.state.userInput
        .split(",")
        .filter(val => val % 2 === 0)
        .join(),
      oddArray: this.state.userInput
        .split(",")
        .filter(val => val % 2 !== 0)
        .join()
    });
  }

  render() {
    return (
      <div className="puzzleBox evenAndOddPB">
        <h4>Evens And Odds</h4>
        <input
          className="inputLine"
          onChange={e => this.inputUpdate(e.target.value)}
        />
        <button className="confirmationButton" onClick={this.updateArrayValue}>
          Split
        </button>
        <span className="resultsBox">Evens: [{this.state.evenArray}]</span>
        <span className="resultsBox">Odds: [{this.state.oddArray}]</span>
      </div>
    );
  }
}
export default EvenAndOdd;
