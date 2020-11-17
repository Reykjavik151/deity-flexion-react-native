import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';

import { HomeStackNavigator, LoginStackNavigator } from './stacks';
import { navigationRef } from '../services/navigator';
import { WITHOUT_HEADER_OPTIONS } from './options';

export type RootStackParams = {
  LoginStack: undefined;
  HomeStack: undefined;
};

const Stack = createNativeStackNavigator<RootStackParams>();

const RootNavigator = () => (
  <NavigationContainer ref={navigationRef}>
    <Stack.Navigator screenOptions={WITHOUT_HEADER_OPTIONS}>
      <Stack.Screen name="LoginStack" component={LoginStackNavigator} />
      <Stack.Screen name="HomeStack" component={HomeStackNavigator} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default RootNavigator;
