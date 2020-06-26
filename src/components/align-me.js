import React, { Component } from "react";

export default class AlignMe extends Component {
  constructor(props) {
    super(props);
    //your variables go here so they can be changed, that's what react looks for
    this.state = {
      buttonClick: "",
    };
    this.handleCenterButton = this.handleCenterButton.bind(this);
    this.handleLeftButton = this.handleLeftButton.bind(this);
    this.handleRightButton = this.handleRightButton.bind(this);
  }

  handleLeftButton() {
    this.setState({
      buttonClick: "left-align",
    });
  }
  handleCenterButton() {
    this.setState({
      buttonClick: "center-align",
    });
  }
  handleRightButton() {
    this.setState({
      buttonClick: "right-align",
    });
  }

  render() {
    return (
      <div>
        <h2 className={this.state.buttonClick}>Align me!</h2>
        <button onClick={() => this.handleLeftButton()}>Left</button>
        <button onClick={() => this.handleCenterButton()}>Center</button>
        <button onClick={() => this.handleRightButton()}>Right</button>
      </div>
    );
  }
}
