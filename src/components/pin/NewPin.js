import React, { Component } from "react";
import { connect } from "react-redux";
import { addPin } from "../../redux/actions/pinsActions";
class NewPin extends Component {
  state = {
    title: "",
    description: "",
    image: " ",
    site_url: "",
    board_id: "",
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
      <option key={board.id} value={board.id}>
        {board.name}
      </option>
    ));
    console.log(this.state.board_id);
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
          <select
            name="board_id"
            value={this.state.board}
            onChange={this.handleOnChange}
          >
            {boards}
          </select>
          {/* create a modal for user to create a board and then redirect them to pin form again */}
          <button type="submit">Save</button>
        </form>
      </div>
    );
  }
}

export default connect(null, { addPin })(NewPin);
