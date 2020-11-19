import { createReducer } from 'reduxsauce';
import { FirebaseAuthTypes } from '@react-native-firebase/auth';
import {
  UserAction,
  userActionTypes,
  LoginAction,
  RegisterAction,
  SaveUserCredentialsAction,
  SetErrorAction,
} from './actions';

export interface UserState {
  isLoading: boolean;
  userCredentials: FirebaseAuthTypes.UserCredential | null;
  error: string | null;
}

const INITIAL_STATE: UserState = {
  isLoading: false,
  userCredentials: null,
  error: null,
};

type Handler<A> = (state: UserState, action: A) => UserState;

const login: Handler<LoginAction> = (state) => ({
  ...state,
  isLoading: true,
});

const register: Handler<RegisterAction> = (state) => ({
  ...state,
  isLoading: true,
});

const saveUserCredentials: Handler<SaveUserCredentialsAction> = (state, { userCredentials }) => ({
  ...state,
  userCredentials,
  isLoading: false,
  error: null,
});

const setError: Handler<SetErrorAction> = (state, { error }) => ({
  ...state,
  error,
});

export const userReducer = createReducer<UserState, UserAction>(INITIAL_STATE, {
  [userActionTypes.LOGIN]: login,
  [userActionTypes.REGISTER]: register,
  [userActionTypes.SAVE_USER_CREDENTIALS]: saveUserCredentials,
  [userActionTypes.SET_ERROR]: setError,
});
