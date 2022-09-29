export type User = {
  name: string;
  username: string;
  email: string;
  avatar: string;
  id: string;
}

export type Users = User[];

export type ServerResponse<T> = T;
