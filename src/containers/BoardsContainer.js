import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchBoards } from "../redux/actions/boardsActions";

class BoardsContainer extends Component {
  componentDidMount() {
    this.props.fetchBoards();
  }
  render() {
    return <div>Testing</div>;
  }
}

export default connect(null, { fetchBoards })(BoardsContainer);
