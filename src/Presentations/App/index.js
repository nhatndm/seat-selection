import React, { Component } from "react";
import "./index.scss";
import { SeatMap } from "../../Presentations/SeatMap";

export default class App extends Component {
  render() {
    const { dataSource } = this.props;
    return (
      <div className="app container">
        <SeatMap dataSource={dataSource} />
      </div>
    );
  }
}
