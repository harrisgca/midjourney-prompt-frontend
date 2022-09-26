import { RouterProvider } from 'react-router-dom';
import router from '@global/routes';
import Header from '@components/Header';
import useAppThemeStyles from '@hooks/useAppThemeStyles';

const App = () => {
  const appThemeStyles = useAppThemeStyles();
  return (
    <div className={appThemeStyles}>
      <Header />
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
