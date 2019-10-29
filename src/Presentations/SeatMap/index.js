import React from "react";
import { Seat } from "../../Components/Seat";
import { ContentType } from "../../data";
import "./index.scss";

const HorizontalSeat = ({ seats }) => {
  return seats.map(seat => {
    if (seat.type === ContentType.LABEL) {
      return <Seat key={seat.id} content={seat.content} isLabel />;
    }

    return (
      <Seat key={seat.id} content={seat.content} seat_type={seat.seat_type} />
    );
  });
};

const VerticalSeat = ({ seats }) => {
  return (
    <div className="vertical-seat">
      <HorizontalSeat seats={seats} />
    </div>
  );
};

export const SeatMap = ({ dataSource }) => {
  return dataSource.map(item => {
    return <VerticalSeat key={item.id} seats={item.data} />;
  });
};
