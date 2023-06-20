import { createAction, createAsyncThunk } from '@reduxjs/toolkit';

import { InitialStatState } from './types';

import getStudentStat from '@api/get-student-stat/request';

export const getStudentStatAction = createAsyncThunk('getStudentStat', getStudentStat);

export const setPeriod = createAction('setPeriod');

export const setChartType = createAction('setChartType');

export const setDateRange =
  createAction<Pick<InitialStatState, 'dateEnd' | 'dateStart'>>('setDateRange');
