import React, { Component } from "react";
import Letter from "./letter";

class Solution extends Component {
  IsLetterChosen(letter) {
    if (this.props.letters[letter]) {
      return letter;
    }
    return "_";
  }
  render() {
    return (
      <div>
        {this.props.solution.word.split("").map((letter) => (
          <Letter letter={this.IsLetterChosen(letter)} />
        ))}
        <div>Hint: {this.props.solution.hint}</div>
      </div>
    );
  }
}

export default Solution;
