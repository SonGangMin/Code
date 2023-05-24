import React, { Component } from "react";
import Dropdown from "./Dropdown";
import SassComponent from "./SassComponent";
import "./App.css";
import CSSModule from "./CSSModule";
import StyledComponent from "./StyledComponent";

export default class App extends Component {
  render() {
    return (
      <div>
        <SassComponent />
        <hr />
        <br />
        <Dropdown />
        <hr />
        <br />
        <CSSModule />
        <hr />
        <br />
        <StyledComponent />
      </div>
    );
  }
}
