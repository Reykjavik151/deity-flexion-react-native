import { TextInputProps, TextStyle, ViewStyle } from 'react-native';

export interface DefaultLineInputProps {
  title?: string;
  inputProps: TextInputProps;
  style?: {
    titleContainer?: ViewStyle;
    titleText?: TextStyle;
    inputContainer?: ViewStyle;
    lineContainer?: ViewStyle;
  };
}
