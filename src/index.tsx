import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import { store } from "./modules/store";

import "decentraland-ui/lib/styles.css";
import { Routes } from "./components/Routes";

require("dotenv").config();

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById("root")
);
