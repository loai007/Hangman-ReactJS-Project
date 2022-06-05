import React, { Component } from "react";
import "./letter.css";
class Letter extends Component {
  render() {
    return (
      <span>
        {this.props.className ? (
          <span class="chosen">{this.props.letter} </span>
        ) : (
          <span id={this.props.letter} onClick={this.props.clickEvent}>
            {this.props.letter}{" "}
          </span>
        )}
      </span>
    );
  }
}

export default Letter;
