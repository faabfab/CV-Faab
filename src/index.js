import React from "react";
import ReactDOM from "react-dom/client";
import "./scss/cv/index.scss";
import Cv from "./pages/Cv";
import reportWebVitals from "./reportWebVitals";
// import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/fontawesome.min.css";
import "https://kit.fontawesome.com/c211974a1b.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Cv />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
