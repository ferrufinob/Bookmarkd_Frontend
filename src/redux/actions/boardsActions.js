const API = "http://localhost:3000/api/v1";

export const GET_BOARDS = (boards) => ({ type: "GET_BOARDS", payload: boards });

export const getBoards = () => {
  const token = localStorage.getItem("token");
  return (dispatch) => {
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
