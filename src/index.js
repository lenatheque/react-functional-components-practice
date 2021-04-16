import React from "react";
import ReactDOM from "react-dom";
import NameTag from "./NameTag.js";
import { names } from "./data.js";
import "./styles.css";

var renderNameTag = (name) => <NameTag name={name.personname} key={name.id} />;

var App = () => {
  var NameTagElements = names.map(renderNameTag);
  return (
    <div className="App">
      <h1>Name Tag Generator</h1>
      {NameTagElements}
    </div>
  );
};

var rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
