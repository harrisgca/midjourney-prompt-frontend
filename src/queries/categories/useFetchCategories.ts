import { useQuery } from '@tanstack/react-query';
import { CATEGORIES_QUERY } from '@queries/constants';

const useFetchCategories = () => {
  return useQuery(
    [CATEGORIES_QUERY],
    async () => {
      try {
        const response = await fetch('http://localhost:4000/api/v1/categories');
        const data = await response.json();
        return data;
      } catch (error) {
        console.log('useFetchCategories error', error);
        return error;
      }
    },
    { refetchOnWindowFocus: false },
  );
};

export default useFetchCategories;

export function useCustomHook() {
  return useQuery(['customHook'], () => 'Hello');
}
