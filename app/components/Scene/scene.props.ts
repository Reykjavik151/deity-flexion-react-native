import { NativeSafeAreaViewProps } from 'react-native-safe-area-context';
import { ScenePreset } from './scene.presets';

export interface SceneProps extends NativeSafeAreaViewProps {
  preset?: ScenePreset;
}
