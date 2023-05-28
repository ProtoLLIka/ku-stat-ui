import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { store } from '@store/index';
import { DataFetcher } from '@components/data-fetcher';

export const App: React.FC = () => {
  return (
    <Provider store={store}>
      <DataFetcher/>
    </Provider>
  );
};
