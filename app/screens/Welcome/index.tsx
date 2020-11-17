import React, { FunctionComponent } from 'react';
import { SafeAreaView } from 'react-native';
import { Text } from '../../components';
import { WelcomeScreenProps } from './initial.props';
import { styles } from './initial.styles';

export const WelcomeScreen: FunctionComponent<WelcomeScreenProps> = (
  {
    // navigation
  },
) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text preset="title">WelcomeScreen will be here...</Text>
    </SafeAreaView>
  );
};
