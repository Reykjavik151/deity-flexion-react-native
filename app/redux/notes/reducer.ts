import { createReducer } from 'reduxsauce';
import _ from 'lodash';

import {
  NotesAction,
  notesActionTypes,
  GetNotesAction,
  GetNotesSuccessAction,
  GetNotesFailureAction,
  AddNoteAction,
  AddNoteSuccessAction,
  AddNoteFailureAction,
  UpdateNoteAction,
  UpdateNoteSuccessAction,
  UpdateNoteFailureAction,
  DeleteNoteAction,
  DeleteNoteSuccessAction,
  DeleteNoteFailureAction,
} from './actions';
import { INote } from '../../utils/types';

export interface NotesState {
  isLoading: boolean;
  notes: INote[];
  error: string | null;
}

const INITIAL_STATE: NotesState = {
  isLoading: false,
  notes: [],
  error: null,
};

type Handler<A> = (state: NotesState, action: A) => NotesState;

const getNotes: Handler<GetNotesAction> = (state) => ({
  ...state,
  isLoading: true,
});
const getNotesSuccess: Handler<GetNotesSuccessAction> = (state, { notes }) => ({
  ...state,
  notes,
  isLoading: false,
});
const getNotesFailure: Handler<GetNotesFailureAction> = (state, { error }) => ({
  ...state,
  isLoading: false,
  error,
});

const addNote: Handler<AddNoteAction> = (state) => ({
  ...state,
  isLoading: true,
});
const addNoteSuccess: Handler<AddNoteSuccessAction> = (state, { note }) => ({
  ...state,
  notes: [...state.notes, note],
  isLoading: false,
});
const addNoteFailure: Handler<AddNoteFailureAction> = (state, { error }) => ({
  ...state,
  isLoading: false,
  error,
});

const updateNote: Handler<UpdateNoteAction> = (state) => state;
const updateNoteSuccess: Handler<UpdateNoteSuccessAction> = (state, { note }) => {
  const updatedNotes = [...state.notes];

  const index = _.findIndex(updatedNotes, { id: note.id });
  if (index !== -1) {
    updatedNotes.splice(index, 1, note);
  }

  return {
    ...state,
    notes: updatedNotes,
    isLoading: false,
  };
};
const updateNoteFailure: Handler<UpdateNoteFailureAction> = (state, { error }) => ({
  ...state,
  isLoading: false,
  error,
});

const deleteNote: Handler<DeleteNoteAction> = (state) => ({
  ...state,
  isLoading: true,
});
const deleteNoteSuccess: Handler<DeleteNoteSuccessAction> = (state, { noteId }) => {
  const updatedNotes = [...state.notes];

  _.remove(updatedNotes, { id: noteId });

  return {
    ...state,
    notes: updatedNotes,
    isLoading: false,
  };
};
const deleteNoteFailure: Handler<DeleteNoteFailureAction> = (state, { error }) => ({
  ...state,
  isLoading: false,
  error,
});

export const notesReducer = createReducer<NotesState, NotesAction>(INITIAL_STATE, {
  [notesActionTypes.GET_NOTES]: getNotes,
  [notesActionTypes.GET_NOTES_SUCCESS]: getNotesSuccess,
  [notesActionTypes.GET_NOTES_FAILURE]: getNotesFailure,

  [notesActionTypes.ADD_NOTE]: addNote,
  [notesActionTypes.ADD_NOTE_SUCCESS]: addNoteSuccess,
  [notesActionTypes.ADD_NOTE_FAILURE]: addNoteFailure,

  [notesActionTypes.UPDATE_NOTE]: updateNote,
  [notesActionTypes.UPDATE_NOTE_SUCCESS]: updateNoteSuccess,
  [notesActionTypes.UPDATE_NOTE_FAILURE]: updateNoteFailure,

  [notesActionTypes.DELETE_NOTE]: deleteNote,
  [notesActionTypes.DELETE_NOTE_SUCCESS]: deleteNoteSuccess,
  [notesActionTypes.DELETE_NOTE_FAILURE]: deleteNoteFailure,
});
