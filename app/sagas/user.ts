import { call, put } from 'redux-saga/effects';

import { FirebaseAuthTypes } from '@react-native-firebase/auth';
import {
  LoginAction,
  RegisterAction,
  SaveUserCredentialsAction,
  SetErrorAction,
  userActionCreators,
} from '../redux/user';
import { FirebaseHelper } from '../services/firebase';
import { StaticNavigator } from '../services/navigator';

export function* login({ email, password }: LoginAction) {
  try {
    const userCredentialsResponse: FirebaseAuthTypes.UserCredential = yield call(
      FirebaseHelper.login,
      email,
      password,
    );

    yield put<SaveUserCredentialsAction>(
      userActionCreators.saveUserCredentials(userCredentialsResponse),
    );
    yield call(StaticNavigator.resetTo, 'HomeStack');
  } catch (err) {
    yield put<SetErrorAction>(userActionCreators.setError(err));
  }
}

export function* register({ email, password }: RegisterAction) {
  try {
    const userCredentialsResponse: FirebaseAuthTypes.UserCredential = yield call(
      FirebaseHelper.register,
      email,
      password,
    );

    yield put<SaveUserCredentialsAction>(
      userActionCreators.saveUserCredentials(userCredentialsResponse),
    );
    yield call(StaticNavigator.resetTo, 'HomeStack');
  } catch (err) {
    yield put<SetErrorAction>(userActionCreators.setError(err));
  }
}
