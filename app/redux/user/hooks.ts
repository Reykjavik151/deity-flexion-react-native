import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { FirebaseAuthTypes } from '@react-native-firebase/auth';

import { AppDispatch, RootState } from '..';
import { userActionTypes } from './actions';

// Selector hooks
export const useUserAccount = () => useSelector((state: RootState) => state.user.credentials);

// Callback hooks
export const useLoginCallback = (dispatch: AppDispatch) =>
  useCallback(
    (email: string, password: string) => dispatch({ type: userActionTypes.LOGIN, email, password }),
    [dispatch],
  );

export const useRegisterCallback = (dispatch: AppDispatch) =>
  useCallback(
    (email: string, password: string) =>
      dispatch({ type: userActionTypes.REGISTER, email, password }),
    [dispatch],
  );

export const useSaveUserCredentialsCallback = (dispatch: AppDispatch) =>
  useCallback(
    (userCredentials: FirebaseAuthTypes.UserCredential) =>
      dispatch({ type: userActionTypes.SAVE_USER_CREDENTIALS, userCredentials }),
    [dispatch],
  );

export const useSetErrorCallback = (dispatch: AppDispatch) =>
  useCallback((error: string) => dispatch({ type: userActionTypes.SET_ERROR, error }), [dispatch]);
