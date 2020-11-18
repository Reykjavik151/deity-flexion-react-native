import { StyleSheet, ViewStyle } from 'react-native';
import { COLORS } from '../../utils/colors';

interface LoginScreenStyles {
  container: ViewStyle;
}

export const styles = StyleSheet.create<LoginScreenStyles>({
  container: {
    flex: 1,
    backgroundColor: COLORS.PRIMARY_BLUE,
  },
});
