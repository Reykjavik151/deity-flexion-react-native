import React, { useCallback } from 'react';
import { Text, TouchableOpacity } from 'react-native';

import styles from './note-view.styles';
import { Line } from '../Line';
import { NoteViewProps } from './note-view.props';
import { COMMON_STYLES } from '../../utils/commonStyles';

export const NoteView: React.FunctionComponent<NoteViewProps> = ({
  note,
  onNotePress,
  onNoteLongPress,
}) => {
  const onPress = useCallback(() => {
    onNotePress(note);
  }, [onNotePress, note]);

  const onLongPress = useCallback(() => {
    onNoteLongPress(note);
  }, [onNoteLongPress, note]);

  return (
    <TouchableOpacity onPress={onPress} onLongPress={onLongPress} style={styles.container}>
      <Line style={{ lineContainer: [COMMON_STYLES.centeredContainer, styles.lineContainer] }}>
        <Text style={styles.title}>{note.title}</Text>
        <Text style={styles.description}>{note.body}</Text>
      </Line>
    </TouchableOpacity>
  );
};
