import React, { Component } from "react";
import "./index.scss";

export default class Alert extends Component {
  render() {
    const { message, show } = this.props;

    if (!show) return null;

    return <div className="alert alert-danger">{message}</div>;
  }
}
