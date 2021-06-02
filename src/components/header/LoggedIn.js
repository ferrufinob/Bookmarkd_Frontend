import React from "react";
import { NavLink } from "react-router-dom";

const LoggedIn = () => {
  return (
    <>
      <NavLink to="/pins">
        <p>Pins</p>
      </NavLink>
      <NavLink to="/boards">
        <p>Your Boards</p>
      </NavLink>
      <NavLink to="/newPin">
        <p>Add Pin</p>
      </NavLink>
    </>
  );
};

export default LoggedIn;
