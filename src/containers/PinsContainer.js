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
    console.log("inside pin container", this.props.user);
    const { user, pins, loading } = this.props;
    console.log(this.props);
    return (
      <>
        {user && !loading ? (
          <>
            {pins.map((pin) => (
              <PinsList key={pin.id} {...pin} user={this.props.user} />
            ))}
          </>
        ) : (
          <h1>LOADING PINS :</h1>
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  pins: state.pins.pins,
  loading: state.loading,
});

export default connect(mapStateToProps, { getPins })(PinsContainer);
