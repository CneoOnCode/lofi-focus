import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./App";
import Code from "./pages/Code";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/math" element={<p>hi</p>} />
      <Route path="/english" element={<p>sadfsad</p>} />
      <Route path="/socials" element={<p>sadfsad</p>} />
      <Route path="/science" element={<p>sadfsad</p>} />
      <Route path="/coding" element={<Code />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
