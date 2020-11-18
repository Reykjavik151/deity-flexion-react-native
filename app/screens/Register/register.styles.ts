import { StyleSheet, ViewStyle } from 'react-native';
import { COLORS } from '../../utils/colors';

interface RegisterScreenStyles {
  container: ViewStyle;
}

export const styles = StyleSheet.create<RegisterScreenStyles>({
  container: {
    flex: 1,
    backgroundColor: COLORS.PRIMARY_BLUE,
  },
});
