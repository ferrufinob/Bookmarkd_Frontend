import React from "react";
import { Link } from "react-router-dom";
import { Wrapper } from "../../containers/Grid-Styling";

const BoardsList = (props) => {
  const { name, id } = props;
  return (
    <Link to={`/boards/${id}/pins`}>
      <Wrapper>
        <figcaption>{name}</figcaption>
      </Wrapper>
    </Link>
  );
};

export default BoardsList;
