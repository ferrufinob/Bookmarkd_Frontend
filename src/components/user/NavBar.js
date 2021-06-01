import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = (props) => {
  console.log("in navbar", props.user);
  const { user } = props;
  return (
    <>
      {user && localStorage.getItem("token") ? (
        <div>
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
      ) : (
        <div>
          <NavLink to="/login">
            <p>Log in</p>
          </NavLink>
          <NavLink to="/signup">
            <p>Sign up</p>
          </NavLink>
        </div>
      )}
    </>
  );
};

export default Navbar;
