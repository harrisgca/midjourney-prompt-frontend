import { useQuery } from '@tanstack/react-query';
import { CATEGORIES_QUERY } from '@queries/constants';
import { getRequest } from '@global/apis/request';

const useFetchCategories = () => {
  return useQuery(
    [CATEGORIES_QUERY],
    () => getRequest('http://localhost:4000/api/v1/categories'),

    { refetchOnWindowFocus: false },
  );
};

export default useFetchCategories;
