import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { AppDispatch, RootState } from '..';
import { userActionTypes } from './actions';

// Selector hooks
export const useUserAccount = () => useSelector((state: RootState) => state.user.account);

// Callback hooks
export const useGetUserAccountCallback = (dispatch: AppDispatch) =>
  useCallback(() => dispatch({ type: userActionTypes.GET_USER }), [dispatch]);
