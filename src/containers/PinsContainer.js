import React from "react";
import { Component } from "react";
import { connect } from "react-redux";
import PinsList from "../components/pin/PinsList";
import { getPins } from "../redux/actions/pinsActions";
import { Column } from "./Grid-Styling";

class PinsContainer extends Component {
  componentDidMount() {
    this.props.getPins();
  }

  render() {
    const { pins, loading } = this.props;
    return (
      <Column>
        {!loading ? (
          <>
            {pins.map((pin) =>
              pin ? <PinsList key={pin.id} {...pin} /> : null
            )}
          </>
        ) : (
          <h1>LOADING PINS :</h1>
        )}
      </Column>
    );
  }
}

const mapStateToProps = (state) => ({
  pins: state.pins.pins,
  loading: state.loading,
});

export default connect(mapStateToProps, { getPins })(PinsContainer);
