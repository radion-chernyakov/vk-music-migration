import React from "react";
import { render } from "react-dom";
import "../css/popup.css";
import Popup from './popup/popup'

render(
  <Popup/>,
  window.document.getElementById("app-container")
);
