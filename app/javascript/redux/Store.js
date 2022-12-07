import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import messageReducer from './messageSlice';

const rootReducer = combineReducers({
  messages: messageReducer
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk, logger],
});

export default store;