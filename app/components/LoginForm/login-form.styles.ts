import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

interface LoginFormStyles {
  container: ViewStyle;
  submitButtonText: TextStyle;
}

export default StyleSheet.create<LoginFormStyles>({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  submitButtonText: {
    fontSize: 26,
    fontWeight: 'bold',
  },
});
