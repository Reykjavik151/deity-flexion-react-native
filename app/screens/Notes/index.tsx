import React, { useCallback, useEffect } from 'react';
import { View, FlatList, TouchableOpacity } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { useDispatch } from 'react-redux';

import { DefaultHeader, Line, NoteView } from '../../components';
import { LINE_HEIGHT } from '../../components/Line/line.presets';
import { useGetNotesCallback, useNotes } from '../../redux/notes';
import { COLORS } from '../../utils/colors';
import { COMMON_STYLES } from '../../utils/commonStyles';
import { INote } from '../../utils/types';
import { NotesScreenProps } from './notes.props';
import styles from './notes.styles';

export const NotesScreen: React.FunctionComponent<NotesScreenProps> = ({ navigation }) => {
  const dispatch = useDispatch();
  const onGetNotes = useGetNotesCallback(dispatch);

  const notes = useNotes();

  useEffect(() => {
    onGetNotes();
  }, [onGetNotes]);

  const onAddPress = useCallback(() => {
    navigation.navigate('NotesAdd');
  }, [navigation]);

  const onNoteEdit = useCallback(
    (note: INote) => {
      navigation.navigate('NotesAdd', { note });
    },
    [navigation],
  );

  return (
    <View style={styles.container}>
      <Line height={LINE_HEIGHT.SMALL} style={{ lineContainer: COMMON_STYLES.mb12 }} />
      <Line height={LINE_HEIGHT.LARGE} style={{ lineContainer: COMMON_STYLES.mb12 }} />
      <Line height={LINE_HEIGHT.LARGE} style={{ lineContainer: COMMON_STYLES.mb12 }} />
      <Line height={LINE_HEIGHT.SMALL} />

      <View style={COMMON_STYLES.flexContainer}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={notes}
          renderItem={({ item: note }) => (
            <NoteView note={note} onNotePress={onNoteEdit} onNoteLongPress={onNoteEdit} />
          )}
          keyExtractor={(item, index) => `note-${index}-${item.id}`}
          contentContainerStyle={styles.listContentContainer}
        />
      </View>

      <TouchableOpacity onPress={onAddPress} style={styles.addButtonContainer}>
        <MaterialIcon name="add" size={48} color={COLORS.BLUE} />
      </TouchableOpacity>

      <DefaultHeader title="Notes" preset="bottom" />
    </View>
  );
};
