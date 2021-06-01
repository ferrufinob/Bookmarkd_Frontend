const API = "http://localhost:3000/api/v1";

// TODO: add in better error handling
export const loginUserFetch = (userInfo, history) => {
  return (dispatch) => {
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
          dispatch({ type: "GET_USER", payload: user });
          history.push("/pins");
        } else {
          alert(user.error);
        }
      });
  };
};

export const signupUserFetch = (userInfo, history) => {
  return (dispatch) => {
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
          dispatch({ type: "GET_USER", payload: user });

          history.push("/pins");
        } else {
          alert(user.error);
        }
      });
  };
};

export const fetchLoggedInUser = (history) => {
  return (dispatch) => {
    const token = localStorage.getItem("token");
    if (token) {
      return fetch(API + "/autologin", {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      })
        .then((resp) => resp.json())
        .then((user) => {
          dispatch({ type: "GET_USER", payload: user });
        });
    } else {
      history.push("/");
    }
  };
};
