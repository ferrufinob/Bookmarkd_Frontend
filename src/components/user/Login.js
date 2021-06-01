import React, { Component } from "react";

class Login extends Component {
  state = {
    email: "",
    password: "",
  };

  handleOnChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
    this.props.submitHandler(this.state);
  };

  handleOnSubmit = (event) => {
    event.preventDefault();
    this.props.submitHandler(this.state);
  };

  render() {
    return (
      <form onSubmit={this.handleOnSubmit}>
        <label>Username:</label>
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
        <button type="submit">Log in</button>
      </form>
    );
  }
}

export default Login;
