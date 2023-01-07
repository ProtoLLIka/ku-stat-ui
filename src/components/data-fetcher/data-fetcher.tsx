import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from 'store/index';
import { getStudentStatAction } from 'store/statistic/actions';

export const DataFetcher: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    //TODO: any
    dispatch(getStudentStatAction(15) as any);
  }, []);

  return <div>DataFetcher</div>;
};
