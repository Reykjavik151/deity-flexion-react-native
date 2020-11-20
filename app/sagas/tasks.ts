import { call, put } from 'redux-saga/effects';

import {
  GetTasksAction,
  GetTasksFailureAction,
  GetTasksSuccessAction,
  tasksActionCreators,
} from '../redux/tasks';
import { FirebaseHelper } from '../services/firebase';
import { ITask } from '../utils/types';

export function* getTasks() {
  try {
    const tasks: ITask[] = yield call(FirebaseHelper, email, password);

    yield put<GetTasksSuccessAction>(tasksActionCreators.getTasksSuccess(tasks));
  } catch (err) {
    yield put<GetTasksFailureAction>(tasksActionCreators.getTasksFailure(err));
  }
}

export function addTask() {}
