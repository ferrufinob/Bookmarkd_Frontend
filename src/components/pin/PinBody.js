import React from "react";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import styled from "styled-components";

const PinBody = (props) => {
  const { site_url, title, description, userName } = props;
  return (
    <>
      <a href={site_url}>{site_url}</a>
      <PinInfo>
        <h1>{title}</h1>
        <p>{description}</p>
      </PinInfo>
      <Username>
        <AccountCircleIcon fontSize="small" />
        {userName}
      </Username>
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

const Username = styled.h5`
  text-align: center;
`;
export default PinBody;
