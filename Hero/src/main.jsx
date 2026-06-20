/*
Purpose:
React entry point for the Vite application.

Logic:
- Mounts the main App component into the root element.
*/

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);