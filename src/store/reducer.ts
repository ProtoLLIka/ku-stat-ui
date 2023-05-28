import { createReducer } from '@reduxjs/toolkit';

import { getStudentStatAction } from '@store/actions';

import { InitialStatState } from './types';

const initialState: InitialStatState = {
  solutions: []
};

export const reducer = createReducer(initialState, {
  [getStudentStatAction.fulfilled.type]: (state, payload) => {
    return state
  },
});
