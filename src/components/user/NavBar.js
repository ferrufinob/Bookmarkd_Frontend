import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  console.log(localStorage.getItem("token"));
  return (
    // if user is not logged in show login/signup links

    <div>
      <NavLink to="/login">
        <p>Log in</p>
      </NavLink>
      <NavLink to="/signup">
        <p>Sign up</p>
      </NavLink>
      {/* otherwise show users links */}
      <NavLink to="/pins">
        <p>Pins</p>
      </NavLink>
      <NavLink to="/boards">
        <p>Your Boards</p>
      </NavLink>
      <NavLink to="/newPin">
        <p>Add Pin</p>
      </NavLink>
    </div>
  );
};

export default Navbar;
