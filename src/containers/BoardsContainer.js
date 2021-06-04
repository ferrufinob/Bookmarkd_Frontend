import React, { Component } from "react";
import { connect } from "react-redux";
import BoardsList from "../components/board/BoardsList";
import { getBoards } from "../redux/actions/boardsActions";

class BoardsContainer extends Component {
  componentDidMount() {
    this.props.getBoards();
  }

  render() {
    const { boards } = this.props;
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
