import React from "react";
import { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Column } from "../pin/Pin-Styling";
import PinsList from "../pin/PinsList";
class BoardDisplay extends Component {
  displayBoardName = () => {
    const boardId = this.props.match.params.id;
    const findName = this.props.boards.find((board) => {
      return parseInt(board.id) === parseInt(boardId);
    });
    return findName && <h1>{findName.name}</h1>;
  };

  renderBoardPins = () => {
    const boardId = this.props.match.params.id;
    return this.props.pins
      .filter((pin) =>
        pin ? parseInt(pin.board_id) === parseInt(boardId) : null
      )
      .map((pin) => {
        return <PinsList key={pin.id} {...pin} />;
      });
  };
  render() {
    return (
      <>
        <BoardName> {this.displayBoardName()}</BoardName>
        <Column>{this.renderBoardPins()}</Column>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  pins: state.pins.pins,
  boards: state.boards.boards,
});

const BoardName = styled.div`
  text-align: center;
`;

export default connect(mapStateToProps)(BoardDisplay);
