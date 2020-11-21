import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

interface NoteViewStyles {
  container: ViewStyle;
  title: TextStyle;
  description: TextStyle;
}

export default StyleSheet.create<NoteViewStyles>({
  container: {},
  title: {
    fontSize: 26,
  },
  description: {
    fontSize: 16,
    opacity: 0.54,
  },
});
