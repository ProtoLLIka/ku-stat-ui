import { ChartType } from '@type/chart-type';
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

import React from 'react';
import { useSelector } from 'react-redux';

import NoData from '@components/no-data/no-data';

import { getSolutionsPoints } from '@helpers/getSolutionsPoints';

import { selectChartType, selectPeriod, selectSolutions } from '@store/selectors';

import { CHART_DATA_KEY_COUNT, CHART_DATA_KEY_SCORE } from '@constants/chart-data-keys';

const SolutionChart: React.FC = () => {
  const solutions = useSelector(selectSolutions);
  const period = useSelector(selectPeriod);
  const chartType = useSelector(selectChartType);
  const isCountCalc = chartType === ChartType.count;
  const dataKey = isCountCalc ? CHART_DATA_KEY_COUNT : CHART_DATA_KEY_SCORE;
  if (!solutions.length) {
    return <NoData />;
  }

  const data = getSolutionsPoints(solutions, period, isCountCalc);

  return (
    <ResponsiveContainer width={1000} height={400}>
      <BarChart
        width={500}
        height={400}
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="label" />
        <YAxis />
        <Tooltip />
        <Bar dataKey={dataKey} fill="#1677ff" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default SolutionChart;
