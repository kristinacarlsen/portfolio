import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import App from "./App";
Axios.defaults.baseURL = "http://localhost:3000";
import "./index.css";
import Axios from "axios";

ReactDOM.render(<App />, document.getElementById("root"));
