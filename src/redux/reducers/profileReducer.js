const initialState = {
  email: "",
  firstName: "",
  lastName: "",
  createdAt: "",
  updatedAt: "",
  id: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        email: action.payload.email,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        createdAt: action.payload.createdAt,
        updatedAt: action.payload.updatedAt,
        id: action.payload.id,
      };
    case "UNSET_USER":
      return {
        ...state,
        email: "",
        firstName: "",
        lastName: "",
        createdAt: "",
        updatedAt: "",
        id: "",
      };
    default:
      return state;
  }
};

export default profileReducer;
