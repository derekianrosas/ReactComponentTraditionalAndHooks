import React, { Component } from "react";

import HideMe from "./hide-me";
import AlignMe from "./align-me";
import Incrementer from "./incrementer";
import FontToggle from "./font-toggle";
import ColorMe from "./color-me";
import Clock from "./clock";

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <HideMe />
        <AlignMe />
        <Incrementer />
        <FontToggle />
        <ColorMe />
        <Clock />
      </div>
    );
  }
}
