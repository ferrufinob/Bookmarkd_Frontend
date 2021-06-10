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
              <Dropdown>
                <IconButton onClick={props.showMenuHandler}>
                  {/* <NavLink to="/pins/new"> */}
                  <AddIcon fontSize="large" />
                  {props.showMenu ? (
                    <DropdownContent>
                      <NavLink to="/pins/new">Create Pin</NavLink>
                      <NavLink to="/boards/new">Create Board</NavLink>
                    </DropdownContent>
                  ) : null}
                  {/* </NavLink> */}
                </IconButton>
              </Dropdown>
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

const DropdownContent = styled.div`
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  display: block;
  margin-top: 200px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  a {
    padding: 12px 16px;
    text-decoration: none;
    display: block;
  }
`;

const Dropdown = styled.div`
  position: relative;
  display: inline-block;
`;
export default Navbar;
