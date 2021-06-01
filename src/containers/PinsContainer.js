import React from "react";
import { connect } from "react-redux";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import PinsList from "../components/pin/PinsList";

const PinsContainer = (props) => {
  console.log(props.user);
  return (
    <>
      {props.user ? (
        <>
          {props.pins.map((pin) => (
            <PinsList key={pin.id} {...pin} />
          ))}
        </>
      ) : (
        <Redirect to="/" />
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  pins: state.pins.pins,
});

export default connect(mapStateToProps)(PinsContainer);
