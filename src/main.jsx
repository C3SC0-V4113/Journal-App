import React from "react";
import ReactDOM from "react-dom/client";
// import { JournalApp } from "./JournalApp.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import { AppRouter } from "./router/AppRouter.jsx";
import { AppTheme } from "./theme";
import { store } from "./store";

import "./styles.css";

const router = createBrowserRouter(AppRouter);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <AppTheme>
        <RouterProvider router={router} />
      </AppTheme>
    </Provider>
  </React.StrictMode>
);
