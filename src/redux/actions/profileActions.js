export const setUser = (data) => {
  return {
    type: "SET_USER",
    payload: data,
  };
};

export const unsetUser = (data) => {
  return {
    type: "UNSET_USER",
    payload: data,
  };
};

export const updateUser = (data) => {
  return {
    type: "UPDATE_USER",
    payload: data,
  };
};
