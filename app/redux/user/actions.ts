import { createActions } from 'reduxsauce';
import { FirebaseAuthTypes } from '@react-native-firebase/auth';

interface UserActionTypes {
  REGISTER: 'REGISTER';
  LOGIN: 'LOGIN';
  SAVE_USER_CREDENTIALS: 'SAVE_USER';
  SET_ERROR: 'SET_ERROR';
}

export interface RegisterAction {
  type: UserActionTypes['REGISTER'];
  email: string;
  password: string;
}

export interface LoginAction {
  type: UserActionTypes['LOGIN'];
  email: string;
  password: string;
}

export interface SaveUserCredentialsAction {
  type: UserActionTypes['SAVE_USER_CREDENTIALS'];
  userCredentials: FirebaseAuthTypes.UserCredential;
}

export interface SetErrorAction {
  type: UserActionTypes['SET_ERROR'];
  error: string;
}

interface UserActionCreators {
  register(email: string, password: string): RegisterAction;
  login(email: string, password: string): LoginAction;
  saveUserCredentials(userCredentials: FirebaseAuthTypes.UserCredential): SaveUserCredentialsAction;

  setError(error: string): SetErrorAction;
}

export type UserAction = RegisterAction | LoginAction | SaveUserCredentialsAction | SetErrorAction;

const { Types, Creators } = createActions<UserActionTypes, UserActionCreators>(
  {
    register: ['email, password'],
    login: ['email', 'password'],
    saveUserCredentials: ['userCredentials'],
    setError: ['error'],
  },
  {
    prefix: 'USER/',
  },
);

export const userActionTypes = Types;

export const userActionCreators = Creators;
