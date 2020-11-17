import { StyleSheet, ViewStyle, TextStyle } from 'react-native';
import COLORS from '../../utils/colors';

interface HomeScreenStyles {
  root: ViewStyle;
  body: ViewStyle;
  description: TextStyle;
}

export const styles = StyleSheet.create<HomeScreenStyles>({
  root: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
  },
  body: {
    padding: 20,
  },
  description: {
    marginTop: 15,
  },
});
