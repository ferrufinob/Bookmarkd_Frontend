import React, { Component } from "react";
import "./index.css";
import { connect } from "react-redux";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import {
  signupUserFetch,
  loginUserFetch,
  fetchLoggedInUser,
} from "./redux/actions/userActions";

import PinsContainer from "./containers/PinsContainer";
import PinDisplay from "./components/pin/PinDisplay";
import Welcome from "./components/user/Welcome";
import Signup from "./components/user/Signup";
import Login from "./components/user/Login";
import Navbar from "./components/header/NavBar";

class App extends Component {
  // found token actions
  // if found send to backend to pull user id
  // if not found push user to login
  componentDidMount() {
    this.props.fetchLoggedInUser(this.props.history);
    console.log("mounting user");
  }

  signUpHandler = (user) => {
    this.props.signupUserFetch(user, this.props.history);
  };

  loginHandler = (user) => {
    this.props.loginUserFetch(user, this.props.history);
  };

  logoutHandler = () => {
    localStorage.removeItem("token");
    this.props.history.push("/");
  };

  renderPinsContainer = () => {
    if (localStorage.getItem("token") && this.props.user.length !== 0) {
      return <PinsContainer user={this.props.user} />;
    } else {
      return <Redirect to="/" />;
    }
  };

  render() {
    return (
      <div>
        <Navbar user={this.props.user} />
        <Switch>
          <Route
            path="/login"
            render={() => <Login submitHandler={this.loginHandler} />}
          />
          <Route
            path="/signup"
            render={() => <Signup submitHandler={this.signUpHandler} />}
          />
          <Route
            exact
            path="/"
            render={(routeProps) => <Welcome routeProps={routeProps} />}
          />
          <Route path="/pins/:id" component={PinDisplay} />
          <Route path="/pins" render={this.renderPinsContainer} />
        </Switch>
      </div>
    );
  }
  // localStorage.removeItem("token")
  // props.history.push("/")
  // props.user ? pass this call back to na<Logout> onClick={() =>logout handler} : return login/signup
}

const mapStateToProps = (state) => ({
  user: state.user,
});

export default withRouter(
  connect(mapStateToProps, {
    signupUserFetch,
    loginUserFetch,
    fetchLoggedInUser,
  })(App)
);
