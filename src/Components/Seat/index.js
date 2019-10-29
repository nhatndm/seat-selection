import React from "react";
import { SeatType } from "../../data/constant";
import "./index.scss";

export const Seat = ({ isLabel, seat_type, content }) => {
  const checkSeatType = () => {
    switch (seat_type) {
      case SeatType.DELUXE:
        return <div className="seat deluxe" />;
      case SeatType.STANDARD:
        return <div className="seat standard" />;
      case SeatType.SELECTED:
        return <div className="seat selected" />;
      case SeatType.SELECTING:
        return <div className="seat selecting">{content}</div>;
      case SeatType.VIP:
        return <div className="seat vip" />;
      default:
        return <div className="seat disabled" />;
    }
  };

  if (isLabel) {
    return <div className="seat label">{content}</div>;
  }

  return checkSeatType();
};
