import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '@components/App';
import { Routes } from './routes';

const router = createBrowserRouter([
  {
    path: Routes.HOME(),
    element: <App />,
  },
  {
    path: Routes.CONFIG(),
    element: <div>config route</div>,
  },
  {
    path: '*',
    element: <div>404!</div>,
  },
]);

export default router;
