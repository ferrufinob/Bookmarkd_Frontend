import React from "react";
import { Link } from "react-router-dom";

const BoardsList = (props) => {
  const { name, id } = props;
  return (
    <Link to={`/boards/${id}/pins`}>
      <h1>{name}</h1>
    </Link>
  );
};

export default BoardsList;
