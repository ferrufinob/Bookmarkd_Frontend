const API = "http://localhost:3000/api/v1";

export const GET_BOARDS = (boards) => ({ type: "GET_BOARDS", payload: boards });
export const ADD_BOARD = (board) => ({
  type: "ADD_BOARD",
  payload: board,
});

export const getBoards = () => {
  const token = localStorage.getItem("token");
  return (dispatch) => {
    dispatch({ type: "LOADING_BOARDS" });
    if (token) {
      fetch(API + "/boards", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((resp) => resp.json())
        .then((boards) => dispatch(GET_BOARDS(boards)));
    }
  };
};

export const addBoard = (boardData, history) => {
  const token = localStorage.getItem("token");
  return (dispatch) => {
    let configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(boardData),
    };
    fetch(API + "/boards", configObj)
      .then((res) => res.json())
      .then((board) => {
        if (board.error) {
          alert(board.error);
        } else {
          dispatch(ADD_BOARD(board));
          history.push("/boards");
        }
      })
      .catch(console.log);
  };
};
