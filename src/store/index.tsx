import { configureStore } from '@reduxjs/toolkit';
import statReducer from './statistic';

const store = configureStore({
  reducer: statReducer,
});

export type AppDispatch = typeof store.dispatch;

export default store;
