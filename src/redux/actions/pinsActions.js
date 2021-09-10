const API = "http://localhost:3000/api/v1";

export const FETCH_PINS_SUCCESS = (pins) => ({
  type: "FETCH_PINS_SUCCESS",
  payload: pins,
});
export const SET_SELECTED_PIN_SUCCESS = (id) => ({
  type: "SET_SELECTED_PIN_SUCCESS",
  payload: id,
});
export const ADD_PIN_SUCCESS = (pin) => ({
  type: "ADD_PIN_SUCCESS",
  payload: pin,
});
export const DELETE_PIN_SUCCESS = (pin) => ({
  type: "DELETE_PIN_SUCCESS",
  payload: pin,
});

export const getPins = () => {
  return (dispatch) => {
    dispatch({ type: "FETCH_PINS_DATA" });
    fetch(API + "/pins")
      .then((resp) => {
        if (!resp.ok) {
          throw new Error(resp);
        } else {
          return resp.json();
        }
      })
      .then((pins) => {
        dispatch(FETCH_PINS_SUCCESS(pins));
      })
      .catch((e) => console.log(e));
    // .then((res => res.json())
    // .then((pins) => {
    //   if (pins.error) {
    //     console.log(pins.error);
    //   } else {
    //     dispatch(GET_PINS(pins));
    //   }
    // })
    // .catch(console.log);
  };
};

export const setSelectedPin = (id) => {
  return (dispatch) => {
    dispatch({ type: "SET_SELECTED_PIN_DATA" });
    fetch(API + "/pins/" + id)
      .then((res) => res.json())
      .then((pin) => dispatch(SET_SELECTED_PIN_SUCCESS(pin)));
  };
};

export const addPin = (pinData, history) => {
  const token = localStorage.getItem("token");
  return (dispatch) => {
    dispatch({ type: "ADDING_PIN_DATA" });
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
          dispatch(ADD_PIN_SUCCESS(pin));
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
    dispatch({ type: "DELETING_PIN_DATA" });
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
          dispatch(DELETE_PIN_SUCCESS(id));
          history.push("/boards");
        }
      });
  };
};
