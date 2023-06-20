import { Period } from '@type/period';

import { getChartLabels } from './getChartLabels';

import { SolutionGroup } from '@store/types';
import { CHART_DATA_KEY_COUNT, CHART_DATA_KEY_SCORE } from '@constants/chart-data-keys';

export const getSolutionsPoints = (solution: SolutionGroup[], period: Period, isCountCalc?: boolean) => {
  const dataKey = isCountCalc ? CHART_DATA_KEY_COUNT : CHART_DATA_KEY_SCORE;

  const data = solution.map(({ dayStart, problemsSolved }) => {
    const value = problemsSolved.reduce((sum, { score }) => {
      if (isCountCalc) {
        return sum + 1
      };

      return sum + score
    }, 0);
    const label = getChartLabels(dayStart, period);

    return {
      label,
      [dataKey]: value,
    };
  });

  return data;
};
