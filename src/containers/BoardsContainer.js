import React, { Component } from "react";
import BoardsList from "../components/board/BoardsList";

class BoardsContainer extends Component {
  render() {
    const { boards } = this.props;
    console.log("board mounted in boards container");
    return (
      <div>
        {boards.map((board) => (
          <BoardsList key={board.id} {...board} />
        ))}
      </div>
    );
  }
}

export default BoardsContainer;
