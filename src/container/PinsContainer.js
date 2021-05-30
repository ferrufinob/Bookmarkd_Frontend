import React from "react";
import { connect } from "react-redux";
import Pin from "../components/Pin";

const PinsContainer = (props) => {
  return (
    <div>
      {props.pins.map((pin) => (
        <Pin key={pin.id} {...pin} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  pins: state.pins.pins,
});

export default connect(mapStateToProps)(PinsContainer);
