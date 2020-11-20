import { StyleSheet, ViewStyle } from 'react-native';
import { COLORS } from '../../utils/colors';

interface TasksScreenStyles {
  container: ViewStyle;
  addButtonContainer: ViewStyle;
  taskList: ViewStyle;
}

export default StyleSheet.create<TasksScreenStyles>({
  container: {
    flex: 1,
    backgroundColor: COLORS.PRIMARY_BLUE,
  },
  addButtonContainer: {
    backgroundColor: COLORS.WHITE,
    position: 'absolute',
    bottom: 64,
    right: 16,
    borderRadius: 50,
    borderColor: 'silver',
    borderWidth: 2,
  },
  taskList: { transform: [{ scaleY: -1 }] },
});
