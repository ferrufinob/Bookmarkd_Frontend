import React, { Component } from "react";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import PinsContainer from "./containers/PinsContainer";
import PinDisplay from "./components/pin/PinDisplay";
import { getPins } from "./redux/actions/pinsActions";
import Welcome from "./components/user/Welcome";
// import { loginUserFetch } from "../redux/actions/userActions";
class App extends Component {
  state = {
    user: null,
  };
  componentDidMount() {
    this.props.getPins();
  }

  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route
            path="/pins/:id"
            render={() => <PinDisplay user={this.state.user} />}
          />
          <Route
            path="/pins"
            render={() => <PinsContainer user={this.state.user} />}
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

export default connect(null, { getPins })(App);
