import React from "react";
import Login from "./Login";
import Navbar from "./NavBar";

const Welcome = () => {
  // if there is a token show User Navbar
  // else show login / sign up link
  return (
    <div>
      Welcome Page
      <Navbar />
    </div>
  );
};

export default Welcome;
