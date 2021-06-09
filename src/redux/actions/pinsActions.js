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
      .then((pins) => {
        if (pins.error) {
          alert(pins.error);
        } else {
          dispatch(GET_PINS(pins));
        }
      })
      .catch(console.log);
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

export const addPin = (pinData, history) => {
  const token = localStorage.getItem("token");
  return (dispatch) => {
    // !add LOADING here
    // ! If NULL do not persist
    let configObj = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: pinData,
    };
    fetch(API + "/pins", configObj)
      .then((res) => res.json())
      .then((pin) => {
        if (pin.error) {
          alert(pin.error);
        } else {
          dispatch(ADD_PIN(pin));
          history.push(`/pins/${pin.pin.id}`);
        }
      })
      .catch(console.log);
  };
};

export const unsetPin = () => ({ type: "UNSET_PIN" });

export const handleSearchFormChange = (e) => ({
  type: "SEARCH_FORM_CHANGE",
  payload: { name: e.target.name, value: e.target.value },
});
