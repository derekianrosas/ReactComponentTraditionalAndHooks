import React, { Component } from "react";

export default class Incrementer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clicks: 0,
      show: true,
    };
  }

  numberBigger = () => {
    this.setState({
      clicks: this.state.clicks + 1,
    });
  };

  numberSmaller = () => {
    this.setState({ clicks: this.state.clicks - 1 });
  };

  clickCounter = () => {
    this.setState({ show: !this.state.show });
  };

  render() {
    return (
      <div>
        <h2>{this.state.clicks}</h2>
        <button onClick={this.numberBigger}>Up</button>
        <button onClick={this.numberSmaller}>Down</button>
      </div>
    );
  }
}
