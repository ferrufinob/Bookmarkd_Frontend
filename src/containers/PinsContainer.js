import React from "react";
import { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import PinsList from "../components/pin/PinsList";
import { getPins } from "../redux/actions/pinsActions";

class PinsContainer extends Component {
  componentDidMount() {
    this.props.getPins();
  }

  render() {
    const { user, pins } = this.props;
    return (
      <>
        {user ? (
          <>
            {pins.map((pin) => (
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
