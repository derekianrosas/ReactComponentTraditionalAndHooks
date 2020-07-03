import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavigationBar from "./navigation/nav-bar";

import HideMe from "./hide-me";
import AlignMe from "./align-me";
import Incrementer from "./incrementer";
import FontToggle from "./font-toggle";
import ColorMe from "./color-me";
import Clock from "./clock";
import Alignment from "./alignment-hook";
import HideMeHook from "./hide-me-hook";
import ColorMeHook from "./color-me-hook";
import FontToggleHook from "./font-toggle-hook";
import IncrementerHook from "./incremeneter-hook";
import ClockHook from "./clock-hook";

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <NavigationBar />
          <Switch>
            <Route path="/hide-me" component={HideMe} />
            <Route path="/hide-me-hook" component={HideMeHook} />
            <Route path="/align-me" component={AlignMe} />
            <Route path="/alignment-hook" component={Alignment} />
            <Route path="/incrementer" component={Incrementer} />
            <Route path="/incrementer-hook" component={IncrementerHook} />
            <Route path="/font-toggle" component={FontToggle} />
            <Route path="/font-toggle-hook" component={FontToggleHook} />
            <Route path="/color-me" component={ColorMe} />
            <Route path="/color-me-hook" component={ColorMeHook} />
            <Route path="/clock" component={Clock} />
            <Route path="/clock-hook" component={ClockHook} />
          </Switch>
        </Router>
      </div>
    );
  }
}
