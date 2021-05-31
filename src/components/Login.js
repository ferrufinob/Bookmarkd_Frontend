import React, { Component } from "react";

class Signup extends Component {
  state = {
    username: "",
    password: "",
  };
  render() {
    return (
      <form>
        <label>Username:</label>
        <input type="text" name="username" />
        <label>Password:</label>
        <input type="password" name="password" />
        <button type="submit">Log in</button>
      </form>
    );
  }
}

export default Signup;
