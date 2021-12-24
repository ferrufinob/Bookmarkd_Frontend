import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import BoardsList from "../components/board/BoardsList";
import { deleteBoard } from "../redux/actions/boardsActions";
class BoardsContainer extends Component {
  render() {
    const { user, loading } = this.props;

    const handleDelete = (id) => {
      this.props.deleteBoard(id, this.props.history);
    };
    return (
      <>
        {!loading ? (
          <>
            <UserInfo>
              <AccountCircleIcon fontSize="large" />
              {user ? <>{user.username}</> : null}
            </UserInfo>
            <BoardWrapper>
              {this.props.boards.map((board) =>
                board ? (
                  <BoardsList
                    key={board.id}
                    {...board}
                    handleDelete={handleDelete}
                  />
                ) : null
              )}
            </BoardWrapper>
          </>
        ) : (
          <h1>Loading Boards</h1>
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  boards: state.boards.boards,
  pins: state.pins.pins,
  loading: state.loading,
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
export default connect(mapStateToProps, { deleteBoard })(BoardsContainer);
