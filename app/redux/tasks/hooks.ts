import { useCallback } from 'react';
import { useSelector } from 'react-redux';

import { AppDispatch, RootState } from '..';
import { ITask } from '../../utils/types';
import { tasksActionTypes } from './actions';

// Selector hooks
export const useTasks = () => useSelector((state: RootState) => state.tasks.tasks);

export const useTasksLoading = () => useSelector((state: RootState) => state.tasks.isLoading);

// Callback hooks
export const useGetTasksCallback = (dispatch: AppDispatch) =>
  useCallback(() => dispatch({ type: tasksActionTypes.GET_TASKS }), [dispatch]);

export const useAddTaskCallback = (dispatch: AppDispatch) =>
  useCallback((task: ITask) => dispatch({ type: tasksActionTypes.ADD_TASK, task }), [dispatch]);

export const useUpdateTaskCallback = (dispatch: AppDispatch) =>
  useCallback((task: ITask) => dispatch({ type: tasksActionTypes.UPDATE_TASK, task }), [dispatch]);

export const useDeleteTaskCallback = (dispatch: AppDispatch) =>
  useCallback((taskId: string) => dispatch({ type: tasksActionTypes.DELETE_TASK, taskId }), [
    dispatch,
  ]);
