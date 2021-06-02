import React from "react";
import styled from "styled-components";
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
          <IconButton>
            <NavLink to="/">
              <ExitToAppIcon />
            </NavLink>
          </IconButton>
        </NavIcons>
      </NavUnlisted>
    </Wrapper>
    // <Wrapper>
    //   {user && localStorage.getItem("token") ? (
    //     <div>
    //       <LoggedIn user={user} />
    //     </div>
    //   ) : (
    //     <div>
    //       <NavLink to="/login">
    //         <p>Log in</p>
    //       </NavLink>
    //       <NavLink to="/signup">
    //         <p>Sign up</p>
    //       </NavLink>
    //     </div>
    //   )}
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 56px;
  padding: 12px 4px 4px 16px;
  color: black;
`;

const Logo = styled.div`
  color: #f4976c;
  font-size: 30px;
`;

const Home = styled.div`
  display: flex;
  height: 48px;
  min-width: 120px;
  align-items: center;
  justify-content: center;
  border-radius: 25px;
  cursor: pinter;
  background-color: #b4dfe5;
  margin-right: 15px;
  margin-left: 15px;

  a {
    font-weight: 600;
    text-decoration: none;
    color: #303c6c;
  }
  :hover {
    background-color: #fbe8a6;
  }
`;

const NavUnlisted = styled.ul`
  a {
    color: #303c6c;
  }
`;

const NavIcons = styled.div`
  display: flex;
`;

export default Navbar;
