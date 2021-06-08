import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import { Switch, Route, withRouter } from "react-router-dom";
import {
  signupUserFetch,
  loginUserFetch,
  fetchLoggedInUser,
} from "./redux/actions/userActions";
import { getBoards } from "./redux/actions/boardsActions";
import { getPins } from "./redux/actions/pinsActions";

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
    this.props.getBoards();
    this.props.getPins();
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
    return (
      <>
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
            render={(routerProps) => <Welcome {...routerProps} />}
          />
          <Route
            path="/pins/new"
            render={() => <NewPin boards={this.props.boards} />}
          />
          <Route
            path="/pins/:id"
            render={(routerProps) => (
              // !important: need this to be able to use params match AND user prop
              <PinDisplay {...routerProps} user={this.props.user.currentUser} />
            )}
          />
          <Route path="/pins" component={PinsContainer} />
          <Route path="/boards/:id/pins" component={BoardDisplay} />
          <Route
            path="/boards"
            render={() => (
              <BoardsContainer
                user={this.props.user.currentUser}
                boards={this.props.boards}
                pins={this.props.pins}
              />
            )}
          />
        </Switch>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
  boards: state.boards.boards,
  pins: state.pins.pins,
});

export default withRouter(
  connect(mapStateToProps, {
    signupUserFetch,
    loginUserFetch,
    fetchLoggedInUser,
    getBoards,
    getPins,
  })(App)
);
