import { Period } from '@type/period';

import { store } from '.';
import { ChartType } from '@type/chart-type';

export type InitialStatState = {
  solutions: SolutionGroup[];
  period: Period;
  chartType: ChartType;
  dateStart: number | null;
  dateEnd: number | null;
};

export type SolutionGroup = {
  dayStart: number;
  problemsSolved: Solution[];
};

export type Solution = {
  id: number;
  collectionName: string;
  taskName: string;
  score: number;
  dateSolved: number;
  tryCnt: number;
};

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
