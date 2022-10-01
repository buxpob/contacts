export type Contact = {
  name: string,
  username: string,
  email: string,
  avatar: string,
  id: string,
}

export type Contacts = Contact[];

export type UserData = {
  id: number,
  name: string,
  token: string,
};

export type AuthData = {
  login: string,
  password: string,
  token: string
};


export type User = {
  id: number,
  name: string,
  email: string,
  token: string,
};

export type Users = User[];
