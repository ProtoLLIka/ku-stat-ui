import { ChartType } from '@type/chart-type';
import { Radio, RadioChangeEvent } from 'antd';

import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setChartType } from '@store/actions';
import { selectChartType } from '@store/selectors';
import { AppDispatch } from '@store/types';

const options = [
  { label: 'Кол-во', value: ChartType.count },
  { label: 'Баллы', value: ChartType.score },
];

const ChartTypeSwitcher = () => {
  const dispatch: AppDispatch = useDispatch();
  const chartType = useSelector(selectChartType);

  const onChange = useCallback((e: RadioChangeEvent) => dispatch(setChartType(e.target.value)), []);

  return (
    <Radio.Group
      options={options}
      onChange={onChange}
      value={chartType}
      optionType="button"
      buttonStyle="solid"
    />
  );
};

export default ChartTypeSwitcher;
