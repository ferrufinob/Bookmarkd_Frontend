// signup ? "Sign Up : "Login"
import React, { Component } from "react";

class Login extends Component {
  state = {
    username: "",
    email: "",
    password: "",
  };

  handleOnChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleOnSubmit = (event) => {
    event.preventDefault();
    const { username, email, password } = this.state;
    const body = { username: username, email: email, password: password };
    this.props.submitHandler(body);
  };
  render() {
    return (
      <form onSubmit={this.handleOnSubmit}>
        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={this.state.username}
          onChange={this.handleOnChange}
        />
        <label>Email:</label>
        <input type="email" name="email" onChange={this.handleOnChange} />
        <label>Password:</label>
        <input type="password" name="password" onChange={this.handleOnChange} />
        <button type="submit">Sign up</button>
      </form>
    );
  }
}

export default Login;
