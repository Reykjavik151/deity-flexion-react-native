import { all, takeLatest } from 'redux-saga/effects';
import {
  AddTaskAction,
  DeleteTaskAction,
  GetTasksAction,
  tasksActionTypes,
  UpdateTaskAction,
} from '../redux/tasks';
import { userActionTypes, LoginAction, RegisterAction } from '../redux/user';

import { login, register } from './user';
import { addTask, deleteTask, getTasks, updateTask } from './tasks';

export default function* rootSaga() {
  yield all([
    takeLatest<LoginAction>(userActionTypes.LOGIN, login),
    takeLatest<RegisterAction>(userActionTypes.REGISTER, register),

    takeLatest<GetTasksAction>(tasksActionTypes.GET_TASKS, getTasks),
    takeLatest<AddTaskAction>(tasksActionTypes.ADD_TASK, addTask),
    takeLatest<UpdateTaskAction>(tasksActionTypes.UPDATE_TASK, updateTask),
    takeLatest<DeleteTaskAction>(tasksActionTypes.DELETE_TASK, deleteTask),
  ]);
}
