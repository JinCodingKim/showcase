import React, { Component } from "react";

class FilterString extends Component {
  constructor() {
    super();

    this.state = {
      unfilteredArray: ["Josh", "Jin", "Ron", "Billy", "Tyler"],
      userInput: "",
      filteredArray: []
    };

    this.inputUpdate = this.inputUpdate.bind(this);
    this.filteredString = this.filteredString.bind(this);
  }

  inputUpdate(val) {
    this.setState({
      userInput: val
    });
  }

  filteredString() {
    let unfiltered = this.state.unfilteredArray;
    let input = this.state.userInput;
    let filtered = [];
    for (let i = 0; i < unfiltered.length; i++) {
      if (unfiltered[i].includes(input)) {
        filtered.push(unfiltered[i]);
      }
    }
    this.setState({
      filteredArray: filtered
    });
  }

  render() {
    return (
      <div className="puzzleBox filterStringPB">
        <h4 className="Filter String">Filter String</h4>
        <span className="puzzleText">
          Names: {JSON.stringify(this.state.unfilteredArray)}
        </span>
        <input
          className="inputLine"
          onChange={e => this.inputUpdate(e.target.value)}
        />
        <button
          className="confirmationButton"
          onClick={() => this.filteredString(this.state.userInput)}
        >
          Filter
        </button>
        <span className="resultsBox filterStringRB">
          Filtered Names: {JSON.stringify(this.state.filteredArray)}
        </span>
      </div>
    );
  }
}

export default FilterString;
