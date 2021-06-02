import React from "react";
import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";
import SearchBar from "./SearchBar";
import IconButton from "@material-ui/core/IconButton";
import FaceIcon from "@material-ui/icons/Face";
import AddIcon from "@material-ui/icons/Add";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

const Navbar = (props) => {
  console.log("in navbar", props.user);
  const { user } = props;
  return (
    <>
      {user && localStorage.getItem("token") ? (
        <Wrapper>
          <Logo>Bookmarkd</Logo>
          <Home>
            <NavLink to="/pins">Home</NavLink>
          </Home>
          <SearchBar />
          <NavUnlisted>
            <NavIcons>
              <IconButton>
                <NavLink to="/boards">
                  <FaceIcon />
                </NavLink>
              </IconButton>
              <IconButton>
                <NavLink to="/">
                  <AddIcon />
                </NavLink>
              </IconButton>
              <IconButton onClick={props.logoutHandler}>
                <ExitToAppIcon />
              </IconButton>
            </NavIcons>
          </NavUnlisted>
        </Wrapper>
      ) : (
        <>
          <Wrapper>
            <Logo>Bookmarkd</Logo>
            <LoginButton>
              <NavLink to="/login">Log in</NavLink>
            </LoginButton>
            <SignupButton>
              <NavLink to="/signup">Signup</NavLink>
            </SignupButton>
          </Wrapper>
        </>
      )}
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  overflow: auto;
  align-items: center;
  height: 56px;
  padding: 12px 4px 4px 16px;
  background-color: white;
  color: black;
`;

const Logo = styled.div`
  color: #f4976c;
  font-size: 30px;
`;

const NavUnlisted = styled.ul`
  a {
    color: #303c6c;
  }
`;

const NavIcons = styled.div`
  display: flex;
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

const Home = styled.div`
 ${Buttons}
  background-color: #b4dfe5;
  margin-left: 15px;
  a {
  :hover {
    background-color: #fbe8a6;
  }
`;

const LoginButton = styled.div`
  ${Buttons}
  margin-left: auto;
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
export default Navbar;
