import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const PinsList = (props) => {
  const { title, image, id } = props;
  return (
    <Wrapper>
      <Link to={`/pins/${id}`}>
        <img src={image} alt={title} />
      </Link>
      <figcaption>{title}</figcaption>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 300px;
  width: 450px;
  overflow: hidden;
  border: 1px blue solid;
  figcaption {
    line-height: 1.5;
    color: #444;
  }
`;
export default PinsList;
