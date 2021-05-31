import React, { Component } from "react";

class Signup extends Component {
  state = {
    username: "",
    password: "",
  };
  render() {
    return (
      <form>
        <input type="text" name="username" />
        <input type="password" name="password" />
        <Button type="submit">Sign up</Button>
      </form>
    );
  }
}
