import React from 'react';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import { WelcomeScreen } from '../screens';

type HomeParams = {
  Initial: undefined;
  Home: undefined;
};

const Stack = createNativeStackNavigator<HomeParams>();

const RootNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={WelcomeScreen} />
  </Stack.Navigator>
);

export default RootNavigator;
