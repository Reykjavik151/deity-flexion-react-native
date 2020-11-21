import { createActions } from 'reduxsauce';
import { INote } from '../../utils/types';

interface NotesActionTypes {
  GET_NOTES: 'GET_NOTES';
  GET_NOTES_SUCCESS: 'GET_NOTES_SUCCESS';
  GET_NOTES_FAILURE: 'GET_NOTES_FAILURE';

  ADD_NOTE: 'ADD_NOTE';
  ADD_NOTE_SUCCESS: 'ADD_NOTE_SUCCESS';
  ADD_NOTE_FAILURE: 'ADD_NOTE_FAILURE';

  UPDATE_NOTE: 'UPDATE_NOTE';
  UPDATE_NOTE_SUCCESS: 'UPDATE_NOTE_SUCCESS';
  UPDATE_NOTE_FAILURE: 'UPDATE_NOTE_FAILURE';

  DELETE_NOTE: 'DELETE_NOTE';
  DELETE_NOTE_SUCCESS: 'DELETE_NOTE_SUCCESS';
  DELETE_NOTE_FAILURE: 'DELETE_NOTE_FAILURE';
}

export interface GetNotesAction {
  type: NotesActionTypes['GET_NOTES'];
}
export interface GetNotesSuccessAction {
  type: NotesActionTypes['GET_NOTES_SUCCESS'];
  notes: INote[];
}
export interface GetNotesFailureAction {
  type: NotesActionTypes['GET_NOTES_FAILURE'];
  error: string;
}

export interface AddNoteAction {
  type: NotesActionTypes['ADD_NOTE'];
  note: INote;
}
export interface AddNoteSuccessAction {
  type: NotesActionTypes['ADD_NOTE_SUCCESS'];
  note: INote;
}
export interface AddNoteFailureAction {
  type: NotesActionTypes['ADD_NOTE_FAILURE'];
  error: string;
}

export interface UpdateNoteAction {
  type: NotesActionTypes['UPDATE_NOTE'];
  note: INote;
}
export interface UpdateNoteSuccessAction {
  type: NotesActionTypes['UPDATE_NOTE_SUCCESS'];
  note: INote;
}
export interface UpdateNoteFailureAction {
  type: NotesActionTypes['UPDATE_NOTE_FAILURE'];
  error: string;
}

export interface DeleteNoteAction {
  type: NotesActionTypes['DELETE_NOTE'];
  noteId: string;
}
export interface DeleteNoteSuccessAction {
  type: NotesActionTypes['DELETE_NOTE_SUCCESS'];
  noteId: string;
}
export interface DeleteNoteFailureAction {
  type: NotesActionTypes['DELETE_NOTE_FAILURE'];
  error: string;
}

interface NotesActionCreators {
  getNotes(): GetNotesAction;
  getNotesSuccess(notes: INote[]): GetNotesSuccessAction;
  getNotesFailure(error: string): GetNotesFailureAction;

  addNote(note: INote): AddNoteAction;
  addNoteSuccess(note: INote): AddNoteSuccessAction;
  addNoteFailure(error: string): AddNoteFailureAction;

  updateNote(note: INote): UpdateNoteAction;
  updateNoteSuccess(note: INote): UpdateNoteSuccessAction;
  updateNoteFailure(error: string): UpdateNoteFailureAction;

  deleteNote(noteId: string): DeleteNoteAction;
  deleteNoteSuccess(noteId: string): DeleteNoteSuccessAction;
  deleteNoteFailure(error: string): DeleteNoteFailureAction;
}

export type NotesAction =
  | GetNotesAction
  | GetNotesSuccessAction
  | GetNotesFailureAction
  | AddNoteAction
  | AddNoteSuccessAction
  | AddNoteFailureAction
  | UpdateNoteAction
  | UpdateNoteSuccessAction
  | UpdateNoteFailureAction
  | DeleteNoteAction
  | DeleteNoteSuccessAction
  | DeleteNoteFailureAction;

const { Types, Creators } = createActions<NotesActionTypes, NotesActionCreators>(
  {
    getNotes: [],
    getNotesSuccess: ['notes'],
    getNotesFailure: ['error'],

    addNote: ['note'],
    addNoteSuccess: ['note'],
    addNoteFailure: ['error'],

    updateNote: ['note'],
    updateNoteSuccess: ['note'],
    updateNoteFailure: ['error'],

    deleteNote: ['noteId'],
    deleteNoteSuccess: ['noteId'],
    deleteNoteFailure: ['error'],
  },
  {
    prefix: 'NOTES/',
  },
);

export const notesActionTypes = Types;

export const notesActionCreators = Creators;
