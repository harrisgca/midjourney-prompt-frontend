import { RouterProvider } from 'react-router-dom';
import cn from 'classnames';
import router from '@global/routes';
import Header from '@components/Header';
import useAppThemeStyles from '@hooks/useAppThemeStyles';
import styles from './app.module.scss';

const App = () => {
  const appStyles = cn(styles.App, useAppThemeStyles());
  return (
    <div className={appStyles} id="app_id">
      <Header />
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
