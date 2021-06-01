const API = "http://localhost:3000/api/v1";

export const GET_PINS = (pins) => ({ type: "GET_PINS", payload: pins });
export const SET_SELECTED_PIN = (id) => ({
  type: "SET_SELECTED_PIN",
  payload: id,
});

export const getPins = () => {
  return (dispatch) => {
    fetch(API + "/pins")
      .then((res) => res.json())
      .then((pins) => dispatch(GET_PINS(pins)));
  };
};

export const setSelectedPin = (id) => {
  return (dispatch) => {
    fetch(API + "/pins/" + id)
      .then((res) => res.json())
      .then((pin) => dispatch(SET_SELECTED_PIN(pin)));
  };
};
