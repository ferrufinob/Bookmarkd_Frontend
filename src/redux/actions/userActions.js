const API = "http://localhost:3000/api/v1";

export const GET_USER = (user) => ({ type: "GET_USER", payload: user });

export const loginUserFetch = (userInfo, history) => {
  return (dispatch) => {
    dispatch({ type: "GETTING_USER" });
    fetch(API + "/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInfo),
    })
      .then((res) => res.json())
      .then((user) => {
        if (!user.error) {
          localStorage.setItem("token", user.jwt);
          dispatch(GET_USER(user.user));
          history.push("/pins");
        } else {
          alert(user.error);
        }
      })
      .catch(console.log);
  };
};

export const signupUserFetch = (userInfo, history) => {
  return (dispatch) => {
    dispatch({ type: "GETTING_USER" });
    fetch(API + "/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInfo),
    })
      .then((res) => res.json())
      .then((user) => {
        if (!user.error) {
          localStorage.setItem("token", user.jwt);
          dispatch(GET_USER(user.user));
          history.push("/pins");
        } else {
          alert(user.error);
        }
      })
      .catch(console.log);
  };
};

export const fetchLoggedInUser = (history) => {
  return (dispatch) => {
    dispatch({ type: "GETTING_USER" });
    const token = localStorage.getItem("token");
    if (token) {
      return fetch(API + "/autologin", {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      })
        .then((resp) => resp.json())
        .then((user) => {
          dispatch(GET_USER(user.user));
        });
    } else {
      history.push("/");
    }
  };
};
