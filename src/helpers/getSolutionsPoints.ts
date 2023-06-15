import { Period } from '@type/period';

import { getChartLabels } from './getChartLabels';

import { SolutionGroup } from '@store/types';

export const getSolutionsPoints = (solution: SolutionGroup[], period: Period) => {
  const data = solution.map(({ dayStart, problemsSolved }) => {
    const points = problemsSolved.reduce((sum, { score }) => sum + score, 0);
    const label = getChartLabels(dayStart, period);

    return {
      label,
      points,
    };
  });

  return data;
};
