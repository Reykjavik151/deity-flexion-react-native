import { StyleSheet, ViewStyle } from 'react-native';
import COLORS from '../../utils/colors';

interface InitialScreenStyles {
  root: ViewStyle;
}

export const styles = StyleSheet.create<InitialScreenStyles>({
  root: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
