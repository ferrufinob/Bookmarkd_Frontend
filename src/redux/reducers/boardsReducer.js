const initialState = {
  boards: [],
  loading: true,
};

const boardsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_BOARDS":
      return { ...state, boards: action.payload, loading: false };
    default:
      return state;
  }
};

export default boardsReducer;
