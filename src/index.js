import React from "react";
import ReactDOM from "react-dom";
// require("dotenv").config();
import { Provider } from "react-redux";
import store from "./store";
import App from "./App";

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root")
);
