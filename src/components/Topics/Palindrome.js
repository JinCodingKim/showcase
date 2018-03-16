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
    let revInput = this.state.userInput
      .split("")
      .reverse()
      .join("");
    if (this.state.userInput === revInput) {
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
        <button className="confirmationButton" onClick={this.palindromeResult}>
          Check
        </button>
        <span className="resultsBox">Palindrome: {this.state.palindrome} </span>
      </div>
    );
  }
}

export default Palindrome;
