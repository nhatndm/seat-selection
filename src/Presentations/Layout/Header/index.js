import React, { Component } from "react";
import "./index.scss";

export default class HeaderPresenter extends Component {
  render() {
    const { movie } = this.props;
    return (
      <div className="header-presenter">
        <p className="text movie-title">{movie}</p>
        <div className="screen-vector" />
        <p className="text screen-dis">SCREEN</p>
      </div>
    );
  }
}
