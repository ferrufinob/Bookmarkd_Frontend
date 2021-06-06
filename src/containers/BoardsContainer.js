import React, { Component } from "react";
import { connect } from "react-redux";
import { getBoards } from "../redux/actions/boardsActions";
import BoardsList from "../components/board/BoardsList";
import { Column } from "./Grid-Styling";

class BoardsContainer extends Component {
  componentDidMount() {
    this.props.getBoards();
  }
  render() {
    const { boards } = this.props;
    return (
      <Column>
        {boards.map((board) =>
          board ? <BoardsList key={board.id} {...board} /> : null
        )}
      </Column>
    );
  }
}

const mapStateToProps = (state) => ({
  boards: state.boards.boards,
});
export default connect(mapStateToProps, { getBoards })(BoardsContainer);
