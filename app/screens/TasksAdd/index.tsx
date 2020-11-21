import React, { useCallback, useMemo, useState } from 'react';
import { View, Text } from 'react-native';
import { useDispatch } from 'react-redux';
import moment from 'moment';

import styles from './tasks-add.styles';
import { TasksAddScreenProps } from './tasks-add.props';
import { DefaultHeader, DefaultLineInput, Line } from '../../components';
import { COMMON_STYLES } from '../../utils/commonStyles';
import { LINE_HEIGHT } from '../../components/Line/line.presets';
import {
  useAddTaskCallback,
  useDeleteTaskCallback,
  useUpdateTaskCallback,
} from '../../redux/tasks';
import { Status } from '../../utils/types';
import { useUserCredentials } from '../../redux/user';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const TasksAddScreen: React.FunctionComponent<TasksAddScreenProps> = ({
  route,
  navigation,
}) => {
  const task = useMemo(() => route.params?.task, [route]);
  const user = useUserCredentials();

  const dispatch = useDispatch();
  const onAddTask = useAddTaskCallback(dispatch);
  const onUpdateTask = useUpdateTaskCallback(dispatch);
  const onDeleteTask = useDeleteTaskCallback(dispatch);

  const [title, setTitle] = useState(task?.title ?? '');
  const [description, setDescription] = useState(task?.description ?? '');

  const onSubmit = useCallback(() => {
    if (task) {
      onUpdateTask({ ...task, title, description });
    } else {
      onAddTask({
        id: '',
        ownerUid: user?.user.uid!,
        status: Status.NONE,
        title,
        description,
        createdAt: moment().toISOString(),
      });
    }

    navigation.goBack();
  }, [navigation, description, title, user, onAddTask, onUpdateTask, task]);

  const onDeletePress = useCallback(() => {
    onDeleteTask(task?.id!);
    navigation.goBack();
  }, [onDeleteTask, task, navigation]);

  return (
    <View style={styles.container}>
      <DefaultHeader preset="top" title="Add Task" />

      <DefaultLineInput
        title="Title"
        inputProps={{
          value: title,
          onChangeText: setTitle,
        }}
      />
      <DefaultLineInput
        title="Description"
        inputProps={{
          value: description,
          onChangeText: setDescription,
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
          <Text style={styles.submitText}>{task ? 'Edit' : 'Save'}</Text>
        </Line>
      </TouchableOpacity>
      {task && (
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
