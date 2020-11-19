import React from 'react';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import { HomeScreen } from '../../screens';
import { WITHOUT_HEADER_OPTIONS } from '../options';

export type HomeStackParams = {
  Home: undefined;
};

const HomeStack = createNativeStackNavigator<HomeStackParams>();

export const HomeStackNavigator = () => (
  <HomeStack.Navigator screenOptions={WITHOUT_HEADER_OPTIONS}>
    <HomeStack.Screen name="Home" component={HomeScreen} />
  </HomeStack.Navigator>
);
