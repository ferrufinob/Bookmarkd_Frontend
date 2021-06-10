import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";

const BoardsList = (props) => {
  const { name, id } = props;
  console.log("BoardList");
  const boardPinImages = () => {
    return props.pins
      .filter((pin) => {
        return pin ? parseInt(pin.board_id) === parseInt(id) : null;
      })
      .slice(0, 4)
      .map((pin) => {
        return pin.image ? (
          <div key={pin.id}>
            <img src={pin.image} alt={name} />
          </div>
        ) : null;
      });
  };

  return (
    <>
      <Link to={`/boards/${id}/pins`}>
        <Wrapper>{boardPinImages()}</Wrapper>
        <figcaption>{name}</figcaption>
      </Link>
    </>
  );
};

const mapStateToProps = (state) => ({ pins: state.pins.pins });

const Wrapper = styled.div`
  height: 200px;
  width: 250px;
  overflow: hidden;
  background: #fefefe;
  border: 2px solid #fcfcfc;
  box-shadow: 0 1px 2px rgba(34, 25, 25, 0.4);
  margin: 0 10px 15px;
  border-radius: 20px;

  img {
    width: 50%;
    display: block;
    float: left;
  }
`;
export default connect(mapStateToProps)(BoardsList);
