const initialState = {
  boards: [],
  loading: true,
};

const boardsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOADING_BOARD":
      return { ...state, boards: [...state.boards], loading: true };
    case "GET_BOARD":
      return { ...state, boards: action.payload, loading: false };
    case "ADD_BOARD":
      return {
        ...state,
        boards: [...state.boards, action.payload.board],
        loading: false,
      };
    case "ADDING_BOARD":
      return { ...state, boards: [...state.boards], loading: true };

    case "DELETING_BOARD":
      return { ...state, loading: true };

    case "DELETE_PIN":
      return {
        ...state,
        boards: [
          ...state.boards.filter((board) => board.id !== action.payload),
        ],
        loading: false,
      };
    default:
      return state;
  }
};

export default boardsReducer;
