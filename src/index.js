import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./app/store";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter basename={window.location.pathname || ""}>
    {/* <BrowserRouter basename={process.env.PUBLIC_URL}> */}
    {/* wrapping the component tree using React-Redux provider makes the redux store available */}
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
