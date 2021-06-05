import React, { Component } from "react";
import { connect } from "react-redux";
import { addPin } from "../../redux/actions/pinsActions";

class NewPin extends Component {
  state = {
    title: "",
    description: "",
    image: " ",
    site_url: "",
    board: "",
  };

  handleOnChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleOnSubmit = (event) => {
    event.preventDefault();
    this.props.addPin(this.state);
  };
  render() {
    const boards = this.props.boards.map((board) => (
      <option key={board.id} value={board.name}>
        {board.name}
      </option>
    ));
    console.log(this.state.board);
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <input
            type="text"
            name="title"
            placeholder="Add your title"
            value={this.state.title}
            onChange={this.handleOnChange}
          />
          <input
            type="text"
            name="description"
            placeholder="Tell everyone what your Pin is about"
            value={this.state.description}
            onChange={this.handleOnChange}
          />
          <input
            type="text"
            name="site_url"
            placeholder="Add a destination link"
            value={this.state.site_url}
            onChange={this.handleOnChange}
          />
          <label>Image:</label>
          <input
            type="text"
            name="image"
            value={this.state.image}
            onChange={this.handleOnChange}
          />
          <label>Create a board:</label>
          <input
            type="text"
            name="board"
            value={this.state.board}
            onChange={this.handleOnChange}
          />
          <select
            name="board"
            value={this.state.board}
            onChange={this.handleOnChange}
          >
            {boards}
          </select>
          <button type="submit">Save</button>
        </form>
      </div>
    );
  }
}

export default connect(null, { addPin })(NewPin);
