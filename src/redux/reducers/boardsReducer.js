const initialState = {
  boards: [],
  loading: true,
};

const boardsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_BOARD_DATA":
      return { ...state, boards: [...state.boards], loading: true };
    case "FETCH_BOARD_SUCCESS":
      return { ...state, boards: action.payload, loading: false };
    case "ADD_BOARD_SUCCESS":
      return {
        ...state,
        boards: [...state.boards, action.payload.board],
        loading: false,
      };
    case "ADDING_BOARD_DATA":
      return { ...state, boards: [...state.boards], loading: true };

    default:
      return state;
  }
};

export default boardsReducer;
