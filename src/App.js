import "./App.css";

import React, { Component } from "react";
import Solution from "./Components/solution";
import Score from "./Components/score";
import Letters from "./Components/letters";

class App extends Component {
  constructor() {
    super();
    this.state = {
      letterStatus: this.generateLetterStatuses(),
      solution: {
        word: "HELLO",
        hint: "thing you say when you see someone",
      },
      score: 100,
      scoreColor: "green",
    };
  }
  render() {
    return (
      <div>
        <Score color={this.state.scoreColor} score={this.state.score} />
        <Solution
          letters={this.state.letterStatus}
          solution={this.state.solution}
        />
        <Letters
          clickEvent={this.selectLetter}
          letters={this.state.letterStatus}
        />
      </div>
    );
  }

  updateScore = () => {
    let score = this.state.score;
    if (score <= 50) {
      this.setState({
        scoreColor: "red",
      });
    } else if (score <= 80) {
      this.setState({
        scoreColor: "yellow",
      });
    } else {
      this.setState({
        scoreColor: "green",
      });
    }
  };

  selectLetter = (letterElement) => {
    let letter = letterElement.target.id;
    let letters = { ...this.state.letterStatus };

    this.checkSelectedLetter(letter);
    letters[letter] = true;
    this.setState({
      letterStatus: letters,
    });
    this.updateScore();
  };

  checkSelectedLetter = (inputLetter) => {
    let solutionWordLetters = this.state.solution.word.split("");
    if (solutionWordLetters.includes(inputLetter)) {
      this.setState({
        score: this.state.score + 5,
      });
    } else {
      this.setState({
        score: this.state.score - 20,
      });
    }
  };

  generateLetterStatuses() {
    let letterStatus = {};
    for (let i = 65; i < 91; i++) {
      letterStatus[String.fromCharCode(i)] = false;
    }
    return letterStatus;
  }
}

export default App;
