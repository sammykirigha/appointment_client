import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store";
import { NavigationProvider } from "./contexts/Navigation.Context";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <NavigationProvider>
          <App />
        </NavigationProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
