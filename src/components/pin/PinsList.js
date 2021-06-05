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
  background: #fefefe;
  border: 2px solid #fcfcfc;
  box-shadow: 0 1px 2px rgba(34, 25, 25, 0.4);
  margin: 0 2px 15px;
  padding: 15px;
  padding-bottom: 10px;
  border-radius: 20px;

  figcaption {
    border-bottom: 1px solid #ccc;
    line-height: 1.5;
    color: #444;
  }
`;
export default PinsList;
