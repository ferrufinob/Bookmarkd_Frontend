import React, { Component } from "react";
import { connect } from "react-redux";
import { getBoards } from "../redux/actions/boardsActions";
import { getPins } from "../redux/actions/pinsActions";
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
          <BoardsList key={board.id} {...board} pins={this.props.pins} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  boards: state.boards.boards,
  pins: state.pins.pins,
});
export default connect(mapStateToProps, { getBoards, getPins })(
  BoardsContainer
);
