import React from "react";
import { Component } from "react";
import { connect } from "react-redux";
import { Column } from "../pin/Pin-Styling";
import PinsList from "../pin/PinsList";

class BoardDisplay extends Component {
  renderBoardPins = () => {
    const boardId = this.props.match.params.id;
    return this.props.pins
      .filter((pin) =>
        pin ? parseInt(pin.board_id) === parseInt(boardId) : null
      )
      .map((pin) => {
        return <PinsList key={pin.id} {...pin} />;
      });
  };
  render() {
    return <Column>{this.renderBoardPins()}</Column>;
  }
}

// display something if no pins exist yet.
const mapStateToProps = (state) => ({
  pins: state.pins.pins,
});

export default connect(mapStateToProps)(BoardDisplay);
