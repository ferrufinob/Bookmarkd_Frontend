const API = "http://localhost:3000/api/v1";

export const FETCH_BOARD_SUCCESS = (boards) => ({
  type: "FETCH_BOARD_SUCCESS",
  payload: boards,
});
export const ADD_BOARD_SUCCESS = (board) => ({
  type: "ADD_BOARD_SUCCESS",
  payload: board,
});

export const getBoards = () => {
  const token = localStorage.getItem("token");
  return (dispatch) => {
    dispatch({ type: "FETCH_BOARD_DATA" });
    if (token) {
      fetch(API + "/boards", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((resp) => {
          if (!resp.ok) {
            throw new Error(resp);
          } else {
            return resp.json();
          }
        })
        .then((boards) => dispatch(FETCH_BOARD_SUCCESS(boards)))
        .catch((e) => console.log(e));
    }
  };
};

export const addBoard = (boardData, history) => {
  const token = localStorage.getItem("token");
  return (dispatch) => {
    dispatch({ type: "ADDING_BOARD_DATA" });
    let configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(boardData),
    };
    fetch(API + "/boards", configObj)
      .then((resp) => {
        if (!resp.ok) {
          throw new Error(resp);
        } else {
          return resp.json();
        }
      })
      .then((board) => {
        dispatch(ADD_BOARD_SUCCESS(board));
        history.push("/boards");
      })
      .catch((e) => console.log(e));
  };
};
