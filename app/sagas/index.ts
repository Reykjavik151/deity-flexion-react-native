import { all, takeLatest } from 'redux-saga/effects';
import { GetTasksAction, tasksActionTypes } from '../redux/tasks';
import { userActionTypes, LoginAction, RegisterAction } from '../redux/user';

import { login, register } from './user';
import { getTasks } from './tasks';

export default function* rootSaga() {
  yield all([
    takeLatest<LoginAction>(userActionTypes.LOGIN, login),
    takeLatest<RegisterAction>(userActionTypes.REGISTER, register),

    takeLatest<GetTasksAction>(tasksActionTypes.GET_TASKS, getTasks),
  ]);
}
