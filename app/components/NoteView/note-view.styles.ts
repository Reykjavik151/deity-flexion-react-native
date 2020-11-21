import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

interface NoteViewStyles {
  container: ViewStyle;
  title: TextStyle;
  description: TextStyle;
  lineContainer: ViewStyle;
}

export default StyleSheet.create<NoteViewStyles>({
  container: {
    marginBottom: 16,
  },
  title: {
    fontSize: 26,
  },
  description: {
    fontSize: 16,
    opacity: 0.54,
  },
  lineContainer: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
});
