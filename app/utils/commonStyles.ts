import { StyleSheet, ViewStyle } from 'react-native';

interface CommonStyles {
  flexContainer: ViewStyle;
  centeredContainer: ViewStyle;
  rowContainer: ViewStyle;
  mb18: ViewStyle;
  w100: ViewStyle;
  rotation270: ViewStyle;
  mb12: ViewStyle;
}

export const COMMON_STYLES = StyleSheet.create<CommonStyles>({
  flexContainer: {
    flex: 1,
  },
  centeredContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  rowContainer: {
    flexDirection: 'row',
    width: '100%',
  },
  mb12: {
    marginBottom: 12,
  },
  mb18: {
    marginBottom: 18,
  },
  w100: {
    width: '100%',
  },
  rotation270: {
    transform: [{ rotate: '270deg' }],
  },
});
