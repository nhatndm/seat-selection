import React, { Component } from "react";
import "./index.scss";
import { SeatMap } from "../../Components/SeatMap";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import Alert from "../../Components/Alert";

export default class App extends Component {
  render() {
    const { dataSource, movie, price, showAlert, alertMessage } = this.props;
    return (
      <div className="app container">
        <Header movie={movie} />
        <Alert show={showAlert} message={alertMessage} />
        <SeatMap dataSource={dataSource} />
        <Footer price={price} />
      </div>
    );
  }
}
