import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import store from "./store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      {/* <PersistGate loading={null} persistor={Persistor}>

      </PersistGate> */}
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
