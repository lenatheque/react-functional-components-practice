import React, { Component } from "react";
import ReactDOM from "react-dom";
import NameTag from "./NameTag.js";
import "./styles.css";

var renderNameTag = (name) => <NameTag name={name} key={name} />;

class App extends Component {
  state = { names: ["Erin", "Ann", "Nichole", "Sharon", "Maryn"] };
  render() {
    var NameTagElements = this.state.names.map(renderNameTag);
    return (
      <div className="App">
        <h1>Name Tag Generator</h1>
        {NameTagElements}
      </div>
    );
  }
}

var rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
