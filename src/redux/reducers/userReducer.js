const initialState = {
  currentUser: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_USER":
      return { ...state, currentUser: action.payload };
    case "GETTING_USER":
      return { ...state };
    default:
      return state;
  }
};

export default userReducer;
