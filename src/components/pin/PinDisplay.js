import { Component } from "react";
import { connect } from "react-redux";

class PinDisplay extends Component {
  componentDidMount() {
    // get the id from the route(grab 1 from "pins/1")
    // give this.props.match.params a key of id when we define "restaurants/:id" in our Route path in App.js
    const id = this.props.match.params.id;
    console.log(id);
  }
  render() {
    return <h1>Pin Display Page</h1>;
  }
}

export default connect()(PinDisplay);
