import { store } from '.';

export type InitialStatState = {
  solutions: SolutionGroup[];
};

export type SolutionGroup = {
  dayStart: number;
  problemsSolved: Solution[];
};

type Solution = {
  id: number;
  collectionName: string;
  taskName: string;
  score: number;
  dateSolved: number;
  tryCnt: number;
};

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
