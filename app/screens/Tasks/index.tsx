import React from 'react';
import { View } from 'react-native';

import styles from './tasks.styles';
import { TasksScreenProps } from './tasks.props';

export const TasksScreen: React.FunctionComponent<TasksScreenProps> = () => {
  return <View style={styles.container}></View>;
};
