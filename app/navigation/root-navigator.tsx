import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import { InitialScreen, HomeScreen } from '../screens';
import { navigationRef } from '../services/navigator';

type RootParams = {
  Initial: undefined;
  Home: undefined;
};

const Stack = createNativeStackNavigator<RootParams>();

const RootNavigator = () => (
  <NavigationContainer ref={navigationRef}>
    <Stack.Navigator>
      <Stack.Screen name="Initial" component={InitialScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default RootNavigator;
