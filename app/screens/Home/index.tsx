import React, { FunctionComponent } from 'react';
import { SafeAreaView, View } from 'react-native';

import { Text } from '../../components';
import { HomeScreenProps } from './home.props';
import { styles } from './home.styles';

export const HomeScreen: FunctionComponent<HomeScreenProps> = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.body}>
        <Text preset="title">IvorySoft</Text>
        <Text preset="default">ReactNative Boilerplate</Text>
      </View>
    </SafeAreaView>
  );
};
