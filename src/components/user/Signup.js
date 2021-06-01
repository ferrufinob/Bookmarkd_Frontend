// signup ? "Sign Up : "Login"
import React, { Component } from "react";

class Signup extends Component {
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
    this.props.submitHandler(this.state);
  };
  render() {
    console.log("signup");
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
        <input
          type="text"
          name="email"
          value={this.state.email}
          onChange={this.handleOnChange}
        />
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={this.state.password}
          onChange={this.handleOnChange}
        />
        <button type="submit">Sign up</button>
      </form>
    );
  }
}

export default Signup;
