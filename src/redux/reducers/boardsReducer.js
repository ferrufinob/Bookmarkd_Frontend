const initialState = {
  boards: [],
  loading: true,
};

const boardsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_BOARDS":
      return { ...state, boards: action.payload, loading: false };
    case "LOADING_BOARDS":
      return { ...state, boards: [...state.boards], loading: true };
    case "ADD_BOARD":
      return {
        ...state,
        boards: [...state.boards, action.payload.board],
        loading: false,
      };
    case "ADDING_BOARD":
      return { ...state, boards: [...state.boards], loading: true };

    default:
      return state;
  }
};

export default boardsReducer;
