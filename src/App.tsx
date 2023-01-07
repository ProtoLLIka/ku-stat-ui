import React, { useEffect } from 'react';
import { Provider, useDispatch } from 'react-redux';
import { getStudentStatAction } from 'store/stat/actions';
import store, { AppDispatch } from 'store/index';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStudentStatAction(15));
  }, []);

  return (
    <Provider store={store}>
      <div>Hi, creator!</div>
    </Provider>
  );
};
export default App;
