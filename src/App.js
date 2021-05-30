import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";
import PinsContainer from "./container/PinsContainer";
import { getPins } from "./redux/actions/pinsActions";
class App extends Component {
  componentDidMount() {
    this.props.getPins();
  }

  render() {
    return (
      <div>
        <h1>Bookmarkd</h1>
        <PinsContainer />
      </div>
    );
  }
}

export default connect(null, { getPins })(App);
