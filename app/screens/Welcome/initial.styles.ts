import { StyleSheet, ViewStyle } from 'react-native';
import COLORS from '../../utils/colors';

interface WelcomeScreenStyles {
  container: ViewStyle;
}

export const styles = StyleSheet.create<WelcomeScreenStyles>({
  container: {
    flex: 1,
    backgroundColor: COLORS.PRIMARY_BLUE,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
