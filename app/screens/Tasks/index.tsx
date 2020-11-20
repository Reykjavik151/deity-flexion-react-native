import React, { useCallback, useEffect } from 'react';
import { View, TouchableOpacity, FlatList } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import _ from 'lodash';

import styles from './tasks.styles';
import { TasksScreenProps } from './tasks.props';
import { DefaultHeader, Line } from '../../components';
import { LINE_HEIGHT } from '../../components/Line/line.presets';
import { COMMON_STYLES } from '../../utils/commonStyles';
import { COLORS } from '../../utils/colors';
import { useDispatch } from 'react-redux';
import { useGetTasksCallback, useTasks } from '../../redux/tasks';
import { TaskView } from '../../components/TaskView';
import { ITask, Status } from '../../utils/types';

export const TasksScreen: React.FunctionComponent<TasksScreenProps> = () => {
  const dispatch = useDispatch();
  const onGetTasks = useGetTasksCallback(dispatch);
  const onUpdateTask = useCallback((task: ITask) => task, []);

  const tasks = useTasks();

  useEffect(() => {
    onGetTasks();
  }, [onGetTasks]);

  const onAddPress = useCallback(() => {}, []);

  const onTaskPress = useCallback(
    (task: ITask) => {
      switch (task.status) {
        case Status.COMPLETED:
          task.status = Status.NONE;
          break;
        case Status.NONE:
          task.status = Status.COMPLETED;
          break;
      }

      onUpdateTask(task);
    },
    [onUpdateTask],
  );

  const onTaskLongPress = useCallback((task: ITask) => task, []);

  return (
    <View style={styles.container}>
      <DefaultHeader preset="top" title="Tasks" />

      <View style={COMMON_STYLES.flexContainer}>
        <FlatList
          data={tasks}
          renderItem={({ item: task }) => (
            <TaskView task={task} onTaskPress={onTaskPress} onTaskLongPress={onTaskLongPress} />
          )}
          style={styles.taskList}
        />
      </View>

      <Line height={LINE_HEIGHT.SMALL} />
      <Line height={LINE_HEIGHT.LARGE} style={{ lineContainer: COMMON_STYLES.opacity70 }} />
      <Line height={LINE_HEIGHT.LARGE} style={{ lineContainer: COMMON_STYLES.opacity70 }} />
      <Line height={LINE_HEIGHT.SMALL} />

      <TouchableOpacity onPress={onAddPress} style={styles.addButtonContainer}>
        <MaterialIcon name="add" size={48} color={COLORS.BLUE} />
      </TouchableOpacity>
    </View>
  );
};
