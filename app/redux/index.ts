import { applyMiddleware, combineReducers, compose, createStore, StoreEnhancer } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer, PersistConfig } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import reactotron from '../services/reactotron';
import rootSaga from '../sagas';

// Reducers
import { userReducer } from './user';
import { tasksReducer } from './tasks';
import { notesReducer } from './notes';

export const rootReducer = combineReducers({
  user: userReducer,
  tasks: tasksReducer,
  notes: notesReducer,
});

const persistConfig: PersistConfig<ReturnType<typeof rootReducer>> = {
  key: 'root',
  storage: AsyncStorage,
  // TODO: remove it for production
  blacklist: ['tasks', 'notes'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export type RootState = ReturnType<typeof rootReducer>;

const sagaMonitor = reactotron?.createSagaMonitor!();

const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

const enhancers: StoreEnhancer[] = [applyMiddleware(sagaMiddleware)];

if (reactotron) {
  enhancers.push(reactotron?.createEnhancer!());
}

export const store = createStore(persistedReducer, compose(...enhancers));

sagaMiddleware.run(rootSaga);

export const persistedStore = persistStore(store);

// Uncomment this if you need to purge your cache in AsyncStorage
// persistedStore.purge();

export type AppDispatch = typeof store.dispatch;

export type AppAction = ReturnType<AppDispatch>;
