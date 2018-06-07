//@flow
import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import saga from './saga';
import user from './reducers/user';
import data from './reducers/data';
import app from './reducers/app';

const rootReducer = combineReducers({
  user,
  data,
  app
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware, logger));

sagaMiddleware.run(saga);

export default store;