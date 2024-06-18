export interface IUser {
  email: string;
  password: string;
}

export interface IUserRequest extends IUser {
  returnSecureToken: boolean;
}

export interface IUserResponse {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
}
