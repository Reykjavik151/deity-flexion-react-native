import { call, put, select } from 'redux-saga/effects';

import {
  GetTasksFailureAction,
  GetTasksSuccessAction,
  AddTaskAction,
  AddTaskSuccessAction,
  AddTaskFailureAction,
  tasksActionCreators,
  UpdateTaskAction,
  UpdateTaskFailureAction,
  UpdateTaskSuccessAction,
  DeleteTaskAction,
  DeleteTaskSuccessAction,
  DeleteTaskFailureAction,
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

export function* addTask({ task }: AddTaskAction) {
  try {
    const taskWithId = yield FirebaseHelper.addDoc<ITask>(FIREBASE_TASKS_COLLECTION_NAME, task);

    yield put<AddTaskSuccessAction>(tasksActionCreators.addTaskSuccess(taskWithId));
  } catch (err) {
    yield put<AddTaskFailureAction>(tasksActionCreators.addTaskFailure(err));
  }
}

export function* updateTask({ task }: UpdateTaskAction) {
  try {
    yield FirebaseHelper.updateDoc<ITask>(FIREBASE_TASKS_COLLECTION_NAME, task);

    yield put<UpdateTaskSuccessAction>(tasksActionCreators.updateTaskSuccess(task));
  } catch (err) {
    yield put<UpdateTaskFailureAction>(tasksActionCreators.updateTaskFailure(err));
  }
}

export function* deleteTask({ taskId }: DeleteTaskAction) {
  try {
    const isDeleted: boolean = yield FirebaseHelper.deleteDoc(
      FIREBASE_TASKS_COLLECTION_NAME,
      taskId,
    );

    if (isDeleted) {
      yield put<DeleteTaskSuccessAction>(tasksActionCreators.deleteTaskSuccess(taskId));
    } else {
      throw new Error("Task Delete: TaskID can't be found");
    }
  } catch (err) {
    yield put<DeleteTaskFailureAction>(tasksActionCreators.deleteTaskFailure(err));
  }
}
