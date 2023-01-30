export const signIn = (data) => {
  return {
    type: "LOGIN",
    payload: data,
  };
};

export const signOut = () => {
  return {
    type: "LOGOUT",
  };
};
