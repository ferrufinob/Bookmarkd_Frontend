const userReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_USER":
      return action.payload.user;
    default:
      return state;
  }
};

export default userReducer;
