import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import { WelcomeScreen, HomeScreen } from '../screens';
import { navigationRef } from '../services/navigator';
import { WITHOUT_HEADER_OPTIONS } from './options';

type RootParams = {
  Welcome: undefined;
  Home: undefined;
};

const Stack = createNativeStackNavigator<RootParams>();

const RootNavigator = () => (
  <NavigationContainer ref={navigationRef}>
    <Stack.Navigator screenOptions={WITHOUT_HEADER_OPTIONS}>
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default RootNavigator;
