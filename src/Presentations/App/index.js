import React, { Component } from "react";
import "./index.scss";
import { seats } from "../../data";

export default class App extends Component {
  state = {
    data: []
  };

  componentDidMount() {
    const data = seats();
    this.setState({ data: data });
  }

  render() {
    return <div> this is seat selection</div>;
  }
}
