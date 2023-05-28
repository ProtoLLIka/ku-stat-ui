import { configureStore } from '@reduxjs/toolkit';

import { useDispatch } from 'react-redux';

import { AppDispatch,  InitialStatState } from '@store/types';

import { reducer } from './reducer';

export const store = configureStore<InitialStatState, any>({
  reducer,
});

export const useAppDispatch: () => AppDispatch = useDispatch;
export { AppDispatch } from './types';
