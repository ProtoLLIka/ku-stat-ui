import { createReducer, PayloadAction } from '@reduxjs/toolkit';

import { InitialStatState } from './types';
import { getStudentStatAction } from './actions';

const initialState: InitialStatState = {
  solutions: [],
};

const reducer = createReducer(initialState, {
  [getStudentStatAction.fulfilled.type]: (state, { payload }) => {
    state.solutions = payload;
    console.log(payload);
  },
});

export default reducer;
