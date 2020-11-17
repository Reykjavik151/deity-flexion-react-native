import React, { FunctionComponent, useEffect } from 'react';
import { SafeAreaView } from 'react-native';
import { Text } from '../../components';
import { InitialScreenProps } from './initial.props';
import { styles } from './initial.styles';

export const InitialScreen: FunctionComponent<InitialScreenProps> = ({ navigation }) => {
  useEffect(() => {
    // TODO: Timeout for loading simulation. Replace it with data fetching
    setTimeout(() => navigation.replace('Home'), 500);
  }, [navigation]);

  return (
    <SafeAreaView style={styles.root}>
      <Text preset="title">Preloader...</Text>
    </SafeAreaView>
  );
};
