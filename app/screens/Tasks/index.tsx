import React from 'react';
import { View } from 'react-native';

import styles from './tasks.styles';
import { TasksScreenProps } from './tasks.props';
import { DefaultHeader } from '../../components';

export const TasksScreen: React.FunctionComponent<TasksScreenProps> = () => {
  return (
    <View style={styles.container}>
      <DefaultHeader preset="top" title="Tasks" />
    </View>
  );
};
