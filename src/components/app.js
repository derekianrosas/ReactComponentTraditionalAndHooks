import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavigationBar from "./navigation/nav-bar";

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
        <Router>
          <NavigationBar />
          <Switch>
            <Route path="/hide-me" component={HideMe} />
            <Route path="/align-me" component={AlignMe} />
            <Route path="/incrementer" component={Incrementer} />
            <Route path="/font-toggle" component={FontToggle} />
            <Route path="/color-me" component={ColorMe} />
            <Route path="/clock" component={Clock} />
          </Switch>
        </Router>
      </div>
    );
  }
}
