import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

var App = () => (
  <div className="App">
    <h1>Name Tag Generator</h1>
  </div>
);

var rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
