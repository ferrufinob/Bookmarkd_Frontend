import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const BoardsList = (props) => {
  const { name, id } = props;

  const boardPinImages = () => {
    return props.pins
      .filter((pin) => {
        return pin ? parseInt(pin.board_id) === parseInt(id) : null;
      })
      .slice(0, 4)
      .map((pin) => {
        return pin.image ? (
          <>
            <img src={pin.image} alt={name} />
          </>
        ) : null;
      });
  };
  return (
    <>
      <Link to={`/boards/${id}/pins`}>
        <Wrapper>
          {boardPinImages()}
          <figcaption>{name}</figcaption>
        </Wrapper>
      </Link>
    </>
  );
};

const Wrapper = styled.div`
  height: 350px;
  width: 340px;
  overflow: hidden;
  background: #fefefe;
  border: 2px solid #fcfcfc;
  box-shadow: 0 1px 2px rgba(34, 25, 25, 0.4);
  margin: 0 10px 15px;
  padding: 15px;
  padding-bottom: 10px;
  border-radius: 20px;
  align-text: center;

  img {
    width: 130px;
    height: auto;
    margin: 10px;
    border: 1px green solid;
    border-radius: 5px;
  }
  figcaption {
    color: #444;
    display: block;
    margin: 15px 0 15px 0;
    font-size: 20px;
  }
`;
export default BoardsList;
