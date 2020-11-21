import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { COLORS } from '../../utils/colors';

interface DefaultHeaderStyles {
  container: ViewStyle;
  topRoundedContainer: ViewStyle;
  bottomRoundedContainer: ViewStyle;
  title: TextStyle;
}

export default StyleSheet.create<DefaultHeaderStyles>({
  container: {
    width: '100%',
    backgroundColor: COLORS.WHITE,
    alignItems: 'center',
  },
  topRoundedContainer: {
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
  },
  bottomRoundedContainer: {
    borderBottomLeftRadius: 14,
    borderBottomRightRadius: 14,
  },
  title: {
    fontSize: 26,
    color: COLORS.BLUE,
  },
});
