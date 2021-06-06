import React, { Component } from "react";
import { connect } from "react-redux";
import { getBoards } from "../redux/actions/boardsActions";
import BoardsList from "../components/board/BoardsList";

class BoardsContainer extends Component {
  componentDidMount() {
    this.props.getBoards();
  }
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

const mapStateToProps = (state) => ({
  boards: state.boards.boards,
});
export default connect(mapStateToProps, { getBoards })(BoardsContainer);
