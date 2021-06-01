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

export const fetchLoggedInUser = () => {
  return (dispatch) => {
    const token = localStorage.getItem("token");
    if (token) {
      return fetch(API + "/autologin", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => res.json())
        .then((user) => {
          if (user.error) {
            alert(user.error);
            localStorage.removeItem("token");
          } else {
            dispatch({
              type: "GET_USER",
              payload: user,
            });
          }
        });
    }
  };
};
