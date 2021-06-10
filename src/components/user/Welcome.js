import React from "react";
import styled from "styled-components";

const Welcome = () => {
  return (
    <>
      <Header>Find and save new ideas to try.</Header>
      <WelcomeWrapper className="welcome-div"></WelcomeWrapper>
    </>
  );
};

const WelcomeWrapper = styled.div`
  background-image: url("WelcomeCollage.jpeg");
  width: 100%;
  height: 130%;
  position: absolute;
  display: flex;
  background-size: cover;
  justify-content: center;
  z-index: 0;
`;

const Header = styled.h1`
  color: #618c7b;
  font-weight: 700;
  text-align: center;
`;

export default Welcome;
