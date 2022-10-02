export type Contact = {
  username: string,
  nickname: string,
  email: string,
  avatar: string,
  id: string,
}

export type Contacts = Contact[];

export type UserData = {
  id: number,
  login: string,
  token: string,
};

export type AuthData = {
  login: string,
  password: string,
  token: string
};


export type User = {
  id: number,
  login: string,
  email: string,
  token: string,
};

export type Users = User[];
