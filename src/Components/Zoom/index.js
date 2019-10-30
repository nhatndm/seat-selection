import React, { Component } from "react";
import ReactPanZoom from "@ajainarayanan/react-pan-zoom";
import "./index.scss";
import Button from "../Button";
import { ReactComponent as PlusIcon } from "../../Assest/add.svg";
import { ReactComponent as MinusIcon } from "../../Assest/minus.svg";

export default class Zoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      zoom: 1,
      PosX: 0,
      PosY: 0,
      showZoomIn: true,
      showZoomOut: true
    };

    this.handleZoomIn = this.handleZoomIn.bind(this);
    this.handleZoomOut = this.handleZoomOut.bind(this);
  }

  handleZoomIn() {
    this.setState(state => {
      if (this.state.zoom === 1.75) {
        return {
          zoom: state.zoom + 0.25,
          showZoomIn: false
        };
      }

      if (this.state.zoom >= 1 && this.state.zoom < 2) {
        return {
          zoom: state.zoom + 0.25,
          showZoomOut: true
        };
      }
    });
  }

  handleZoomOut() {
    this.setState(state => {
      if (this.state.zoom === 1.25) {
        return {
          zoom: state.zoom - 0.25,
          showZoomOut: false
        };
      }

      if (this.state.zoom > 1) {
        return {
          zoom: state.zoom - 0.25,
          showZoomIn: true
        };
      }
    });
  }

  render() {
    const { children } = this.props;
    const { zoom, PosX, PosY, showZoomIn, showZoomOut } = this.state;
    return (
      <div className="zoom">
        <div className="tools">
          <Button
            color="#0061b0"
            handleClick={this.handleZoomIn}
            icon={<PlusIcon className="icon-16 fill-white" />}
            show={showZoomIn}
          />
          <Button
            color="#00724e"
            handleClick={this.handleZoomOut}
            icon={<MinusIcon className="icon-16 fill-white" />}
            show={showZoomOut}
          />
        </div>

        <ReactPanZoom zoom={zoom} pandx={PosX} pandy={PosY}>
          {children}
        </ReactPanZoom>
      </div>
    );
  }
}
