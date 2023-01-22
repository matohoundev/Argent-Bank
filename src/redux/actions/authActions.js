export const signIn = (data) => {
  return {
    type: "LOGIN",
    payload: data,
  };
};

export const signOut = (data) => {
  return {
    type: "LOGOUT",
  };
};
