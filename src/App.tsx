import React from 'react';
import { Provider } from 'react-redux';
import store from 'store/index';

import { DataFetcher } from 'components/data-fetcher';

const App = () => {
  return (
    <Provider store={store}>
      <DataFetcher>
        <div>Hi, creator!</div>
      </DataFetcher>
    </Provider>
  );
};
export default App;
