import { ConfigProvider } from 'antd';
import ruLocale from 'antd/locale/ru_RU';

import React from 'react';
import { Provider } from 'react-redux';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Main from '@pages/main/main';
import NotFound from '@pages/not-found/not-found';

import { store } from '@store/index';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
  },
  {
    path: '/*',
    element: <NotFound />,
  },
]);

export const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ConfigProvider locale={ruLocale}>
        <RouterProvider router={router} />
      </ConfigProvider>
    </Provider>
  );
};
