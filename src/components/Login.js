// signup ? "Sign Up : "Login"
import React, { Component } from "react";

class Login extends Component {
  state = {
    username: "",
    email: "",
    password: "",
  };
  render() {
    return (
      <form>
        <input type="text" name="username" />
        <input type="email" name="email" />
        <input type="password" name="password" />
        <button type="submit">Login</button>
      </form>
    );
  }
}

export default Login;
