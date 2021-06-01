const API = "http://localhost:3000/api/v1";

export const GET_PINS = (pins) => ({ type: "GET_PINS", payload: pins });
export const SET_SELECTED_PIN = (id) => ({
  type: "SET_SELECTED_PIN",
  payload: id,
});

// thunk gives us the ability to return Functions with a default argument of dispatch
export const getPins = () => {
  // need to maintain access to the keyword dispatch
  return (dispatch) => {
    dispatch({ type: "LOADING_PINS" });
    fetch(API + "/pins")
      .then((res) => res.json())
      .then((pins) => dispatch(GET_PINS(pins)));
  };
};

export const setSelectedPin = (id) => {
  return (dispatch) => {
    dispatch({ type: "LOADING_PIN" });
    fetch(API + "/pins/" + id)
      .then((res) => res.json())
      .then((pin) => dispatch(SET_SELECTED_PIN(pin)));
  };
};
