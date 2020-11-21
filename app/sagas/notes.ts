import { call, put, select } from 'redux-saga/effects';

import {
  GetNotesFailureAction,
  GetNotesSuccessAction,
  AddNoteAction,
  AddNoteSuccessAction,
  AddNoteFailureAction,
  notesActionCreators,
  UpdateNoteAction,
  UpdateNoteFailureAction,
  UpdateNoteSuccessAction,
  DeleteNoteAction,
  DeleteNoteSuccessAction,
  DeleteNoteFailureAction,
} from '../redux/notes';
import { FirebaseHelper } from '../services/firebase';
import { FIREBASE_NOTES_COLLECTION_NAME } from '../utils/constants';
import { INote } from '../utils/types';

export function* getNotes() {
  try {
    const userUid = yield select((state) => state.user.userCredentials.user.uid);

    const notes: INote[] = yield call(
      FirebaseHelper.getCollectionWithDocId,
      userUid,
      FIREBASE_NOTES_COLLECTION_NAME,
    );

    yield put<GetNotesSuccessAction>(notesActionCreators.getNotesSuccess(notes));
  } catch (err) {
    yield put<GetNotesFailureAction>(notesActionCreators.getNotesFailure(err));
  }
}

export function* addNote({ note }: AddNoteAction) {
  try {
    const taskWithId = yield FirebaseHelper.addDoc<INote>(FIREBASE_NOTES_COLLECTION_NAME, note);

    yield put<AddNoteSuccessAction>(notesActionCreators.addNoteSuccess(taskWithId));
  } catch (err) {
    yield put<AddNoteFailureAction>(notesActionCreators.addNoteFailure(err));
  }
}

export function* updateNote({ note }: UpdateNoteAction) {
  try {
    yield FirebaseHelper.updateDoc<INote>(FIREBASE_NOTES_COLLECTION_NAME, note);

    yield put<UpdateNoteSuccessAction>(notesActionCreators.updateNoteSuccess(note));
  } catch (err) {
    yield put<UpdateNoteFailureAction>(notesActionCreators.updateNoteFailure(err));
  }
}

export function* deleteNote({ noteId }: DeleteNoteAction) {
  try {
    const isDeleted: boolean = yield FirebaseHelper.deleteDoc(
      FIREBASE_NOTES_COLLECTION_NAME,
      noteId,
    );

    if (isDeleted) {
      yield put<DeleteNoteSuccessAction>(notesActionCreators.deleteNoteSuccess(noteId));
    } else {
      throw new Error("Note Delete: NoteID can't be found");
    }
  } catch (err) {
    yield put<DeleteNoteFailureAction>(notesActionCreators.deleteNoteFailure(err));
  }
}
