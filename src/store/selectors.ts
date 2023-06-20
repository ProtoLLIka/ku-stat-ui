import { InitialStatState } from './types';

export const selectPeriod = (state: InitialStatState) => state.period;

export const selectChartType = (state: InitialStatState) => state.chartType;

export const selectSolutions = (state: InitialStatState) => state.solutions;

export const selectDateRange = (state: InitialStatState) => ({
  dateStart: state.dateStart,
  dateEnd: state.dateEnd,
});
