import { useCallback } from 'react';
import { useSelector } from 'react-redux';

import { AppDispatch, RootState } from '..';
import { tasksActionTypes } from './actions';

// Selector hooks
export const useTasks = () => useSelector((state: RootState) => state.tasks.tasks);

export const useTasksLoading = () => useSelector((state: RootState) => state.tasks.isLoading);

// Callback hooks
export const useGetTasksCallback = (dispatch: AppDispatch) =>
  useCallback(() => dispatch({ type: tasksActionTypes.GET_TASKS }), [dispatch]);
