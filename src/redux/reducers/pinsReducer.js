const initialState = {
  pins: [],
  selectedPin: null,
  loading: true,
};

const pinsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_PINS":
      return { ...state, pins: action.payload, loading: false };
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
