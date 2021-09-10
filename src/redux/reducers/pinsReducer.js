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
    case "FETCH_PINS_SUCCESS":
      return { ...state, pins: action.payload, loading: false };
    case "SET_SELECTED_PIN_SUCCESS":
      return {
        ...state,
        selectedPin: action.payload.pin,
        loading: false,
      };
    case "ADD_PIN_SUCCESS":
      return {
        ...state,
        pins: [...state.pins, action.payload.pin],
        loading: false,
      };

    case "UNSET_PIN":
      return { ...state, selectedPin: null };

    case "SET_SELECTED_PIN_DATA":
      return { ...state, selectedPin: { ...state.selectedPin }, loading: true };

    case "FETCH_PINS_DATA":
      return { ...state, pins: [...state.pins], loading: true };

    case "ADDING_PIN_DATA":
      return { ...state, pins: [...state.pins], loading: true };

    case "SEARCH_FORM_CHANGE":
      return {
        ...state,
        filters: {
          ...state.filters,
          [action.payload.name]: action.payload.value,
        },
      };

    case "DELETING_PIN_DATA":
      return { ...state, loading: true };

    case "DELETE_PIN_SUCCESS":
      return {
        ...state,
        pins: [...state.pins.filter((pin) => pin.id !== action.payload)],
        loading: false,
      };

    default:
      return state;
  }
};

export default pinsReducer;
