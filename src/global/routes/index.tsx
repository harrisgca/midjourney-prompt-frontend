import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import HomePage from '@features/HomePage';
import ConfigPage from '@features/ConfigPage';
import { Routes } from './routes';

const router = createBrowserRouter([
  {
    path: Routes.HOME(),
    element: <HomePage />,
  },
  {
    path: Routes.CONFIG(),
    element: <ConfigPage />,
  },
  {
    path: '*',
    element: <div>404!</div>,
  },
]);

export default router;
