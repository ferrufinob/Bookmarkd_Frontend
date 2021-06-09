import React from "react";
import { Component } from "react";
import { connect } from "react-redux";
import PinsList from "../components/pin/PinsList";
import { getPins } from "../redux/actions/pinsActions";
import { Column } from "../components/pin/Pin-Styling";
import SearchBar from "../components/header/SearchBar";

class PinsContainer extends Component {
  componentDidMount() {
    this.props.getPins();
  }
  searchedPins = () =>
    this.props.pins.filter((pin) =>
      pin.title.toLowerCase().includes(this.props.search.toLowerCase())
    );
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
          <h1>LOADING PINS :</h1>
        )}
      </Column>
    );
  }
}

const mapStateToProps = (state) => ({
  pins: state.pins.pins,
  loading: state.loading,
  search: state.pins.search.search,
});

export default connect(mapStateToProps, { getPins })(PinsContainer);
