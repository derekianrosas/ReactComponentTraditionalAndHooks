import React, { Component } from "react";

export default class FontToggle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clicks: 0,
      show: true,
    };
  }

  fontBigger = () => {
    this.setState({
      clicks: this.state.clicks + 1,
    });
  };

  fontSmaller = () => {
    this.setState({ clicks: this.state.clicks - 1 });
  };

  clickCounter = () => {
    this.setState({ show: !this.state.show });
  };

  onUserChange = (event) => {
    this.setState({
      clicks: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <h2 style={{ fontSize: `${this.state.clicks}px` }}>
          {this.state.clicks}px
        </h2>
        <input
          type="text"
          name="clicks"
          value={this.state.clicks}
          placeholder="number"
          onChange={this.onUserChange}
        ></input>
        <button onClick={this.fontBigger}>Bigger</button>
        <button onClick={this.fontSmaller}>Smaller</button>
      </div>
    );
  }
}
