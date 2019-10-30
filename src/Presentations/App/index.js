import React, { Component } from "react";
import "./index.scss";
import { SeatMap } from "../../Components/SeatMap";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";

export default class App extends Component {
  render() {
    const { dataSource, movie, price } = this.props;
    return (
      <div className="app container">
        <Header movie={movie} />
        <SeatMap dataSource={dataSource} />
        <Footer price={price} />
      </div>
    );
  }
}
