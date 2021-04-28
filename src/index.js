import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

function App2() {
  return (
    <>
      <h1> Babuaa </h1>
    </>
  );
}
//create a constant  property for adding document to root
const rootElement = document.getElementById("root");

//Rendering  the document for display
ReactDOM.render(
  <>
    <App2 />,
    <App />
  </>,
  rootElement
);
