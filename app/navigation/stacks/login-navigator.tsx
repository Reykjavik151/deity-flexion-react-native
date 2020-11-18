import React from 'react';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';

import { LoginScreen, RegisterScreen, WelcomeScreen } from '../../screens';
import { WITHOUT_HEADER_OPTIONS } from '../options';

export type LoginStackParams = {
  Welcome: undefined;
  Register: undefined;
  Login: undefined;
};

const LoginStack = createNativeStackNavigator<LoginStackParams>();

export const LoginStackNavigator = () => (
  <LoginStack.Navigator screenOptions={WITHOUT_HEADER_OPTIONS}>
    <LoginStack.Screen name="Welcome" component={WelcomeScreen} />
    <LoginStack.Screen name="Register" component={RegisterScreen} />
    <LoginStack.Screen name="Login" component={LoginScreen} />
  </LoginStack.Navigator>
);
