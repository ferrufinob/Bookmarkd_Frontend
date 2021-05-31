import React from "react";
import { connect } from "react-redux";
import PinsList from "../components/pin/PinsList";

const PinsContainer = (props) => {
  return (
    <div>
      {props.pins.map((pin) => (
        <PinsList key={pin.id} {...pin} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  pins: state.pins.pins,
});

export default connect(mapStateToProps)(PinsContainer);
