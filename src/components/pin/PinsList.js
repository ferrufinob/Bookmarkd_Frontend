import React from "react";
import { Link } from "react-router-dom";

const PinsList = (props) => {
  const { title, image, id } = props;
  return (
    <div>
      <Link to={`/pins/${id}`}>
        <img src={image} alt={title} />
      </Link>
      <p>{title}</p>
    </div>
  );
};

export default PinsList;
