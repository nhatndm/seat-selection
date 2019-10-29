import { random } from "faker";
import { SeatType, Alphas, ContentType } from "./constant";

export const SeatTypeArr = [
  SeatType.VIP,
  SeatType.DELUXE,
  SeatType.DISABLED,
  SeatType.STANDARD,
  SeatType.SELECTED,
  SeatType.SELECTING
];

const objectSeat = (id, content, type, seat_type) => {
  return {
    id: id,
    content: content,
    type: type,
    seat_type: seat_type
  };
};

export const seats = () => {
  const MaxSeats = 20;
  const MaxRangeNumber = 5;

  const HorizontalSeats = verIndex => {
    return {
      id: random.uuid(),
      data: Array.from(Array(MaxSeats), (horItem, horIndex) => {
        if (horIndex === 0) {
          return objectSeat(
            random.uuid(),
            Alphas[verIndex],
            ContentType.LABEL,
            null
          );
        }

        return objectSeat(
          random.uuid(),
          horIndex,
          ContentType.SEAT,
          SeatTypeArr[random.number(MaxRangeNumber)]
        );
      })
    };
  };

  const VerticalSeats = Array.from(
    Array(Alphas.length),
    (verItem, verIndex) => {
      return HorizontalSeats(verIndex);
    }
  );

  return VerticalSeats;
};

export const fakeDB = {
  movie: "Spider-man: Far From Home",
  seat_map: seats()
};
