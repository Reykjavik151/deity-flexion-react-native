import { StyleSheet, ViewStyle } from 'react-native';
import { COLORS } from '../../utils/colors';

interface LoadingOverlayStyles {
  container: ViewStyle;
  loader: ViewStyle;
}

export default StyleSheet.create<LoadingOverlayStyles>({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: COLORS.TRANSPARENT_BLACK,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
  },
  loader: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: COLORS.WHITE,
  },
});
