export const URL_CONTACTS = 'http://localhost:3000/contacts';
export const URL_USERS = 'http://localhost:3000/users';

export const DEBOUNCE_TIME = 300;

export const TIMEOUT_SHOW_ERROR = 500;

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
  avatar: '',
  id: ''
};
