import { createReducer } from 'reduxsauce';
import _ from 'lodash';

import {
  TasksAction,
  tasksActionTypes,
  GetTasksAction,
  GetTasksSuccessAction,
  GetTasksFailureAction,
  AddTaskAction,
  AddTaskSuccessAction,
  AddTaskFailureAction,
  UpdateTaskAction,
  UpdateTaskSuccessAction,
  UpdateTaskFailureAction,
  DeleteTaskAction,
  DeleteTaskSuccessAction,
  DeleteTaskFailureAction,
} from './actions';
import { ITask } from '../../utils/types';

export interface TasksState {
  isLoading: boolean;
  tasks: ITask[];
  error: string | null;
}

const INITIAL_STATE: TasksState = {
  isLoading: false,
  tasks: [],
  error: null,
};

type Handler<A> = (state: TasksState, action: A) => TasksState;

const getTasks: Handler<GetTasksAction> = (state) => ({
  ...state,
  isLoading: true,
});
const getTasksSuccess: Handler<GetTasksSuccessAction> = (state, { tasks }) => ({
  ...state,
  tasks,
  isLoading: false,
});
const getTasksFailure: Handler<GetTasksFailureAction> = (state, { error }) => ({
  ...state,
  isLoading: false,
  error,
});

const addTask: Handler<AddTaskAction> = (state) => ({
  ...state,
  isLoading: true,
});
const addTaskSuccess: Handler<AddTaskSuccessAction> = (state, { task }) => ({
  ...state,
  tasks: [...state.tasks, task],
  isLoading: false,
});
const addTaskFailure: Handler<AddTaskFailureAction> = (state, { error }) => ({
  ...state,
  isLoading: false,
  error,
});

const updateTask: Handler<UpdateTaskAction> = (state) => state;
const updateTaskSuccess: Handler<UpdateTaskSuccessAction> = (state, { task }) => {
  const updatedTasks = [...state.tasks];

  const index = _.findIndex(updatedTasks, { id: task.id });
  if (index !== -1) {
    updatedTasks.splice(index, 1, task);
  }

  return {
    ...state,
    tasks: updatedTasks,
    isLoading: false,
  };
};
const updateTaskFailure: Handler<UpdateTaskFailureAction> = (state, { error }) => ({
  ...state,
  isLoading: false,
  error,
});

const deleteTask: Handler<DeleteTaskAction> = (state) => ({
  ...state,
  isLoading: true,
});
const deleteTaskSuccess: Handler<DeleteTaskSuccessAction> = (state, { taskId }) => {
  const updatedTasks = [...state.tasks];

  _.remove(updatedTasks, { id: taskId });

  return {
    ...state,
    tasks: updatedTasks,
    isLoading: false,
  };
};
const deleteTaskFailure: Handler<DeleteTaskFailureAction> = (state, { error }) => ({
  ...state,
  isLoading: false,
  error,
});

export const tasksReducer = createReducer<TasksState, TasksAction>(INITIAL_STATE, {
  [tasksActionTypes.GET_TASKS]: getTasks,
  [tasksActionTypes.GET_TASKS_SUCCESS]: getTasksSuccess,
  [tasksActionTypes.GET_TASKS_FAILURE]: getTasksFailure,

  [tasksActionTypes.ADD_TASK]: addTask,
  [tasksActionTypes.ADD_TASK_SUCCESS]: addTaskSuccess,
  [tasksActionTypes.ADD_TASK_FAILURE]: addTaskFailure,

  [tasksActionTypes.UPDATE_TASK]: updateTask,
  [tasksActionTypes.UPDATE_TASK_SUCCESS]: updateTaskSuccess,
  [tasksActionTypes.UPDATE_TASK_FAILURE]: updateTaskFailure,

  [tasksActionTypes.DELETE_TASK]: deleteTask,
  [tasksActionTypes.DELETE_TASK_SUCCESS]: deleteTaskSuccess,
  [tasksActionTypes.DELETE_TASK_FAILURE]: deleteTaskFailure,
});
