import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Header, Button, FormWrapper } from "./Form-Styling";

class Login extends Component {
  state = {
    email: "",
    password: "",
  };

  componentDidMount() {}

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
          <Header>Welcome to Bookmarkd</Header>
          <form onSubmit={this.handleOnSubmit}>
            <input
              type="text"
              name="email"
              value={this.state.email}
              placeholder="Email"
              onChange={this.handleOnChange}
            />
            <input
              type="password"
              name="password"
              value={this.state.password}
              placeholder="Password"
              onChange={this.handleOnChange}
            />
            <Button type="submit">Log in</Button>
          </form>
          <br></br>
          Not on Bookmarkd yet? <Link to="/signup">Sign up</Link>
        </FormWrapper>
      </>
    );
  }
}

export default Login;
