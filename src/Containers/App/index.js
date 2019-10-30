import React, { Component } from "react";
import { fakeDB, SeatType } from "../../data";
import AppPresenter from "../../Presentations/App";
import { SeatMapProvider } from "../../Context";
import Zoom from "../../Components/Zoom";

export default class AppContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: "",
      seat_map: [],
      backup_array: [],
      price: 0
    };
    this.handleSelectedSeat = this.handleSelectedSeat.bind(this);
  }

  componentDidMount() {
    const fakeData = {
      movie: fakeDB.movie,
      seat_map: fakeDB.seat_map
    };
    this.setState(fakeData);
  }

  handleSelectedSeat = ({ seatSelectedIndex, verticalSeatIndex }) => e => {
    this.setState(state => {
      let newBackupArray;
      let newSeatMap;
      let price;

      newSeatMap = state.seat_map.map((item, verticalIndex) => {
        if (verticalIndex === verticalSeatIndex) {
          const seat = item.data[seatSelectedIndex];

          if (seat.seat_type === SeatType.SELECTING) {
            newBackupArray = state.backup_array.filter(backUpItem => {
              if (backUpItem.id === seat.id) {
                seat.seat_type = backUpItem.seat_type;
              }

              return backUpItem.id !== seat.id;
            });

            price = newBackupArray.reduce(
              (totalPrice, currentItem) => totalPrice + currentItem.price,
              0
            );
          } else {
            if (
              state.backup_array.length < 6 &&
              seat.seat_type !== SeatType.SELECTING
            ) {
              newBackupArray = state.backup_array.concat(
                Object.assign({}, seat)
              );

              price = newBackupArray.reduce(
                (totalPrice, currentItem) => totalPrice + currentItem.price,
                0
              );

              seat.seat_type = SeatType.SELECTING;
            }
          }
        }

        return item;
      });

      return {
        movie: state.movie,
        seat_map: newSeatMap,
        backup_array: newBackupArray ? newBackupArray : state.backup_array,
        price: price ? price : state.price
      };
    });
  };

  render() {
    const { seat_map, movie, price } = this.state;
    return (
      <SeatMapProvider
        value={{
          handleSelectSeat: this.handleSelectedSeat
        }}
      >
        <Zoom>
          <AppPresenter dataSource={seat_map} movie={movie} price={price} />
        </Zoom>
      </SeatMapProvider>
    );
  }
}
