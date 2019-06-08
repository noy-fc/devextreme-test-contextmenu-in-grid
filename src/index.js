import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import App from "./App";
import "devextreme/dist/css/dx.common.css";
import "devextreme/dist/css/dx.softblue.css";
// import 'devextreme/dist/css/dx.light.css';

function MainApp() {
  return <App />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<MainApp />, rootElement);
