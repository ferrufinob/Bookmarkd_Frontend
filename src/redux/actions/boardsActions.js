const API = "http://localhost:3000/api/v1";

export const GET_BOARD = (boards) => ({
  type: "GET_BOARD",
  payload: boards,
});
export const ADD_BOARD = (board) => ({
  type: "ADD_BOARD",
  payload: board,
});

export const DELETE_BOARD = (board) => ({
  type: "DELETE_BOARD",
  payload: board,
});

export const getBoards = () => {
  const token = localStorage.getItem("token");
  return (dispatch) => {
    dispatch({ type: "LOADING_BOARD" });
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
        .then((boards) => dispatch(GET_BOARD(boards)))
        .catch((e) => console.log(e));
    }
  };
};

export const addBoard = (boardData, history) => {
  const token = localStorage.getItem("token");
  return (dispatch) => {
    dispatch({ type: "ADDING_BOARD" });
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
        dispatch(ADD_BOARD(board));
        history.push("/boards");
      })
      .catch((e) => console.log(e));
  };
};

export const deleteBoard = (id, history) => {
  return (dispatch) => {
    dispatch({ type: "DELETING_BOARD" });
    let configObj = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(id),
    };
    fetch(API + "/boards/" + id, configObj)
      .then((resp) => {
        if (!resp.ok) {
          throw new Error(resp);
        } else {
          return resp.json();
        }
      })
      .then((board) => {
        dispatch(DELETE_BOARD(id));
        history.push("/boards");
      })
      .catch((e) => console.log(e));
  };
};
