import { all, takeLatest } from 'redux-saga/effects';
import { GetTasksAction, tasksActionTypes, UpdateTaskAction } from '../redux/tasks';
import { userActionTypes, LoginAction, RegisterAction } from '../redux/user';

import { login, register } from './user';
import { getTasks, updateTask } from './tasks';

export default function* rootSaga() {
  yield all([
    takeLatest<LoginAction>(userActionTypes.LOGIN, login),
    takeLatest<RegisterAction>(userActionTypes.REGISTER, register),

    takeLatest<GetTasksAction>(tasksActionTypes.GET_TASKS, getTasks),
    takeLatest<UpdateTaskAction>(tasksActionTypes.UPDATE_TASK, updateTask),
  ]);
}
