import 'react-native-gesture-handler';
import React, { FunctionComponent } from 'react';
import { enableScreens } from 'react-native-screens';
import { Provider } from 'react-redux';
import RootNavigator from './app/navigation/root-navigator';
import { store } from './app/redux';

enableScreens();

const App: FunctionComponent = () => (
  <Provider store={store}>
    <RootNavigator />
  </Provider>
);

export default App;
