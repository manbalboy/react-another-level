import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Input from "./components/3-7.HOC/Input";
import Button from "./components/3-7.HOC/Button";

ReactDOM.render(
  <React.StrictMode>
    <Input />
    <br />
    <br />
    <Button />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
