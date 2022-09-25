import React from 'react';
import { RouterProvider } from 'react-router-dom';
import router from '@global/routes';
import Header from '@components/Header';
import styles from './app.module.scss';

const App = () => {
  return (
    <div className={styles.App}>
      <Header />
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
