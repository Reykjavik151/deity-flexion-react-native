import { StyleSheet, ViewStyle } from 'react-native';
import { COLORS } from '../../utils/colors';

interface TasksScreenStyles {
  container: ViewStyle;
}

export default StyleSheet.create<TasksScreenStyles>({
  container: {
    flex: 1,
    backgroundColor: COLORS.PRIMARY_BLUE,
  },
});
