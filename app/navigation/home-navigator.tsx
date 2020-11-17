import React from 'react';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import { InitialScreen } from '../screens';

type HomeParams = {
  Initial: undefined;
  Home: undefined;
};

const Stack = createNativeStackNavigator<HomeParams>();

const RootNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={InitialScreen} />
  </Stack.Navigator>
);

export default RootNavigator;
