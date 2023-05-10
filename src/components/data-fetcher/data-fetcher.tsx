import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from 'store/index';
import { getStudentStatAction } from 'store/statistic/actions';

export const DataFetcher: React.FC = ({children}) => {
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(getStudentStatAction(1182) as any);
  }, []);

  return <div>DataFetcher{children}</div>;
};
