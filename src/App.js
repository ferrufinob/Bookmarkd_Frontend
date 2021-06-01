import React, { Component } from "react";
import { connect } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import PinsContainer from "./containers/PinsContainer";
import PinDisplay from "./components/pin/PinDisplay";
import {
  signupUserFetch,
  fetchLoggedInUser,
} from "./redux/actions/userActions";
import Welcome from "./components/user/Welcome";
import Signup from "./components/user/Signup";
// import { loginUserFetch } from "../redux/actions/userActions";
class App extends Component {
  signUpHandler = (user) => {
    this.props.signupUserFetch(user);
  };

  renderPinsContainer = () => {
    if (localStorage.getItem("token") && this.props.user.length < 0) {
      return <PinsContainer user={this.props.user} />;
    } else {
      return <Redirect to="/" />;
    }
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
          <Route path="/pins" render={this.renderPinsContainer} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, {
  signupUserFetch,
  fetchLoggedInUser,
})(App);
