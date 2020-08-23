import "../scss/main.scss";
import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  //   return <h1>This is my React App!</h1>;
  //   return <h1>Loving React!</h1>;
  //   return <h1>Styles!</h1>;
  return <h1>React Application!</h1>;
};

const appDiv = document.getElementById("app");

ReactDOM.render(<App />, appDiv);
