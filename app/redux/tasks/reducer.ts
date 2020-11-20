import { createReducer } from 'reduxsauce';
import { FirebaseAuthTypes } from '@react-native-firebase/auth';
import {
  TasksAction,
  tasksActionTypes,
  GetTasksAction,
  GetTasksSuccessAction,
  GetTasksFailureAction,
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

export const tasksReducer = createReducer<TasksState, TasksAction>(INITIAL_STATE, {
  [tasksActionTypes.GET_TASKS]: getTasks,
  [tasksActionTypes.GET_TASKS_SUCCESS]: getTasksSuccess,
  [tasksActionTypes.GET_TASKS_FAILURE]: getTasksFailure,
});
