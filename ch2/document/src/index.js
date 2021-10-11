import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import Event from "./components/2-7-event/Event";
// import Condition from "./components/2-8-ConditionalRendering/Condition";
import ControlledFormComponent from "./components/2-10-form/ControlledFormComponent";

ReactDOM.render(
  <React.StrictMode>
    <ControlledFormComponent />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
