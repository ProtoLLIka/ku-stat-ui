import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

import React from 'react';
import { useSelector } from 'react-redux';

import NoData from '@components/no-data/no-data';

import { getSolutionsPoints } from '@helpers/getSolutionsPoints';

import { selectPeriod, selectSolutions } from '@store/selectors';

const SolutionChart: React.FC = () => {
  const solutions = useSelector(selectSolutions);
  const period = useSelector(selectPeriod);
  if (!solutions.length) {
    return <NoData />;
  }
  const data = getSolutionsPoints(solutions, period);
  console.log(data);

  return (
    <ResponsiveContainer width={1000} height={400}>
      <AreaChart
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
        <Area type="monotone" dataKey="points" stroke="#8884d8" fill="#1677ff" />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default SolutionChart;
