import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import AllCars from "./AllCars.jsx";
import Deals from "./Deals.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <AllCars /> */}
    <Deals />
  </React.StrictMode>
);
