import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { COLORS } from '../../utils/colors';

interface TasksAddScreenStyles {
  container: ViewStyle;
  submitText: TextStyle;
  deleteButtonContainer: ViewStyle;
}

export default StyleSheet.create<TasksAddScreenStyles>({
  container: {
    flex: 1,
    backgroundColor: COLORS.PRIMARY_BLUE,
  },
  submitText: {
    fontSize: 26,
    fontWeight: 'bold',
  },
  deleteButtonContainer: {
    backgroundColor: COLORS.LIGHT_RED,
  },
});
