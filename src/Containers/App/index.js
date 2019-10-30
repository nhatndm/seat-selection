import React, { Component } from "react";
import { fakeDB, SeatType } from "../../data";
import AppPresenter from "../../Presentations/App";
import { SeatMapProvider } from "../../Context";

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
          } else {
            if (state.backup_array.length < 6) {
              newBackupArray = state.backup_array.concat(
                Object.assign({}, seat)
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
        backup_array: newBackupArray ? newBackupArray : state.backup_array
      };
    });
  };

  render() {
    const { seat_map, movie } = this.state;
    return (
      <SeatMapProvider
        value={{
          handleSelectSeat: this.handleSelectedSeat
        }}
      >
        <AppPresenter dataSource={seat_map} movie={movie} />;
      </SeatMapProvider>
    );
  }
}
