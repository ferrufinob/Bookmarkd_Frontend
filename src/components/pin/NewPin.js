import React, { Component } from "react";

export default class NewPin extends Component {
  state = {
    title: "",
    description: "",
    image: " ",
    siteUrl: "",
    boardId: "",
  };
  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            name="title"
            placeholder="Add your title"
            value={this.state.title}
          />
          <input
            type="text"
            name="description"
            placeholder="Tell everyone what your Pin is about"
            value={this.state.description}
          />
          <input
            type="text"
            name="site_url"
            placeholder="Add a destination link"
            value={this.state.site_url}
          />
          <label>Image:</label>
          <input type="text" name="image" value={this.state.image} />
          <select name="boardId"></select>
        </form>
      </div>
    );
  }
}
