import { Solution, SolutionGroup } from '@store/types';

export const getFlatSolutionList = (solutions: SolutionGroup[]) => {
  const allSolutions = solutions.reduce(
    (prev, { problemsSolved }) => [...prev, ...problemsSolved],
    [] as Solution[]
  );

  return allSolutions;
};
