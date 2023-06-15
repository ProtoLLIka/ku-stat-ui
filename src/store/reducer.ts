import { createReducer } from '@reduxjs/toolkit';
import { Period } from '@type/period';

import { InitialStatState } from './types';

import { getStudentStatAction, setDateRange, setPeriod } from '@store/actions';

const initialState: InitialStatState = {
  solutions: [],
  period: Period.day,
  dateStart: null,
  dateEnd: null,
};

export const reducer = createReducer(initialState, {
  [getStudentStatAction.fulfilled.type]: (state, { payload }) => {
    state.solutions = payload.data;
  },
  [setPeriod.type]: (state, { payload }) => {
    state.period = payload;
  },
  [setDateRange.type]: (state, { payload: { dateStart, dateEnd } }) => {
    state.dateStart = dateStart;
    state.dateEnd = dateEnd;
  },
});
