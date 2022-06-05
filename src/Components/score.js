import React, { Component } from "react";

class Score extends Component {
  setColor = () => {
    let color = this.props.color;
    switch (color) {
      case "green":
        return <span style={{ color: "green" }}>{this.props.score}</span>;
      case "yellow":
        return <span style={{ color: "yellow" }}>{this.props.score}</span>;
      case "red":
        return <span style={{ color: "red" }}>{this.props.score}</span>;
    }
  };
  render() {
    return <div>{this.setColor()}</div>;
  }
}

export default Score;
