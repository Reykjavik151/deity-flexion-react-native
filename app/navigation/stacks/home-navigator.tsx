import React from 'react';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import { HomeScreen } from '../../screens';

export type HomeStackParams = {
  Home: undefined;
};

const HomeStack = createNativeStackNavigator<HomeStackParams>();

export const HomeStackNavigator = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen name="Home" component={HomeScreen} />
  </HomeStack.Navigator>
);
