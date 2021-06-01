import React from "react";
import { Component } from "react";
import { connect } from "react-redux";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import PinsList from "../components/pin/PinsList";
import { getPins } from "../redux/actions/pinsActions";

class PinsContainer extends Component {
  componentDidMount() {
    this.props.getPins();
  }

  render() {
    return (
      <>
        {this.props.user ? (
          <>
            {this.props.pins.map((pin) => (
              <PinsList key={pin.id} {...pin} user={this.props.user} />
            ))}
          </>
        ) : (
          <Redirect to="/" />
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  pins: state.pins.pins,
});

export default connect(mapStateToProps, { getPins })(PinsContainer);
