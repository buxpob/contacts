export type Contact = {
  username: string,
  nickname: string,
  email: string,
  avatar: string,
  id: string,
}

export type Contacts = Contact[];

export type AuthData = {
  login: string,
  password: string,
};


export type User = {
  id: number,
  login: string,
  password: string,
};

export type Users = User[];
