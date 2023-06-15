import { Period } from '@type/period';
import { Radio, RadioChangeEvent } from 'antd';

import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setPeriod } from '@store/actions';
import { selectPeriod } from '@store/selectors';
import { AppDispatch } from '@store/types';

const options = [
  { label: 'по дням', value: Period.day },
  { label: 'по неделям', value: Period.week },
  { label: 'по месяцам', value: Period.month },
];

const PeriodSwitcher = () => {
  const dispatch: AppDispatch = useDispatch();
  const period = useSelector(selectPeriod);

  const onChange = useCallback((e: RadioChangeEvent) => dispatch(setPeriod(e.target.value)), []);

  return (
    <Radio.Group
      options={options}
      onChange={onChange}
      value={period}
      optionType="button"
      buttonStyle="solid"
    />
  );
};

export default PeriodSwitcher;
