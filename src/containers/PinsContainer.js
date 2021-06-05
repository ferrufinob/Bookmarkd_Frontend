import React from "react";
import { Component } from "react";
import { connect } from "react-redux";
import PinsList from "../components/pin/PinsList";
import { getPins } from "../redux/actions/pinsActions";
import styled from "styled-components";

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

const Column = styled.div`
  margin: 50px auto;
  justify-content: center;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  column-gap: 15px;
  img {
    border-radius: 20px;
    height: auto;
    width: 400px;
  }
  img:hover {
    filter: brightness(50%);
  }
`;
export default connect(mapStateToProps, { getPins })(PinsContainer);
