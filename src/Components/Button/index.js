import React, { Component } from "react";
import "./index.scss";

export default class Button extends Component {
  render() {
    const { icon, handleClick, color } = this.props;
    return (
      <button
        className="btn"
        onClick={handleClick}
        style={{ backgroundColor: color }}
      >
        {icon}
      </button>
    );
  }
}
