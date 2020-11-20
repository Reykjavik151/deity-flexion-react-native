import { createActions } from 'reduxsauce';
import { ITask } from '../../utils/types';

interface TasksActionTypes {
  GET_TASKS: 'GET_TASKS';
  GET_TASKS_SUCCESS: 'GET_TASKS_SUCCESS';
  GET_TASKS_FAILURE: 'GET_TASKS_FAILURE';

  ADD_TASK: 'ADD_TASK';
  ADD_TASK_SUCCESS: 'ADD_TASK_SUCCESS';
  ADD_TASK_FAILURE: 'ADD_TASK_FAILURE';

  UPDATE_TASK: 'UPDATE_TASK';
  UPDATE_TASK_SUCCESS: 'UPDATE_TASK_SUCCESS';
  UPDATE_TASK_FAILURE: 'UPDATE_TASK_FAILURE';

  DELETE_TASK: 'DELETE_TASK';
  DELETE_TASK_SUCCESS: 'DELETE_TASK_SUCCESS';
  DELETE_TASK_FAILURE: 'DELETE_TASK_FAILURE';
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

export interface AddTaskAction {
  type: TasksActionTypes['ADD_TASK'];
  task: ITask;
}
export interface AddTaskSuccessAction {
  type: TasksActionTypes['ADD_TASK_SUCCESS'];
  task: ITask;
}
export interface AddTaskFailureAction {
  type: TasksActionTypes['ADD_TASK_FAILURE'];
  error: string;
}

export interface UpdateTaskAction {
  type: TasksActionTypes['UPDATE_TASK'];
  task: ITask;
}
export interface UpdateTaskSuccessAction {
  type: TasksActionTypes['UPDATE_TASK_SUCCESS'];
  task: ITask;
}
export interface UpdateTaskFailureAction {
  type: TasksActionTypes['UPDATE_TASK_FAILURE'];
  error: string;
}

export interface DeleteTaskAction {
  type: TasksActionTypes['DELETE_TASK'];
  taskId: string;
}
export interface DeleteTaskSuccessAction {
  type: TasksActionTypes['DELETE_TASK_SUCCESS'];
  taskId: string;
}
export interface DeleteTaskFailureAction {
  type: TasksActionTypes['DELETE_TASK_FAILURE'];
  error: string;
}

interface TasksActionCreators {
  getTasks(): GetTasksAction;
  getTasksSuccess(tasks: ITask[]): GetTasksSuccessAction;
  getTasksFailure(error: string): GetTasksFailureAction;

  addTask(task: ITask): AddTaskAction;
  addTaskSuccess(task: ITask): AddTaskSuccessAction;
  addTaskFailure(error: string): AddTaskFailureAction;

  updateTask(task: ITask): UpdateTaskAction;
  updateTaskSuccess(task: ITask): UpdateTaskSuccessAction;
  updateTaskFailure(error: string): UpdateTaskFailureAction;

  deleteTask(taskId: string): DeleteTaskAction;
  deleteTask(taskId: string): DeleteTaskSuccessAction;
  deleteTask(error: string): DeleteTaskFailureAction;
}

export type TasksAction =
  | GetTasksAction
  | GetTasksSuccessAction
  | GetTasksFailureAction
  | AddTaskAction
  | AddTaskSuccessAction
  | AddTaskFailureAction
  | UpdateTaskAction
  | UpdateTaskSuccessAction
  | UpdateTaskFailureAction
  | DeleteTaskAction
  | DeleteTaskSuccessAction
  | DeleteTaskFailureAction;

const { Types, Creators } = createActions<TasksActionTypes, TasksActionCreators>(
  {
    getTasks: [],
    getTasksSuccess: ['tasks'],
    getTasksFailure: ['error'],

    addTask: ['task'],
    addTaskSuccess: ['task'],
    addTaskFailure: ['error'],

    updateTask: ['task'],
    updateTaskSuccess: ['task'],
    updateTaskFailure: ['error'],

    deleteTask: ['taskId'],
    deleteTaskSuccess: ['taskId'],
    deleteTaskFailure: ['error'],
  },
  {
    prefix: 'TASKS/',
  },
);

export const tasksActionTypes = Types;

export const tasksActionCreators = Creators;
