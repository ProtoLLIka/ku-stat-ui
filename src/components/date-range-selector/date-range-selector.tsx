import { DatePicker, Space } from 'antd';
import { Dayjs } from 'dayjs';

import React from 'react';
import { useDispatch } from 'react-redux';

import { setDateRange } from '@store/actions';
import { AppDispatch } from '@store/types';

const { RangePicker } = DatePicker;

const DateRangeSelector = () => {
  const dispatch: AppDispatch = useDispatch();

  const rangePicker = (dates: Dayjs[]) => {
    if (!dates) {
      dispatch(setDateRange({ dateStart: null, dateEnd: null }));
    } else {
      dispatch(setDateRange({ dateStart: dates[0].unix(), dateEnd: dates[1].unix() }));
    }
  };

  return (
    <div>
      <RangePicker format={'DD.MM.YYYY'} onChange={rangePicker as any} />
    </div>
  );
};

export default DateRangeSelector;
