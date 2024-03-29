import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { getQueryParams } from '@helpers/getQueryParams';

import { getStudentStatAction } from '@store/actions';
import { selectPeriod } from '@store/selectors';
import { selectDateRange } from '@store/selectors';
import { AppDispatch } from '@store/types';

const DataFetcher: React.FC<any> = ({ children }) => {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  const { id } = getQueryParams();
  const period = useSelector(selectPeriod);
  const { dateStart, dateEnd } = useSelector(selectDateRange);

  useEffect(() => {
    if (!id) {
      navigate('/not-found');
    }

    dispatch(getStudentStatAction({ id, group: period, dateStart, dateEnd }));
  }, [id, period, dateStart, dateEnd]);

  return children as React.ReactElement;
};

export default DataFetcher;
