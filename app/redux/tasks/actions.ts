import { createActions } from 'reduxsauce';
import { ITask } from '../../utils/types';

interface TasksActionTypes {
  GET_TASKS: 'GET_TASKS';
  GET_TASKS_SUCCESS: 'GET_TASKS_SUCCESS';
  GET_TASKS_FAILURE: 'GET_TASKS_FAILURE';
}

export interface GetTasksAction {
  type: TasksActionTypes['GET_TASKS'];
}
export interface GetTasksSuccessAction {
  type: TasksActionTypes['GET_TASKS_SUCCESS'];
  tasks: ITask[];
}
export interface GetTasksFailureAction {
  type: TasksActionTypes['GET_TASKS_FAILURE'];
  error: string;
}

interface TasksActionCreators {
  getTasks(): GetTasksAction;
  getTasksSuccess(tasks: ITask[]): GetTasksSuccessAction;
  getTasksFailure(error: string): GetTasksFailureAction;
}

export type TasksAction = GetTasksAction | GetTasksSuccessAction | GetTasksFailureAction;

const { Types, Creators } = createActions<TasksActionTypes, TasksActionCreators>(
  {
    getTasks: [],
    getTasksSuccess: ['tasks'],
    getTasksFailure: ['error'],
  },
  {
    prefix: 'TASKS/',
  },
);

export const tasksActionTypes = Types;

export const tasksActionCreators = Creators;
