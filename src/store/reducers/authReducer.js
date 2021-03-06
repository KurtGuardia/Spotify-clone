const initState = {
  isLoggedIn: false,
  loading: false,
  user: { email: "test@test.com", uid: "asdfjkllkl" },
};

export const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        loading: action.payload,
      };
    case "LOGIN_USER":
      return {
        ...state,
        isLoggedIn: action.payload,
      };
    case "SET_USER":
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};
