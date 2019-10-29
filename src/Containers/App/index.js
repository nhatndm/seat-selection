import React, { Component } from "react";
import { seats } from "../../data";
import AppPresenter from "../../Presentations/App";

export default class AppContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    const fakeData = seats();
    this.setState({ data: fakeData });
  }

  render() {
    const { data } = this.state;
    return <AppPresenter dataSource={data} />;
  }
}
