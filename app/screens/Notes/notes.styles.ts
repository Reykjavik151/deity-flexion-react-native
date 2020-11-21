import { StyleSheet, ViewStyle } from 'react-native';
import { COLORS } from '../../utils/colors';

interface NotesScreenStyles {
  container: ViewStyle;
  addButtonContainer: ViewStyle;
  listContentContainer: ViewStyle;
}

export default StyleSheet.create<NotesScreenStyles>({
  container: {
    flex: 1,
    backgroundColor: COLORS.PRIMARY_BLUE,
  },
  addButtonContainer: {
    backgroundColor: COLORS.WHITE,
    position: 'absolute',
    top: 96,
    right: 16,
    borderRadius: 50,
    borderColor: 'silver',
    borderWidth: 2,
  },
  listContentContainer: {
    paddingVertical: 16,
  },
});
