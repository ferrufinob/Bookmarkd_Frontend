const initialState = {
  pins: [],
};

const pinsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_PINS":
      return { ...state, pins: action.payload };
    default:
      return state;
  }
};

export default pinsReducer;
