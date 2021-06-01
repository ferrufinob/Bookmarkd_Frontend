import React, { Component } from "react";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import PinsContainer from "./containers/PinsContainer";
import PinDisplay from "./components/pin/PinDisplay";
import { getPins } from "./redux/actions/pinsActions";
import { signupUserFetch } from "./redux/actions/userActions";
import Welcome from "./components/user/Welcome";
import Signup from "./components/user/Signup";
// import { loginUserFetch } from "../redux/actions/userActions";
class App extends Component {
  state = {
    user: "",
  };
  componentDidMount() {
    this.props.getPins();
  }

  signUpHandler = (user) => {
    this.props.signupUserFetch(user);
  };

  render() {
    return (
      <div>
        <Switch>
          <Route
            path="/signup"
            render={() => <Signup submitHandler={this.signUpHandler} />}
          />
          <Route exact path="/" component={Welcome} />
          <Route path="/pins/:id" component={PinDisplay} />
          <Route
            path="/pins"
            render={() => <PinsContainer use={this.state.user} />}
          />
        </Switch>
        {/* this.props.user id? routes patch : <Login /> */}
        {/* <Login />
        <Signup />
        <PinsContainer /> */}
      </div>
    );
  }
}

export default connect(null, { getPins, signupUserFetch })(App);
