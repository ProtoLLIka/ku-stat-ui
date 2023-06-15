import React from 'react';

import DataFetcher from '@components/data-fetcher/data-fetcher';
import DateRangeSelector from '@components/date-range-selector/date-range-selector';
import PeriodSwitcher from '@components/period-switcher';
import SolutionChart from '@components/solution-chart';

const Main = () => {
  return (
    <DataFetcher>
      <PeriodSwitcher />
      <DateRangeSelector />
      <SolutionChart />
    </DataFetcher>
  );
};

export default Main;
