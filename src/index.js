import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

export const MovieContext = createContext();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MovieContext.Provider value="44943">
      <App />
    </MovieContext.Provider>
  </React.StrictMode>
);
