const initialState = {
  pins: [],
  selectedPin: null,
  loading: true,
  filters: {
    search: "",
  },
};

const pinsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_PINS":
      return { ...state, pins: action.payload, loading: false };
    case "SET_SELECTED_PIN":
      return {
        ...state,
        selectedPin: action.payload.pin,
        loading: false,
      };

    case "ADD_PIN":
      return {
        ...state,
        pins: [...state.pins, action.payload.pin],
        loading: false,
      };

    case "UNSET_PIN":
      return { ...state, selectedPin: null };

    case "LOADING_SELECTED_PIN":
      return { ...state, selectedPin: { ...state.selectedPin }, loading: true };

    case "LOADING_PINS":
      return { ...state, pins: [...state.pins], loading: true };

    case "ADDING_PIN":
      return { ...state, pins: [...state.pins], loading: true };

    case "SEARCH_FORM_CHANGE":
      return {
        ...state,
        filters: {
          ...state.filters,
          [action.payload.name]: action.payload.value,
        },
      };
    default:
      return state;
  }
};

export default pinsReducer;
