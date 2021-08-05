import { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import {
  setSelectedPin,
  unsetPin,
  deletePin,
} from "../../redux/actions/pinsActions";

import PinImage from "./PinImage";
import PinBody from "./PinBody";
class PinDisplay extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.setSelectedPin(id);
  }

  componentWillUnmount() {
    this.props.unsetPin();
  }

  handleDelete = (id) => {
    this.props.deletePin(id, this.props.history);
  };

  render() {
    const { title, image, loading } = this.props;
    return (
      <>
        {!loading ? (
          <Wrapper>
            <Child>
              <PinImage image={image} title={title} />
            </Child>
            <Child>
              <PinBody handleDelete={this.handleDelete} {...this.props} />
            </Child>
          </Wrapper>
        ) : (
          <h1>LOADING:</h1>
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.loading,
  ...state.pins.selectedPin,
});

const Wrapper = styled.section`
  background: #fefefe;
  border: 2px solid #fcfcfc;
  box-shadow: 0 1px 4px rgba(34, 25, 25, 0.4);
  width: 80%;
  margin: 50px auto;
  border-radius: 20px;

  img {
    max-width: 100%;
    max-height: 100%;
    border-radius: 20px;
  }
  a {
    color: #444;
    font-size: 18px;
    display: inline-block;
  }
  @media (min-width: 768px) {
    display: flex;
  }
`;

const Child = styled.section`
  text-align: center;
  flex-basis: 100%;
  line-height: 1.5;
`;

export default connect(mapStateToProps, {
  setSelectedPin,
  unsetPin,
  deletePin,
})(PinDisplay);
