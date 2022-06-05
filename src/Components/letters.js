import React, { Component } from "react";
import Letter from "./letter";

class Letters extends Component {
  IsLetterChosen(letter) {
    if (this.props.letters[letter]) return true;

    return false;
  }
  render() {
    return (
      <div>
        {Object.keys(this.props.letters).map((letter) => (
          <span>
            {this.IsLetterChosen(letter) ? (
              <Letter className="chosen" letter={letter} />
            ) : (
              <Letter clickEvent={this.props.clickEvent} letter={letter} />
            )}
          </span>
        ))}
      </div>
    );
  }
}

export default Letters;
