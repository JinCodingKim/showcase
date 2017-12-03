import React, { Component } from "react";

class SeekAndDestroy extends Component {
  constructor() {
    super();

    this.state = {
      hitBoard: [1, 6, 9, 3, 5, 7, 4, 2, 10],
      hitNumber: 7,
      hit1: 0,
      hitMemo: ""
    };

    this.hitUpdate1 = this.hitUpdate1.bind(this);
    this.changeBoard = this.changeBoard.bind(this);
  }

  hitUpdate1(val) {
    this.setState({
      hit1: val
    });
  }

  changeBoard() {
    if (this.state.hit1 == this.state.hitNumber) {
      this.setState({
        hitMemo: "YOU GOT THE NUMBER"
      });
    } else {
      this.setState({
        hitMemo: "Hit a different number"
      });
    }
  }

  render() {
    return (
      <div className="puzzleBox sumPB">
        <h4>Seek And Destroy</h4>
        <span className="puzzleText2">
          Try to guess and hit the number within the list
        </span>
        <span className="puzzleText">
          Board: {JSON.stringify(this.state.hitBoard)}
        </span>
        <input
          className="inputLine"
          onChange={e => this.hitUpdate1(e.target.value)}
        />
        <button
          className="confirmationButton"
          onClick={() => this.changeBoard(this.hitUpdate1)}
        >
          Hit
        </button>
        <span className="resultsBox">{this.state.hitMemo}</span>
      </div>
    );
  }
}

export default SeekAndDestroy;
