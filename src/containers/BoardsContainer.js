import React, { Component } from "react";
import { connect } from "react-redux";
import { getBoards } from "../redux/actions/boardsActions";
import { getPins } from "../redux/actions/pinsActions";
import BoardsList from "../components/board/BoardsList";
import styled from "styled-components";

class BoardsContainer extends Component {
  componentDidMount() {
    this.props.getBoards();
    this.props.getPins();
  }
  render() {
    const { boards } = this.props;
    return (
      <BoardWrapper>
        {boards.map((board) =>
          board ? (
            <BoardsList key={board.id} {...board} pins={this.props.pins} />
          ) : null
        )}
      </BoardWrapper>
    );
  }
}

const mapStateToProps = (state) => ({
  boards: state.boards.boards,
  pins: state.pins.pins,
});

const BoardWrapper = styled.div`
  border: 1px red solid;
  margin: 50px auto;
  justify-content: center;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  cursor: pointer;
  a {
    text-decoration: none;
  }
`;
export default connect(mapStateToProps, { getBoards, getPins })(
  BoardsContainer
);
