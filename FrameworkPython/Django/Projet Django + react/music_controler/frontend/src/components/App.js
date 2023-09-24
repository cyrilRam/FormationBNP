import React, { Component } from "react";
import { render } from "react-dom";


export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <h1>
        Je suis cissou le dinguo qui sent bon comme lena
      </h1>
    );
  }
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);