const API = "http://localhost:3000/api/v1";

export const GET_PINS = (pins) => ({ type: "GET_PINS", payload: pins });
export const SET_SELECTED_PIN = (id) => ({
  type: "SET_SELECTED_PIN",
  payload: id,
});
export const ADD_PIN = (pin) => ({ type: "ADD_PIN", payload: pin });

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

export const addPin = (pinData) => {
  const token = localStorage.getItem("token");
  return (dispatch) => {
    // !add LOADING here
    // ! If NULL do not persist
    let configObj = {
      method: "POST",
      headers: {
        // Accept: "application/json",
        // "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: pinData,
    };
    fetch(API + "/pins", configObj)
      .then((res) => res.json())
      .then((pin) => {
        console.log(pin);
        dispatch(ADD_PIN(pin));
      });
  };
};
