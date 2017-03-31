// @flow
import React from "react";

const getGreeting = () : string => 'Hello, find me on src/js/popup/greeting_component.jsx';

export default class extends React.Component {
  render () {
    return <p>{getGreeting()}</p>;
  }
};