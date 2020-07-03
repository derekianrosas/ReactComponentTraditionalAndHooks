import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router";

const NavigationBar = (props) => {
  const dynamicLink = (route, linkText) => {
    return (
      <div className="nav-link-wrapper">
        <NavLink to={route} activeClassName="nav-link-active">
          {linkText}
        </NavLink>
      </div>
    );
  };

  return (
    <div className="nav-wrapper">
      <div className="nav-link-wrapper">
        <NavLink exact to="/" activeClassName="nav-link-active">
          Home
        </NavLink>
      </div>
      <div className="nav-link-wrapper">
        <NavLink exact to="/hide-me" activeClassName="nav-link-active">
          Hide Me
        </NavLink>
      </div>
      <div className="nav-link-wrapper">
        <NavLink exact to="/hide-me-hook" activeClassName="nav-link-active">
          Hide Me Hook
        </NavLink>
      </div>
      <div className="nav-link-wrapper">
        <NavLink exact to="/align-me" activeClassName="nav-link-active">
          Align Me
        </NavLink>
      </div>
      <div className="nav-link-wrapper">
        <NavLink exact to="/alignment-hook" activeClassName="nav-link-active">
          Alignment-Hook
        </NavLink>
      </div>
      <div className="nav-link-wrapper">
        <NavLink exact to="/incrementer" activeClassName="nav-link-active">
          Incrementer
        </NavLink>
      </div>
      <div className="nav-link-wrapper">
        <NavLink exact to="/incrementer-hook" activeClassName="nav-link-active">
          Incrementer Hook
        </NavLink>
      </div>
      <div className="nav-link-wrapper">
        <NavLink exact to="/font-toggle" activeClassName="nav-link-active">
          Font Toggle
        </NavLink>
      </div>
      <div className="nav-link-wrapper">
        <NavLink exact to="/font-toggle-hook" activeClassName="nav-link-active">
          Font Toggle Hook
        </NavLink>
      </div>
      <div className="nav-link-wrapper">
        <NavLink exact to="/color-me" activeClassName="nav-link-active">
          Color Me
        </NavLink>
      </div>
      <div className="nav-link-wrapper">
        <NavLink exact to="/color-me-hook" activeClassName="nav-link-active">
          Color Me Hook
        </NavLink>
      </div>
      <div className="nav-link-wrapper">
        <NavLink exact to="/clock" activeClassName="nav-link-active">
          Clock
        </NavLink>
      </div>
      <div className="nav-link-wrapper">
        <NavLink exact to="/clock-hook" activeClassName="nav-link-active">
          Clock Hook
        </NavLink>
      </div>
    </div>
  );
};

export default withRouter(NavigationBar);
