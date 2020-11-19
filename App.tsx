import 'react-native-gesture-handler';
import React, { FunctionComponent } from 'react';
import { enableScreens } from 'react-native-screens';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import './app/utils/icons';

import { LoadingOverlay } from './app/components';
import { store, persistedStore } from './app/redux';
import RootNavigator from './app/navigation/root-navigator';

enableScreens();

const App: FunctionComponent = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistedStore}>
      <LoadingOverlay />
      <RootNavigator />
    </PersistGate>
  </Provider>
);

export default App;
