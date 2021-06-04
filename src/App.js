import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import {
  signupUserFetch,
  loginUserFetch,
  fetchLoggedInUser,
} from "./redux/actions/userActions";

import PinsContainer from "./containers/PinsContainer";
import BoardsContainer from "./containers/BoardsContainer";
import PinDisplay from "./components/pin/PinDisplay";
import Welcome from "./components/user/Welcome";
import Signup from "./components/user/Signup";
import Login from "./components/user/Login";
import Navbar from "./components/header/NavBar";
import NewPin from "./components/pin/NewPin";

class App extends Component {
  componentDidMount() {
    this.props.fetchLoggedInUser(this.props.history);
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

  // !! Fix this ⬇ Find a better structure, too much logic in this component
  // * Ideas:

  // renderPinsContainer = () => {
  //   if (localStorage.getItem("token") && this.props.user.length !== 0) {
  //     return <PinsContainer user={this.props.user} />;
  //   } else {
  //     return <Redirect to="/" />;
  //   }
  // };

  render() {
    return (
      <div className="App">
        <Navbar user={this.props.user} logoutHandler={this.logoutHandler} />
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
          <Route path="/pins/new" component={NewPin} />
          <Route path="/pins/:id" component={PinDisplay} />
          <Route path="/pins" component={PinsContainer} />
          <Route path="/boards" component={BoardsContainer} />
        </Switch>
      </div>
    );
  }
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
