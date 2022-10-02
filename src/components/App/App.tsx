import { RouterProvider } from 'react-router-dom';
import cn from 'classnames';
import router from '@global/routes';
import useAppThemeStyles from '@hooks/useAppThemeStyles';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Header from '@components/Header';
import { AppNotification } from '@components/Notification';
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app
import 'react-toastify/dist/ReactToastify.css';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

const App = () => {
  const appThemeStyles = useAppThemeStyles();
  return (
    <QueryClientProvider client={queryClient}>
      <AppNotification />
      <div className={cn(appThemeStyles, 'fullHeight')}>
        <Header />
        <RouterProvider router={router} />
      </div>
      <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
  );
};

export default App;
