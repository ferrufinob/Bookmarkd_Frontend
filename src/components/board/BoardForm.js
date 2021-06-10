import React, { Component } from "react";
import { connect } from "react-redux";
import { addBoard } from "../../redux/actions/boardsActions";

class BoardForm extends Component {
  state = {
    name: "",
  };
  handleOnChange = (event) =>
    this.setState({ [event.target.name]: event.target.value });

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addBoard(this.state, this.props.history);
  };
  render() {
    console.log(this.state);
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.handleOnChange}
        />
        <button type="submit">Save</button>
      </form>
    );
  }
}

export default connect(null, { addBoard })(BoardForm);
