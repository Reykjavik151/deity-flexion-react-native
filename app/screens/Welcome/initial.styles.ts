import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { COLORS } from '../../utils/colors';
import { ILinesStyles } from '../../utils/types';

interface WelcomeScreenStyles extends ILinesStyles {
  container: ViewStyle;
  upperFirstLineContainer: ViewStyle;
  upperSecondLineContainer: ViewStyle;
  deityFlexionTitle: TextStyle;
  buttonTitle: TextStyle;
}

export const styles = StyleSheet.create<WelcomeScreenStyles>({
  container: {
    flex: 1,
    backgroundColor: COLORS.PRIMARY_BLUE,
  },
  upperFirstLineContainer: {
    marginRight: 80,
    marginBottom: 12,
  },
  upperSecondLineContainer: {
    marginRight: 128,
    marginBottom: 12,
  },
  deityFlexionTitle: {
    fontSize: 72,
    fontWeight: 'bold',
    textAlign: 'left',
    width: '100%',
    lineHeight: 70,
    color: COLORS.WHITE,
  },

  line1: {
    marginRight: 64,
    marginBottom: 12,
  },
  line3: {
    marginBottom: 12,
  },
  line4: {
    marginRight: 64,
  },

  buttonTitle: {
    fontSize: 26,
    fontWeight: 'bold',
  },
});
