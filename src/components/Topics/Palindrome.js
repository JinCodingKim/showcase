import React, { Component } from "react";

class Palindrome extends Component {
  constructor() {
    super();

    this.state = {
      userInput: "",
      palindrome: ""
    };

    this.updateInput = this.updateInput.bind(this);
    this.palindromeResult = this.palindromeResult.bind(this);
  }

  updateInput(val) {
    this.setState({
      userInput: val
    });
  }

  palindromeResult() {
    let input = this.state.userInput;
    let revInput = this.state.userInput
      .split("")
      .reverse()
      .join("");

    if (input === revInput) {
      this.setState({
        palindrome: "true"
      });
    } else {
      this.setState({
        palindrome: "false"
      });
    }
  }

  render() {
    return (
      <div className="puzzleBox filterStringPB">
        <h4 className="Palindrome">Palindrome</h4>
        <input
          className="inputLine"
          onChange={e => {
            this.updateInput(e.target.value);
          }}
        />
        <button
          className="confirmationButton"
          onClick={() => {
            this.palindromeResult(this.state.userInput);
          }}
        >
          Check
        </button>
        <span className="resultsBox">Palindrome: {this.state.palindrome} </span>
      </div>
    );
  }
}

export default Palindrome;
