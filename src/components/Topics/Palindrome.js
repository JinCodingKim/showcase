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
    let input = this.state.userInput.split("");
    let palindromeStr = "";
    for (let i = 0; i < input.length / 2; i++) {
      if (input[i] !== input[input.length - i - 1]) {
        palindromeStr = "false";
      }
    }
    palindromeStr = "true";
    this.setState({
      palindrome: palindromeStr
    });
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
