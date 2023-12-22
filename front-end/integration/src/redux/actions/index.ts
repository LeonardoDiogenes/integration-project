export const LOGIN = 'LOGIN';

export const login = (email: string, password: string) => {
  return {
    type: LOGIN,
    payload: {
      email,
      password,
    },
  };
};