import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.module.scss";
import { RouterProvider } from "react-router";
import { router } from "./constants/routes.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);
