import React, { Component } from "react";
import Seat from "../../../Components/Seat";
import { SeatType } from "../../../data";
import "./index.scss";

export default class Footer extends Component {
  render() {
    const { price } = this.props;
    return (
      <div className="footer">
        <div className="seat-detail-wrapper">
          <div className="seat-detail selected">
            <Seat seat_type={SeatType.SELECTED} />
            <p className="price-text">Selected</p>
          </div>
          <div className="seat-detail selecting">
            <Seat seat_type={SeatType.SELECTING} />
            <p className="price-text">Selecting</p>
          </div>
          <div className="seat-detail standard">
            <Seat seat_type={SeatType.STANDARD} />
            <p className="price-text">Standard - 60.000</p>
          </div>
          <div className="seat-detail vip">
            <Seat seat_type={SeatType.VIP} />
            <p className="price-text">VIP - 90.000</p>
          </div>
          <div className="seat-detail deluxe">
            <Seat seat_type={SeatType.DELUXE} />
            <p className="price-text">Deluxe - 110.000</p>
          </div>
        </div>
        <div className="seat-total-price">
          <p>Price: {price.toLocaleString()} VND</p>
        </div>
      </div>
    );
  }
}
