import React, { Component } from "react";

export default class ColorMe extends Component {
  constructor(props) {
    super(props);

    this.state = {
      meColor: "",
      userText: "Color Me!",
    };
  }
  onColor = (event) => {
    this.setState({
      meColor: event.target.value,
    });
  };

  onUserText = (event) => {
    this.setState({
      userText: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <h2 style={{ color: `${this.state.meColor}` }}>
          {this.state.userText}
        </h2>
        <form>
          <input
            type="text"
            name="meColor"
            value={this.state.MeColor}
            placeholder="Color"
            onChange={this.onColor}
          ></input>
          <input
            type="text"
            name="userText"
            value={this.state.userText}
            onChange={this.onUserText}
            placeholder="colored text"
          ></input>
        </form>
      </div>
    );
  }
}
