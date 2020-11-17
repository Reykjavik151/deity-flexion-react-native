import { NativeStackNavigationOptions } from 'react-native-screens/native-stack';

export const WITHOUT_HEADER_OPTIONS = {
  headerShown: false,
};

export const TRANSPARENT_MODAL_WITH_FADE_ANIM_OPTIONS: NativeStackNavigationOptions = {
  stackAnimation: 'fade',
  stackPresentation: 'transparentModal',
};
