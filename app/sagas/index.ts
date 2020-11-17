import { all, takeLatest } from 'redux-saga/effects';
import { GetUserAccountAction, userActionTypes } from '../redux/user';

import { getUser } from './user';

export default function* rootSaga() {
  yield all([takeLatest<GetUserAccountAction>(userActionTypes.GET_USER, getUser)]);
}
