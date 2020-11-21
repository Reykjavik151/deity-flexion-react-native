import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { COLORS } from '../../utils/colors';

interface NotesAddScreenStyles {
  container: ViewStyle;
  submitText: TextStyle;
  deleteButtonContainer: ViewStyle;
}

export default StyleSheet.create<NotesAddScreenStyles>({
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
