import React from "react";
import Seat from "../Seat";
import { ContentType } from "../../data";
import { SeatMapConsumer } from "../../Context";
import "./index.scss";

const HorizontalSeat = ({ seats, verticalSeatIndex }) => {
  return seats.map((seat, seatIndex) => {
    if (seat.type === ContentType.LABEL) {
      return <Seat key={seat.id} content={seat.content} isLabel />;
    }

    return (
      <SeatMapConsumer key={seat.id}>
        {({ handleSelectSeat }) => (
          <Seat
            content={seat.content}
            seat_type={seat.seat_type}
            handleClick={handleSelectSeat({
              seatSelectedIndex: seatIndex,
              verticalSeatIndex: verticalSeatIndex
            })}
          />
        )}
      </SeatMapConsumer>
    );
  });
};

const VerticalSeat = ({ seats, verticalSeatIndex }) => {
  return (
    <div className="vertical-seat">
      <HorizontalSeat seats={seats} verticalSeatIndex={verticalSeatIndex} />
    </div>
  );
};

export const SeatMap = ({ dataSource }) => {
  return (
    <div className="seat-map">
      {dataSource.map((item, itemIndex) => {
        return (
          <VerticalSeat
            key={item.id}
            seats={item.data}
            verticalSeatIndex={itemIndex}
          />
        );
      })}
    </div>
  );
};
