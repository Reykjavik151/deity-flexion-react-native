import React, { useCallback, useMemo, useState } from 'react';
import { View, Text } from 'react-native';
import { useDispatch } from 'react-redux';
import moment from 'moment';

import styles from './notes-add.styles';
import { NotesAddScreenProps } from './notes-add.props';
import { DefaultHeader, DefaultLineInput, Line } from '../../components';
import { COMMON_STYLES } from '../../utils/commonStyles';
import { LINE_HEIGHT } from '../../components/Line/line.presets';
import {
  useAddNoteCallback,
  useDeleteNoteCallback,
  useUpdateNoteCallback,
} from '../../redux/notes';
import { Status } from '../../utils/types';
import { useUserCredentials } from '../../redux/user';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const NotesAddScreen: React.FunctionComponent<NotesAddScreenProps> = ({
  route,
  navigation,
}) => {
  const note = useMemo(() => route.params?.note, [route]);
  const user = useUserCredentials();

  const dispatch = useDispatch();
  const onAddNote = useAddNoteCallback(dispatch);
  const onUpdateNote = useUpdateNoteCallback(dispatch);
  const onDeleteNote = useDeleteNoteCallback(dispatch);

  const [title, setTitle] = useState(note?.title ?? '');
  const [body, setBody] = useState(note?.body ?? '');

  const onSubmit = useCallback(() => {
    if (note) {
      onUpdateNote({ ...note, title, body });
    } else {
      onAddNote({
        id: '',
        ownerUid: user?.user.uid!,
        title,
        body,
        createdAt: moment().toISOString(),
      });
    }

    navigation.goBack();
  }, [navigation, title, body, user, onAddNote, onUpdateNote, note]);

  const onDeletePress = useCallback(() => {
    onDeleteNote(note?.id!);
    navigation.goBack();
  }, [onDeleteNote, note, navigation]);

  return (
    <View style={styles.container}>
      <DefaultHeader preset="top" title={note ? 'Edit Note' : 'Add Note'} />

      <DefaultLineInput
        title="Title"
        inputProps={{
          value: title,
          onChangeText: setTitle,
        }}
      />
      <DefaultLineInput
        title="Body"
        inputProps={{
          value: body,
          onChangeText: setBody,
          style: styles.multilineBodyContainer,
          multiline: true,
          numberOfLines: 4,
        }}
        style={{
          lineContainer: COMMON_STYLES.mb18,
        }}
      />
      <TouchableOpacity onPress={onSubmit}>
        <Line
          height={LINE_HEIGHT.BUTTON}
          style={{ lineContainer: [COMMON_STYLES.centeredContainer, COMMON_STYLES.mb18] }}
        >
          <Text style={styles.submitText}>{note ? 'Edit' : 'Save'}</Text>
        </Line>
      </TouchableOpacity>
      {note && (
        <TouchableOpacity onPress={onDeletePress}>
          <Line
            height={LINE_HEIGHT.BUTTON}
            style={{
              lineContainer: [
                styles.deleteButtonContainer,
                COMMON_STYLES.centeredContainer,
                COMMON_STYLES.mb32,
              ],
            }}
          >
            <Text style={styles.submitText}>Delete</Text>
          </Line>
        </TouchableOpacity>
      )}

      <Line height={LINE_HEIGHT.SMALL} style={{ lineContainer: COMMON_STYLES.mb12 }} />
      <Line height={LINE_HEIGHT.LARGE} style={{ lineContainer: COMMON_STYLES.mb18 }} />
      <Line height={LINE_HEIGHT.LARGE} style={{ lineContainer: COMMON_STYLES.mb12 }} />
      <Line height={LINE_HEIGHT.SMALL} />

      <View style={COMMON_STYLES.flexContainer} />
    </View>
  );
};
