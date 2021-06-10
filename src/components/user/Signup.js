// signup ? "Sign Up : "Login"
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Header, Button, FormWrapper } from "./Form-Styling";

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
    return (
      <>
        <FormWrapper>
          <form onSubmit={this.handleOnSubmit}>
            <Header>Welcome to Bookmarkd</Header>
            <input
              type="text"
              required
              name="username"
              value={this.state.username}
              placeholder="Username"
              onChange={this.handleOnChange}
            />
            <input
              type="text"
              required
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={this.handleOnChange}
            />
            <input
              type="password"
              required
              name="password"
              value={this.state.password}
              placeholder="password"
              onChange={this.handleOnChange}
            />
            <Button type="submit">Sign up</Button>
          </form>
          <br></br>
          Already a member? <Link to="/login">Log in</Link>
        </FormWrapper>
      </>
    );
  }
}

export default Signup;
