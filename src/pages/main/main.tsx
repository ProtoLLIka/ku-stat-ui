import { Space } from 'antd';

import React from 'react';

import DataFetcher from '@components/data-fetcher';
import DateRangeSelector from '@components/date-range-selector';
import PeriodSwitcher from '@components/period-switcher';
import SolutionChart from '@components/solution-chart';
import SolutionTable from '@components/solution-table/solution-table';

const Main = () => {
  return (
    <DataFetcher>
      <Space align="center" direction="vertical" style={{ width: '100%' }}>
        <Space direction="vertical" style={{ width: 1000 }} align="center">
          <Space>
            <PeriodSwitcher />
            <DateRangeSelector />
          </Space>
          <SolutionChart />
          <SolutionTable />
        </Space>
      </Space>
    </DataFetcher>
  );
};

export default Main;
