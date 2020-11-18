import { StyleSheet, ViewStyle } from 'react-native';

interface CommonStyles {
  flexContainer: ViewStyle;
  centeredContainer: ViewStyle;
  rowContainer: ViewStyle;
  mb18: ViewStyle;
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
  mb18: {
    marginBottom: 18,
  },
});
