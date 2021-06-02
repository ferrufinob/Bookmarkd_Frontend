import React from "react";
import styled from "styled-components";

const Welcome = () => {
  return (
    <WelcomeWrapper className="welcome-div">
      <h2>Organize and save your ideas all in one place</h2>
      <img
        src="/WelcomeCollage.jpeg"
        alt="Pins Collage"
        className="welcome-img"
      />
    </WelcomeWrapper>
  );
};

const WelcomeWrapper = styled.div`
  background-position: center center;
  text-align: center;
  h2 {
    color: rgb(97, 140, 123);
    font-weight: 700;
  }
  img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    max-width: 100%;
    height: auto;
  }
`;

export default Welcome;
