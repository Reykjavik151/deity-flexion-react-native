import { useCallback } from 'react';
import { useSelector } from 'react-redux';

import { AppDispatch, RootState } from '..';
import { INote } from '../../utils/types';
import { notesActionTypes } from './actions';

// Selector hooks
export const useNotes = () => useSelector((state: RootState) => state.notes.notes);

export const useNotesLoading = () => useSelector((state: RootState) => state.notes.isLoading);

// Callback hooks
export const useGetNotesCallback = (dispatch: AppDispatch) =>
  useCallback(() => dispatch({ type: notesActionTypes.GET_NOTES }), [dispatch]);

export const useAddNoteCallback = (dispatch: AppDispatch) =>
  useCallback((note: INote) => dispatch({ type: notesActionTypes.ADD_NOTE, note }), [dispatch]);

export const useUpdateNoteCallback = (dispatch: AppDispatch) =>
  useCallback((note: INote) => dispatch({ type: notesActionTypes.UPDATE_NOTE, note }), [dispatch]);

export const useDeleteNoteCallback = (dispatch: AppDispatch) =>
  useCallback((noteId: string) => dispatch({ type: notesActionTypes.DELETE_NOTE, noteId }), [
    dispatch,
  ]);
