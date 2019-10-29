import React, { Component } from "react";
import { fakeDB } from "../../data";
import AppPresenter from "../../Presentations/App";

export default class AppContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        movie: "",
        seat_map: []
      }
    };
  }

  componentDidMount() {
    const fakeData = {
      movie: fakeDB.movie,
      seat_map: fakeDB.seat_map
    };
    this.setState({ data: fakeData });
  }

  render() {
    const {
      data: { seat_map, movie }
    } = this.state;
    return <AppPresenter dataSource={seat_map} movie={movie} />;
  }
}
