import React from "react";
import styled from "styled-components";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import DeleteIcon from "@material-ui/icons/Delete";

const PinBody = (props) => {
  const {
    user_id,
    id,
    site_url,
    title,
    description,
    userName,
    handleDelete,
    user,
  } = props;

  return (
    <>
      {user.id === user_id ? (
        <DeleteButton>
          <DeleteIcon
            onClick={() => {
              if (window.confirm("Are you sure?")) handleDelete(id);
            }}
          >
            X
          </DeleteIcon>
        </DeleteButton>
      ) : null}
      <PinInfo>
        <h1>{title}</h1>
        <p>{description}</p>
      </PinInfo>
      <Username>
        <AccountCircleIcon fontSize="small" />
        {userName}
      </Username>
      <a href={site_url} target="_blank" rel="noreferrer">
        {site_url}
      </a>
    </>
  );
};

const PinInfo = styled.div`
  text-align: center;
  margin-top: 50px;
  margin-left: 10px;
  h1 {
    font-size: 30px;
  }
`;

const DeleteButton = styled.div`
  float: right;
  margin: 10px;
  cursor: pointer;
`;

const Username = styled.h5`
  text-align: center;
`;
export default PinBody;
