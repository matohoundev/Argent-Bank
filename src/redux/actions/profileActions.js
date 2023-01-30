export const setUser = (data) => {
  return {
    type: "SET_USER",
    payload: data,
  };
};

export const unsetUser = () => {
  return {
    type: "UNSET_USER",
  };
};

export const updateUser = (data) => {
  return {
    type: "UPDATE_USER",
    payload: data,
  };
};
