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
    <Link to={`/boards/${id}/pins`}>
      <Wrapper>
        <figcaption>{name}</figcaption>
        {boardPinImages()}
      </Wrapper>
    </Link>
  );
};

const Wrapper = styled.div``;
export default BoardsList;
