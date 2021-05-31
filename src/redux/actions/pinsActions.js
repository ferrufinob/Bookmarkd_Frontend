const API = "http://localhost:3000/api/v1";

// thunk allows us to return a function that takes in the argument of dispatch,
// instead of a plain obj representing the object
export const getPins = () => {
  return (dispatch) => {
    fetch(API + "/pins")
      .then((res) => res.json())
      .then((pins) =>
        dispatch({
          type: "SET_PINS",
          payload: pins,
        })
      );
  };
};

export const setSelectedPin = (id) => {
  return (dispatch) => {
    fetch(API + "/pins/" + id)
      .then((res) => res.json())
      .then((pin) =>
        dispatch({
          type: "SET_SELECTED_PIN",
          payload: pin,
        })
      );
  };
};
