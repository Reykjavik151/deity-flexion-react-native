import { StyleSheet, ViewStyle } from 'react-native';
import { COLORS } from '../../utils/colors';
import { ILinesStyles } from '../../utils/types';

interface LoginScreenStyles extends ILinesStyles {
  container: ViewStyle;
}

export const styles = StyleSheet.create<LoginScreenStyles>({
  container: {
    flex: 1,
    backgroundColor: COLORS.PRIMARY_BLUE,
  },

  /* Lines */
  line1: {
    marginRight: 32,
    marginBottom: 12,
  },
  line2: {
    marginBottom: 12,
  },
  line3: {
    marginRight: 32,
    marginBottom: 12,
  },
  line4: {
    marginRight: 64,
    marginBottom: 12,
  },
});
