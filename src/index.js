import React from "react";
import ReactDOM from "react-dom";
import NameTag from "./NameTag.js";
import "./styles.css";

var App = () => (
  <div className="App">
    <h1>Name Tag Generator</h1>
    <NameTag name="Jules" />
    <NameTag name="Marco" />
    <NameTag name="Lorena" />
  </div>
);

var rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
