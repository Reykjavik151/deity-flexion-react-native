import React, { useCallback, useMemo } from 'react';
import { Text, TouchableOpacity } from 'react-native';

import styles from './task-view.styles';
import { Status } from '../../utils/types';
import { Line } from '../Line';
import { TaskViewProps } from './task-view.props';
import { COMMON_STYLES } from '../../utils/commonStyles';

export const TaskView: React.FunctionComponent<TaskViewProps> = ({
  task,
  onTaskPress,
  onTaskLongPress,
}) => {
  const isCompleted = useMemo(() => task.status === Status.COMPLETED, [task.status]);
  const containerLineStyleByCompletion = useMemo(
    () => (isCompleted ? styles.completedContainer : styles.uncompletedContainer),
    [isCompleted],
  );

  const onPress = useCallback(() => {
    onTaskPress(task);
  }, [onTaskPress, task]);

  const onLongPress = useCallback(() => {
    onTaskLongPress(task);
  }, [onTaskLongPress, task]);

  return (
    <TouchableOpacity onPress={onPress} onLongPress={onLongPress} style={COMMON_STYLES.reverted}>
      <Line
        isCompleted={isCompleted}
        style={{ lineContainer: [containerLineStyleByCompletion, COMMON_STYLES.centeredContainer] }}
      >
        <Text style={styles.title}>{task.title}</Text>
        <Text style={styles.description}>{task.description}</Text>
      </Line>
    </TouchableOpacity>
  );
};
