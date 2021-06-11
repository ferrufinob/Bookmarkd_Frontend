import React from "react";
import { Component } from "react";
import { connect } from "react-redux";
import PinsList from "../components/pin/PinsList";
import { Column } from "../components/pin/Pin-Styling";

class PinsContainer extends Component {
  searchedPins = () =>
    this.props.pins
      .filter((pin) =>
        pin.title.toLowerCase().includes(this.props.search.toLowerCase())
      )
      .slice()
      .reverse();
  render() {
    const { loading } = this.props;
    return (
      <Column>
        {!loading ? (
          <>
            {this.searchedPins().map((pin) =>
              pin ? <PinsList key={pin.id} {...pin} /> : null
            )}
          </>
        ) : (
          <h1>Loading Pins</h1>
        )}
      </Column>
    );
  }
}

const mapStateToProps = (state) => ({
  pins: state.pins.pins,
  loading: state.loading,
  ...state.pins.filters,
});

export default connect(mapStateToProps)(PinsContainer);
