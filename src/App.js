import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";
import PinsContainer from "./container/PinsContainer";
import { getPins } from "./redux/actions/pinsActions";
import Login from "./components/Login";
class App extends Component {
  componentDidMount() {
    this.props.getPins();
  }

  render() {
    return (
      <div>
        {/* this.props.user id? routes patch : <Login /> */}
        <Login />
        <PinsContainer />
      </div>
    );
  }
}

export default connect(null, { getPins })(App);
