const AUTH_USER_KEY_NAME = '';

export type User = string;

export const getUser = (): User => {
  const token = sessionStorage.getItem(AUTH_USER_KEY_NAME);
  return token ?? '';
};

export const saveUser = (user: User): void => {
  sessionStorage.setItem(AUTH_USER_KEY_NAME, user);
};

export const dropToken = (): void => {
  sessionStorage.removeItem(AUTH_USER_KEY_NAME);
};
