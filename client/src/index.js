import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { PizzaProvider } from "./PizzaContext";
import { DataProvider } from "./DataContext";

ReactDOM.render(
  <React.StrictMode>
    <DataProvider>
      <PizzaProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PizzaProvider>
    </DataProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
