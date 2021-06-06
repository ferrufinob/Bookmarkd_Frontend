import React from "react";
import { Component } from "react";
import { connect } from "react-redux";
import PinsList from "../components/pin/PinsList";
import { getPins } from "../redux/actions/pinsActions";
import { Column } from "../components/pin/Pin-Styling";

class PinsContainer extends Component {
  componentDidMount() {
    this.props.getPins();
  }

  render() {
    console.log("inside pin container");
    const { pins, loading } = this.props;
    return (
      <Column>
        {!loading ? (
          <>
            {pins.map((pin) => (
              <PinsList key={pin.id} {...pin} />
            ))}
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
