import React, { Component } from "react";
import { SeatType } from "../../data/constant";
import "./index.scss";

export default class Seat extends Component {
  shouldComponentUpdate(nextProps) {
    return nextProps.seat_type !== this.props.seat_type;
  }

  checkSeatType = (seat_type, content, handleClick) => {
    switch (seat_type) {
      case SeatType.DELUXE:
        return <div className="seat deluxe" onClick={handleClick} />;
      case SeatType.STANDARD:
        return <div className="seat standard" onClick={handleClick} />;
      case SeatType.SELECTED:
        return <div className="seat selected" />;
      case SeatType.SELECTING:
        return (
          <div className="seat selecting" onClick={handleClick}>
            {content}
          </div>
        );
      case SeatType.VIP:
        return <div className="seat vip" onClick={handleClick} />;
      default:
        return <div className="seat disabled" />;
    }
  };

  render() {
    const { seat_type, isLabel, content, handleClick } = this.props;
    if (isLabel) {
      return <div className="seat label">{content}</div>;
    }

    return this.checkSeatType(seat_type, content, handleClick);
  }
}
