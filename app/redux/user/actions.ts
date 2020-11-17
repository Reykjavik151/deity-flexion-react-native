import { createActions } from 'reduxsauce';
import { User } from '../../services/api/api.types';

interface UserActionTypes {
  GET_USER: 'GET_USER';
  GET_USER_SUCCESS: 'GET_USER_SUCCESS';
  GET_USER_FAILURE: 'GET_USER_FAILURE';
}

export interface GetUserAccountAction {
  type: UserActionTypes['GET_USER'];
}

export interface GetUserAccountSuccessAction {
  type: UserActionTypes['GET_USER_SUCCESS'];
  account: User;
}

export interface GetUserAccountFailureAction {
  type: UserActionTypes['GET_USER_FAILURE'];
  error: string;
}

interface UserActionCreators {
  getUserAccount(): GetUserAccountAction;
  getUserAccountSuccess(info: User): GetUserAccountSuccessAction;
  getUserAccountFailure(error: string): GetUserAccountFailureAction;
}

export type UserAction =
  | GetUserAccountAction
  | GetUserAccountSuccessAction
  | GetUserAccountFailureAction;

const { Types, Creators } = createActions<UserActionTypes, UserActionCreators>(
  {
    getUser: null,
    getUserSuccess: ['info'],
    getUserFailure: ['error'],
  },
  {
    prefix: 'USER/',
  },
);

export const userActionTypes = Types;

export const userActionCreators = Creators;
