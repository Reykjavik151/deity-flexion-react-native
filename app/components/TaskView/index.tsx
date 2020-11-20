import React, { useCallback, useMemo } from 'react';
import { Text } from 'react-native';

import styles from './task-view.styles';
import { Status } from '../../utils/types';
import { Line } from '../Line';
import { TaskViewProps } from './task-view.props';
import { COMMON_STYLES } from '../../utils/commonStyles';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const TaskView: React.FunctionComponent<TaskViewProps> = ({ task, onTaskPress }) => {
  const isCompleted = useMemo(() => task.status === Status.COMPLETED, [task.status]);
  const containerLineStyleByCompletion = useMemo(
    () => (isCompleted ? styles.completedContainer : styles.uncompletedContainer),
    [isCompleted],
  );

  const onPress = useCallback(() => {
    onTaskPress(task);
  }, [onTaskPress, task]);

  return (
    <TouchableOpacity onPress={onPress} style={COMMON_STYLES.reverted}>
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
