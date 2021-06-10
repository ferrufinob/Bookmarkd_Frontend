import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import { Switch, Route, withRouter, Redirect } from "react-router-dom";
import {
  signupUserFetch,
  loginUserFetch,
  fetchLoggedInUser,
} from "./redux/actions/userActions";
// import { getBoards } from "./redux/actions/boardsActions";

import PinsContainer from "./containers/PinsContainer";
import BoardsContainer from "./containers/BoardsContainer";
import BoardDisplay from "./components/board/BoardDisplay";
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

  render() {
    const path = this.props.location.pathname;
    const token = localStorage.getItem("token");
    return (
      <>
        <Navbar
          user={this.props.user}
          logoutHandler={this.logoutHandler}
          path={path}
        />
        <Switch>
          <Route
            path="/login"
            render={() =>
              this.props.user && token ? (
                <Redirect to="/pins" />
              ) : (
                <Login submitHandler={this.loginHandler} />
              )
            }
          />
          <Route
            path="/signup"
            render={() =>
              this.props.user && token ? (
                <Redirect to="/pins" />
              ) : (
                <Signup submitHandler={this.signUpHandler} />
              )
            }
          />
          <Route
            exact
            path="/"
            render={(routerProps) =>
              this.props.user && token ? (
                <Redirect to="/pins" />
              ) : (
                <Welcome {...routerProps} />
              )
            }
          />
          <Route
            path="/pins/new"
            render={(routerProps) => <NewPin {...routerProps} />}
          />
          <Route
            path="/pins/:id"
            render={(routerProps) => (
              <PinDisplay {...routerProps} user={this.props.user.currentUser} />
            )}
          />
          <Route path="/pins" component={PinsContainer} />
          <Route path="/boards/:id/pins" component={BoardDisplay} />
          <Route
            path="/boards"
            render={() => (
              <BoardsContainer user={this.props.user.currentUser} />
            )}
          />
        </Switch>
      </>
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
