import { ViewStyle } from 'react-native';

export interface LineProps {
  height?: number;
  isCompleted?: boolean;
  children?: React.ReactElement | React.ReactElement[];
  style?: {
    container?: ViewStyle;
    lineContainer?: ViewStyle | ViewStyle[];
  };
}
