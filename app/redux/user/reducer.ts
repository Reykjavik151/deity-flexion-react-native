import { createReducer } from 'reduxsauce';
import { User } from '../../services/api/api.types';
import {
  UserAction,
  userActionTypes,
  GetUserAccountAction,
  GetUserAccountFailureAction,
  GetUserAccountSuccessAction,
} from './actions';

export interface UserState {
  isLoading: boolean;
  account: User | null;
  error: string | null;
}

const INITIAL_STATE: UserState = {
  isLoading: false,
  error: null,
  account: null,
};

type Handler<A> = (state: UserState, action: A) => UserState;

const getUserAccount: Handler<GetUserAccountAction> = (state) => ({
  ...state,
  isLoading: true,
});

const getUserAccountSuccess: Handler<GetUserAccountSuccessAction> = (state, { account }) => ({
  ...state,
  isLoading: false,
  account,
});

const getUserAccountFailure: Handler<GetUserAccountFailureAction> = (state, { error }) => ({
  ...state,
  isLoading: false,
  error,
});

export const userReducer = createReducer<UserState, UserAction>(INITIAL_STATE, {
  [userActionTypes.GET_USER]: getUserAccount,
  [userActionTypes.GET_USER_SUCCESS]: getUserAccountSuccess,
  [userActionTypes.GET_USER_FAILURE]: getUserAccountFailure,
});
