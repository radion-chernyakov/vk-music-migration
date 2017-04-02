// @flow
import React from "react";
import { render } from "react-dom";
import "../css/popup.css";
import Popup from './popup/greeting'
import { VkImport, isVkAudioTab } from './popup/vk-import'

chrome.tabs.query({
  active: true,
  currentWindow: true
}, ([tab]: Array<chrome$Tab>) => {
  if (isVkAudioTab(tab)) {
    render(
      <VkImport />,
      window.document.getElementById("app-container")
    );
  }
  else {
    render(
      <Popup/>,
      window.document.getElementById("app-container")
    )
  }
})