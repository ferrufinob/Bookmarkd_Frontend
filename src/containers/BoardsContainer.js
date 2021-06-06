import React, { Component } from "react";
import { connect } from "react-redux";
import { getBoards } from "../redux/actions/boardsActions";
import { getPins } from "../redux/actions/pinsActions";
import BoardsList from "../components/board/BoardsList";
import styled from "styled-components";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
class BoardsContainer extends Component {
  componentDidMount() {
    this.props.getBoards();
    this.props.getPins();
  }
  render() {
    const { boards, user } = this.props;
    return (
      <>
        {user ? (
          <UserInfo>
            <AccountCircleIcon fontSize="large" />
            {user.username}
          </UserInfo>
        ) : null}
        <BoardWrapper>
          {boards.map((board) =>
            board ? (
              <BoardsList key={board.id} {...board} pins={this.props.pins} />
            ) : null
          )}
        </BoardWrapper>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  boards: state.boards.boards,
  pins: state.pins.pins,
});

const BoardWrapper = styled.div`
  margin: 100px auto;
  justify-content: center;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  a {
    text-decoration: none;
    color: #444;
    display: block;
    margin: 15px 0 15px 0;
    font-size: 20px;
    font-weight: 700;
  }
`;

const UserInfo = styled.h1`
  font-size: 40px;
  text-align: center;
  margin-top: 100px;
`;
export default connect(mapStateToProps, { getBoards, getPins })(
  BoardsContainer
);
