import { Link } from 'react-router-dom';
import { Routes } from '@global/routes/routes';
import useFetchCategories from '@queries/categories/useFetchCategories';

const HomePage = () => {
  const { isLoading, data, error } = useFetchCategories();
  console.log('isLoading', isLoading);
  console.log('data', data);
  console.log('error from hook', error);

  return (
    <div>
      <p>
        <Link to={Routes.CONFIG()}>Go to config page</Link>
      </p>
      <p>{JSON.stringify(data)}</p>
      <p>This is the home page!</p>
      <p>This is the home page!</p>
      <p>This is the home page!</p>
      <p>This is the home page!</p>
      <p>This is the home page!</p>
      <p>This is the home page!</p>
      <p>This is the home page!</p>
      <p>This is the home page!</p>
      <p>This is the home page!</p>
      <p>This is the home page!</p>
      <p>This is the home page!</p>
      <p>This is the home page!</p>
      <p>This is the home page!</p>
      <p>This is the home page!</p>
      <p>This is the home page!</p>
      <p>This is the home page!</p>
      <p>This is the home page!</p>
      <p>This is the home page!</p>
      <p>This is the home page!</p>
      <p>This is the home page!</p>
      <p>This is the home page!</p>
      <p>This is the home page!</p>
      <p>This is the home page!</p>
      <p>This is the home page!</p>
      <p>This is the home page!</p>
      <p>This is the home page!</p>
      <p>This is the home page!</p>
      <p>This is the home page!</p>
      <p>This is the home page!</p>
      <p>This is the home page!</p>
      <p>This is the home page!</p>
      <p>This is the home page!</p>
      <p>This is the home page!</p>
      <p>This is the home page!</p>
      <p>This is the home page!</p>
      <p>This is the home page!</p>
      <p>This is the home page!</p>
      <p>This is the home page!</p>
      <p>This is the home page!</p>
      <p>This is the home page!</p>
      <p>This is the home page!</p>
      <p>This is the home page!</p>
      <p>This is the home page!</p>
      <p>This is the home page!</p>
      <p>This is the home page!</p>
      <p>This is the home page!</p>
      <p>This is the home page!</p>
      <p>This is the home page!</p>
      <p>This is the home page!</p>
      <p>This is the home page!</p>
      <p>This is the home page!</p>
      <p>This is the home page!</p>
      <p>This is the home page!</p>
      <p>This is the home page!</p>
    </div>
  );
};

export default HomePage;
