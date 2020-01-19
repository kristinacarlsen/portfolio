import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import App from "./App";

axios.defaults.baseURL = "http://localhost:3001"; // comment out this line on production
// axios.defaults.baseURL = 'UNCOMMENT THIS and put URL of your site on production';

ReactDOM.render(<App />, document.getElementById("root"));
