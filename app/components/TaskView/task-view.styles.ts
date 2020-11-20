import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

interface TaskViewStyles {
  completedContainer: ViewStyle;
  uncompletedContainer: ViewStyle;
  title: TextStyle;
  description: TextStyle;
}

export default StyleSheet.create<TaskViewStyles>({
  completedContainer: {
    paddingRight: 80,
    paddingLeft: 16,
    paddingVertical: 8,
    marginBottom: 16,
  },
  uncompletedContainer: {
    marginRight: 64,
    paddingRight: 16,
    paddingLeft: 16,
    paddingVertical: 8,
    marginBottom: 16,
  },
  title: {
    fontSize: 26,
  },
  description: {
    fontSize: 16,
    opacity: 0.54,
  },
});
