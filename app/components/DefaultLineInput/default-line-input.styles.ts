import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { COLORS } from '../../utils/colors';

interface DefaultLineInputStyles {
  container: ViewStyle;
  titleContainer: ViewStyle;
  titleText: TextStyle;
  input: ViewStyle;
}

export default StyleSheet.create<DefaultLineInputStyles>({
  container: {
    justifyContent: 'center',
  },
  titleContainer: {
    marginTop: 16,
    marginLeft: 8,
  },
  titleText: {
    color: COLORS.WHITE,
    fontSize: 26.0,
    fontWeight: 'bold',
  },
  input: {
    textAlignVertical: 'top',
    padding: 16,
    fontSize: 26,
    fontWeight: 'bold',
  },
});
