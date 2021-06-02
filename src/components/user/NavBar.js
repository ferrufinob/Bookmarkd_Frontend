import React from "react";
import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";
const NavBar = () => {
  return (
    <Wrapper>
      <LoginButton>
        <NavLink to="/login">Log in</NavLink>
      </LoginButton>
      <SignupButton>
        <NavLink to="/signup">Signup</NavLink>
      </SignupButton>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 4px 4px 16px;
  color: black;
  background-color: white;
  width: 100%;
  min-width: 660px;
  margin-top: 10px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 200;
`;

const Buttons = css`
  display: flex;
  height: 48px;
  min-width: 100px;
  align-items: center;
  justify-content: center;
  border-radius: 25px;
  cursor: pinter;
  margin-right: 20px;
  a {
    font-weight: 600;
    text-decoration: none;
    color: #303c6c;
  }
`;

const LoginButton = styled.div`
  ${Buttons}
  background-color: #f4976c;
  :hover {
    background-color: #e98074;
  }
`;
const SignupButton = styled.div`
  ${Buttons}
  background-color: #efefef;
  :hover {
    background-color: #8e8d8a;
  }
`;

export default NavBar;
