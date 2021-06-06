import React from "react";
import { Component } from "react";
import { connect } from "react-redux";
import { getPins } from "../../redux/actions/pinsActions";
import PinsList from "../pin/PinsList";
import { Column } from "../../containers/Grid-Styling";

class BoardDisplay extends Component {
  componentDidMount() {
    this.props.getPins();
  }

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

const mapStateToProps = (state) => ({ pins: state.pins.pins });

export default connect(mapStateToProps, { getPins })(BoardDisplay);
