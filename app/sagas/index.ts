import { all, takeLatest } from 'redux-saga/effects';
import { userActionTypes, LoginAction, RegisterAction } from '../redux/user';

import { login, register } from './user';

export default function* rootSaga() {
  yield all([
    takeLatest<LoginAction>(userActionTypes.LOGIN, login),
    takeLatest<RegisterAction>(userActionTypes.REGISTER, register),
  ]);
}
