import React from "react";
import styled from "styled-components";

const Welcome = () => {
  return (
    <>
      <Header>Find and save new ideas to try.</Header>
      <WelcomeWrapper className="welcome-div">
        <img src="WelcomeCollage.jpeg" />
      </WelcomeWrapper>
    </>
  );
};

const WelcomeWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  justify-content: center;
  z-index: 0;

  img {
    max-width: 100%;
  }
`;

const Header = styled.h1`
  color: #618c7b;
  font-weight: 700;
  text-align: center;
`;

export default Welcome;
