const initialState = {
  currentUser:"",
  accessToken:""
}
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        currentUser: action.payload,
      };
    case "SAVE_TOKEN":
      return {
        ...state,
        accessToken:action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
