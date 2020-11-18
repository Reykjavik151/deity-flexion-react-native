import React from 'react';
import { View } from 'react-native';

import { LoginScreenProps } from './login.props';
import { styles } from './login.styles';

export const LoginScreen: React.FunctionComponent<LoginScreenProps> = ({}) => {
  return <View style={styles.container} />;
};
