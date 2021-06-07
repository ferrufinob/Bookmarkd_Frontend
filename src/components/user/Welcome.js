import React from "react";
import styled from "styled-components";

const Welcome = () => {
  return (
    <WelcomeWrapper className="welcome-div">
      <h2>Find and save new ideas to try.</h2>
      <img
        src="/WelcomeCollage.jpeg"
        alt="Pins Collage"
        className="welcome-img"
      />
    </WelcomeWrapper>
  );
};

const WelcomeWrapper = styled.div`
  display: block;
  margin: 0 auto;
  width: 700px;
  height: 700px;
  position: relative;
  h2 {
    color: rgb(97, 140, 123);
    font-weight: 700;
    text-align: center;
  }
  img {
    max-width: 100%;
    height: 100%;
    position: absolute;
  }
`;

export default Welcome;
