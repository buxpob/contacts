export const URL_CONTACTS = 'http://localhost:3000/contacts';
export const URL_USERS = 'http://localhost:3000/users';

export const DEBOUNCE_TIME = 400;

export const TIMEOUT_SHOW_ERROR = 500;

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum APIRoute {
  Contacts = '/contacts',
  Users = '/users',
  Logout = '/users',
}

export enum AppRoute {
  Contacts = '/contacts',
  Login = '/',
}
