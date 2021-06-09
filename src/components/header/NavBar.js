import React from "react";
import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";
import SearchBar from "./SearchBar";
import IconButton from "@material-ui/core/IconButton";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import FaceIcon from "@material-ui/icons/Face";
import AddIcon from "@material-ui/icons/Add";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

const Navbar = (props) => {
  const { user } = props;
  return (
    <>
      {user && localStorage.getItem("token") ? (
        <Wrapper>
          <IconButton>
            <Logo>
              <BookmarkBorderIcon fontSize="large" />
              Bookmarkd
            </Logo>
          </IconButton>
          <Home>
            <NavLink to="/pins">Home</NavLink>
          </Home>
          {props.path === "/pins" && <SearchBar />}
          <NavUnlisted>
            <NavIcons>
              <IconButton>
                <NavLink to="/boards">
                  <FaceIcon fontSize="large" />
                </NavLink>
              </IconButton>
              <IconButton>
                <NavLink to="/pins/new">
                  <AddIcon fontSize="large" />
                </NavLink>
              </IconButton>
              <IconButton onClick={props.logoutHandler}>
                <ExitToAppIcon fontSize="large" />
              </IconButton>
            </NavIcons>
          </NavUnlisted>
        </Wrapper>
      ) : (
        <>
          <Wrapper>
            <IconButton>
              <Logo>
                <BookmarkBorderIcon fontSize="large" />
                Bookmarkd
              </Logo>
            </IconButton>
            <LoginButton onClick={props.toggleModal}>
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
  border-bottom: 0.1px solid #ccc;
  align-items: center;
  height: 65px;
  padding: 12px 4px 4px 16px;
  background-color: white;
  color: black;
`;

const Logo = styled.div`
  color: #f4976c;
  font-size: 30px;
`;

const NavUnlisted = styled.ul`
  margin-left: auto;

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
  min-width: 120px;
  align-items: center;
  justify-content: center;
  border-radius: 25px;
  cursor: pinter;
  margin-right: 5px;
  margin-left: 5px;
  border: none;
  a {
    font-weight: 700;
    font-size: 18px;
    text-decoration: none;
    color: #303c6c;
  }
`;

const Home = styled.button`
  ${Buttons}
  background-color: #b4dfe5;
  :hover {
    background-color: #fbe8a6;
  }
`;

const LoginButton = styled.button`
  ${Buttons}
  background-color: #f4976c;
  :hover {
    background-color: #e98074;
  }
`;
const SignupButton = styled.button`
  ${Buttons}
  background-color: #efefef;
  :hover {
    background-color: #8e8d8a;
  }
`;
export default Navbar;
