import { call, put, select } from 'redux-saga/effects';

import {
  GetTasksFailureAction,
  GetTasksSuccessAction,
  tasksActionCreators,
  UpdateTaskAction,
  UpdateTaskFailureAction,
  UpdateTaskSuccessAction,
} from '../redux/tasks';
import { FirebaseHelper } from '../services/firebase';
import { FIREBASE_TASKS_COLLECTION_NAME } from '../utils/constants';
import { ITask } from '../utils/types';

export function* getTasks() {
  try {
    const userUid = yield select((state) => state.user.userCredentials.user.uid);

    const tasks: ITask[] = yield call(
      FirebaseHelper.getCollectionWithDocId,
      userUid,
      FIREBASE_TASKS_COLLECTION_NAME,
    );

    yield put<GetTasksSuccessAction>(tasksActionCreators.getTasksSuccess(tasks));
  } catch (err) {
    yield put<GetTasksFailureAction>(tasksActionCreators.getTasksFailure(err));
  }
}

export function addTask() {}

export function* updateTask({ task }: UpdateTaskAction) {
  try {
    yield FirebaseHelper.updateDoc<ITask>(FIREBASE_TASKS_COLLECTION_NAME, task);

    yield put<UpdateTaskSuccessAction>(tasksActionCreators.updateTaskSuccess(task));
  } catch (err) {
    yield put<UpdateTaskFailureAction>(tasksActionCreators.updateTaskFailure(err));
  }
}
