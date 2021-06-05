import React from "react";
import { Component } from "react";

class BoardDisplay extends Component {
  componentDidMount() {
    console.log("mounted Board display");
    // const id = this.props.match.params.id;
    // this.props.setSelectedPin(id);
  }

  render() {
    return <div>Hi</div>;
  }
}

export default BoardDisplay;
