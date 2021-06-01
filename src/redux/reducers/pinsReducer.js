const initialState = {
  pins: [],
  selectedPin: null,
};

const pinsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_PINS":
      return { ...state, pins: action.payload };
    case "SET_SELECTED_PIN":
      return {
        ...state,
        selectedPin: action.payload.pin,
      };
    default:
      return state;
  }
};

export default pinsReducer;
