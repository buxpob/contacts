export const DEBOUNCE_TIME = 300;

export const TIMEOUT_SHOW_ERROR = 3000;

export enum APIRoute {
  Contacts = '/contacts',
  Users = '/users',
}

export enum AppRoute {
  Contacts = '/contacts',
  Login = '/',
}

export const EMPTY_CONTACT = {
  username: '',
  nickname: '',
  email: '',
  info: '',
  id: ''
};
