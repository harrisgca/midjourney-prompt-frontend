import { RouterProvider } from 'react-router-dom';
import router from '@global/routes';
import Header from '@components/Header';
import useAppThemeStyles from '@hooks/useAppThemeStyles';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient();

const App = () => {
  const appThemeStyles = useAppThemeStyles();
  return (
    <QueryClientProvider client={queryClient}>
      <div className={appThemeStyles}>
        <Header />
        <RouterProvider router={router} />
      </div>
      <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
  );
};

export default App;
