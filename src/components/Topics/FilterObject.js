import React, { Component } from "react";

class FilterObject extends Component {
  constructor() {
    super();

    this.state = {
      unFilteredArray: [
        {
          name: "Jin",
          age: 26,
          location: "Dallas",
          eyeColor: "Brown"
        },
        {
          name: "Huong",
          age: 22,
          occupation: "College Student",
          height: "5'2"
        },
        { name: "Billy", occupation: "Janitor", hairColor: "Brown" }
      ],
      userInput: "",
      filteredArray: []
    };

    this.updateInput = this.updateInput.bind(this);
    this.updateArray = this.updateArray.bind(this);
  }

  updateInput(val) {
    this.setState({
      userInput: val
    });
  }

  updateArray() {
    let original = this.state.unFilteredArray;
    let filtered = [];
    filtered = original.filter(val => val.hasOwnProperty(this.state.userInput));
    this.setState({
      filteredArray: filtered
    });
  }

  render() {
    return (
      <div className="puzzleBox filterObjectPB">
        <h4>Filter Object</h4>
        <span className="puzzleText">
          Original: {JSON.stringify(this.state.unFilteredArray)}
        </span>
        <input
          className="inputLine"
          onChange={e => this.updateInput(e.target.value)}
        />
        <button
          className="confirmationButton"
          onClick={() => this.updateArray(this.state.userInput)}
        >
          Filter
        </button>
        <span className="resultsBox filterObjectRB">
          Filtered: {JSON.stringify(this.state.filteredArray)}
        </span>
      </div>
    );
  }
}

export default FilterObject;
