import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@store/types';

import { getStudentStatAction } from '@store/actions';

export const DataFetcher: React.FC<any> = ({children}) => {
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(getStudentStatAction(1182));
  }, []);

  return <div>DataFetcher{children}</div>;
};
