import React from 'react';
import { useSelector } from 'react-redux';

import { selectPeriod, selectSolutions } from '@store/selectors';
import { getChartLabels } from '@helpers/getChartLabels';

const SolutionChart: React.FC = () => {
  const solutions = useSelector(selectSolutions);
  const period = useSelector(selectPeriod)

  const labels = getChartLabels(solutions, period)
    console.log(labels);
    
  return null
//   return <Line options={options} data={data} />
};

export default SolutionChart;
