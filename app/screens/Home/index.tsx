import React, { FunctionComponent } from 'react';
import { SafeAreaView, View } from 'react-native';

import { useUserAccount } from '../../redux/user';
import { Text } from '../../components';
import { HomeScreenProps } from './home.props';
import { styles } from './home.styles';

export const HomeScreen: FunctionComponent<HomeScreenProps> = () => {
  const user = useUserAccount();

  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.body}>
        <Text preset="title">IvorySoft</Text>
        <Text preset="default">ReactNative Boilerplate</Text>
        <Text preset="secondary" style={styles.description}>
          Test useUserAccount: {user ? 'exist' : 'null'}
        </Text>
      </View>
    </SafeAreaView>
  );
};
