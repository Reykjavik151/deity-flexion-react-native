import { INote } from '../../utils/types';

export interface NoteViewProps {
  note: INote;
  onNotePress: (note: INote) => void;
  onNoteLongPress: (note: INote) => void;
}
