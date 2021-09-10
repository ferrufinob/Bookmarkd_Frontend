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
      .then((resp) => {
        if (!resp.ok) {
          throw new Error(resp);
        } else {
          return resp.json();
        }
      })
      .then((pins) => dispatch(GET_PINS(pins)))
      .catch((e) => console.log(e));
  };
};

export const setSelectedPin = (id) => {
  return (dispatch) => {
    dispatch({ type: "LOADING_SELECTED_PIN" });
    fetch(API + "/pins/" + id)
      .then((resp) => resp.json())
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
      .then((resp) => {
        if (!resp.ok) {
          throw new Error(resp);
        } else {
          return resp.json();
        }
      })
      .then((pin) => {
        dispatch(ADD_PIN(pin));
        history.push(`/pins/${pin.pin.id}`);
      })
      .catch((e) => console.log(e));
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
      .then((resp) => {
        if (!resp.ok) {
          throw new Error(resp);
        } else {
          return resp.json();
        }
      })
      .then((pin) => {
        dispatch(DELETE_PIN(id));
        history.push("/boards");
      })
      .catch((e) => console.log(e));
  };
};
