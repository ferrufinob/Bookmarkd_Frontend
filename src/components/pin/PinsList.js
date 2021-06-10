import React from "react";
import { Link } from "react-router-dom";
import { Wrapper } from "./Pin-Styling";

const PinsList = (props) => {
  const { title, image, id } = props;
  console.log("PinsList");
  return (
    <Wrapper>
      <Link to={`/pins/${id}`}>
        <img src={image} alt={title} />
      </Link>
      <figcaption>{title}</figcaption>
    </Wrapper>
  );
};

export default PinsList;
