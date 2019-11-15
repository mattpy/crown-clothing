import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { persistStore } from 'redux-persist';

import persistReducer from './root-reducer';

// const middlewares = [logger];

export const store = createStore(persistReducer, applyMiddleware(logger));

export const persistor = persistStore(store);

export default { store, persistor };
