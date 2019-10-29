import { random } from "faker";
import { SeatType, Alphas, ContentType } from "./constant";

const SeatTypeDisbled = [{ type: SeatType.DISABLED, price: 0 }];

const SeatTypeDisSelecArr = [{ type: SeatType.SELECTED, price: 0 }];

const SeatTypeStandArr = [
  ...SeatTypeDisSelecArr,
  { type: SeatType.STANDARD, price: 60000 }
];

const SeatTypeVipArr = [
  ...SeatTypeDisSelecArr,
  { type: SeatType.VIP, price: 90000 }
];

const SeatTypeDeluxArr = [
  ...SeatTypeDisSelecArr,
  { type: SeatType.DELUXE, price: 110000 }
];

const getSeatTypePrice = (array, maxNumber) => {
  let randomNumber = random.number(maxNumber);
  let SeatTypeFromArr = array[randomNumber].type;
  let SeatPriceFromArr = array[randomNumber].price;

  return {
    type: SeatTypeFromArr,
    price: SeatPriceFromArr
  };
};

const objectSeat = (id, content, type, seat_type, price = 0) => {
  return {
    id: id,
    content: content,
    type: type,
    seat_type: seat_type,
    price: price
  };
};

export const seats = () => {
  const MaxSeats = 20;
  const HorizontalSeats = verIndex => {
    return {
      id: random.uuid(),
      data: Array.from(Array(MaxSeats), (horItem, horIndex) => {
        if (
          horIndex === 19 ||
          ((verIndex === 0 && horIndex === 18) ||
            (verIndex === 2 && horIndex === 19) ||
            (verIndex === 3 && horIndex === 18) ||
            (verIndex === 6 && horIndex === 19) ||
            (verIndex === 9 &&
              (horIndex === 16 || horIndex === 17 || horIndex === 18)) ||
            (verIndex === 10 &&
              (horIndex === 16 || horIndex === 17 || horIndex === 18)))
        ) {
          const standSeat = getSeatTypePrice(SeatTypeDisbled, 0);
          return objectSeat(
            random.uuid(),
            horIndex,
            ContentType.SEAT,
            standSeat.type,
            standSeat.price
          );
        }

        if (horIndex === 0) {
          return objectSeat(
            random.uuid(),
            Alphas[verIndex],
            ContentType.LABEL,
            null
          );
        }

        if (verIndex >= 0 && verIndex <= 4) {
          const standSeat = getSeatTypePrice(SeatTypeStandArr, 1);
          return objectSeat(
            random.uuid(),
            horIndex,
            ContentType.SEAT,
            standSeat.type,
            standSeat.price
          );
        }

        if (verIndex >= 5 && verIndex <= 9) {
          const vipSeat = getSeatTypePrice(SeatTypeVipArr, 1);
          return objectSeat(
            random.uuid(),
            horIndex,
            ContentType.SEAT,
            vipSeat.type,
            vipSeat.price
          );
        }

        const deluxeSeat = getSeatTypePrice(SeatTypeDeluxArr, 1);
        return objectSeat(
          random.uuid(),
          horIndex,
          ContentType.SEAT,
          deluxeSeat.type,
          deluxeSeat.price
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
  movie: "Spider - man: Far From Home",
  seat_map: seats()
};
