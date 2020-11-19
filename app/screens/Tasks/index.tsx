import React, { useCallback } from 'react';
import { View, TouchableOpacity } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import styles from './tasks.styles';
import { TasksScreenProps } from './tasks.props';
import { DefaultHeader, Line } from '../../components';
import { LINE_HEIGHT } from '../../components/Line/line.presets';
import { COMMON_STYLES } from '../../utils/commonStyles';
import { COLORS } from '../../utils/colors';

export const TasksScreen: React.FunctionComponent<TasksScreenProps> = () => {
  const onAddPress = useCallback(() => {}, []);

  return (
    <View style={styles.container}>
      <DefaultHeader preset="top" title="Tasks" />

      <View style={COMMON_STYLES.flexContainer} />

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
