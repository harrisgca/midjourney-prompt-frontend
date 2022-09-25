import React from 'react';
import { RouterProvider } from 'react-router-dom';
import router from '@global/routes';
import styles from './app.module.scss';

const App = () => {
  return (
    <div className={styles.App}>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
