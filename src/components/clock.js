import React, { Component } from "react";

export default class Clock extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      clockTime: new Date().toLocaleString(),
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        clockTime: new Date().toLocaleString(),
      });
    }, 1000);
  }

  render() {
    return (
      <div>
        <p>Current Time : {this.state.clockTime}</p>
      </div>
    );
  }
}
