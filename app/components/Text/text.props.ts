import { TextProps as RNTextProps } from 'react-native';
import { TextPreset } from './text.presets';

export interface TextProps extends RNTextProps {
  preset?: TextPreset;
}
