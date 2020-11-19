import React, { FunctionComponent } from 'react';
import { SafeAreaView, View } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import { Text } from '../../components';
import { COLORS } from '../../utils/colors';
import { HomeScreenProps } from './home.props';
import { styles } from './home.styles';

export const HomeScreen: FunctionComponent<HomeScreenProps> = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.body}>
        <Text preset="title">IvorySoft</Text>
        <Text preset="default">ReactNative Boilerplate</Text>
        <MaterialIcon name="check" size={32} color={COLORS.WHITE} />
      </View>
    </SafeAreaView>
  );
};
