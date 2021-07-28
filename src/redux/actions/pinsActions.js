const API = "http://localhost:3000/api/v1";

export const GET_PINS = (pins) => ({ type: "GET_PINS", payload: pins });
export const SET_SELECTED_PIN = (id) => ({
  type: "SET_SELECTED_PIN",
  payload: id,
});
export const ADD_PIN = (pin) => ({ type: "ADD_PIN", payload: pin });
export const DELETE_PIN = (pin) => ({ type: "DELETE_PIN", payload: pin });

export const getPins = () => {
  return (dispatch) => {
    dispatch({ type: "LOADING_PINS" });
    fetch(API + "/pins")
      .then((res) => res.json())
      .then((pins) => {
        if (pins.error) {
          console.log(pins.error);
        } else {
          dispatch(GET_PINS(pins));
        }
      })
      .catch(console.log);
  };
};

export const setSelectedPin = (id) => {
  return (dispatch) => {
    dispatch({ type: "LOADING_SELECTED_PIN" });
    fetch(API + "/pins/" + id)
      .then((res) => res.json())
      .then((pin) => dispatch(SET_SELECTED_PIN(pin)));
  };
};

export const addPin = (pinData, history) => {
  const token = localStorage.getItem("token");
  return (dispatch) => {
    dispatch({ type: "ADDING_PIN" });
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
          console.log(pin.error);
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

export const deletePin = (id, history) => {
  // const token = localStorage.getItem("token");
  return (dispatch) => {
    dispatch({ type: "DELETING_PIN" });
    let configObj = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        // Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(id),
    };
    fetch(API + "/pins/" + id, configObj)
      .then((resp) => resp.json())
      .then((pin) => {
        if (pin.error) {
          console.log(pin.error);
        } else {
          dispatch(DELETE_PIN(id));
          history.push("/boards");
        }
      });
  };
};
