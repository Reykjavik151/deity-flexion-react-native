import { StyleSheet, ViewStyle } from 'react-native';
import { COLORS } from '../../utils/colors';

interface LineStyles {
  container: ViewStyle;
  lineContainer: ViewStyle;
  uncompletedLineContainer: ViewStyle;
}

export default StyleSheet.create<LineStyles>({
  container: {
    width: '100%',
  },
  lineContainer: {
    backgroundColor: COLORS.WHITE,
  },
  uncompletedLineContainer: {
    borderTopRightRadius: 16,
    borderBottomRightRadius: 16,
  },
});
