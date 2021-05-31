import React, { Component } from "react";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import PinsContainer from "./containers/PinsContainer";
import PinDisplay from "./components/pin/PinDisplay";
import { getPins } from "./redux/actions/pinsActions";
// import { loginUserFetch } from "../redux/actions/userActions";
import Login from "./components/user/Login";
import Signup from "./components/user/Signup";
class App extends Component {
  componentDidMount() {
    this.props.getPins();
  }

  render() {
    return (
      <div>
        <Switch>
          <Route path="/pins/:id" component={PinDisplay} />
          <Route path="/pins" component={PinsContainer} />
        </Switch>
        {/* this.props.user id? routes patch : <Login /> */}
        {/* <Login />
        <Signup />
        <PinsContainer /> */}
      </div>
    );
  }
}

export default connect(null, { getPins })(App);
