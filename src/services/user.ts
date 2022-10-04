const AUTH_USER_KEY_NAME = 'username';

export type User = string;

export const getUserSessionStorage = (): User => {
  const user = sessionStorage.getItem(AUTH_USER_KEY_NAME);
  return user ?? '';
};

export const saveUserSessionStorage = (user: User): void => {
  sessionStorage.setItem(AUTH_USER_KEY_NAME, user);
};

export const removeUserSessionStorage = (): void => {
  sessionStorage.removeItem(AUTH_USER_KEY_NAME);
};
