import { StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { COLORS } from '../../utils/colors';

interface HomeScreenStyles {
  container: ViewStyle;
  body: ViewStyle;
  description: TextStyle;
}

export const styles = StyleSheet.create<HomeScreenStyles>({
  container: {
    flex: 1,
    backgroundColor: COLORS.PRIMARY_BLUE,
  },
  body: {
    padding: 20,
  },
  description: {
    marginTop: 15,
  },
});
