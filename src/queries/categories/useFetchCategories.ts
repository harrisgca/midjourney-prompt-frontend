import { useQuery } from '@tanstack/react-query';
import { CATEGORIES_QUERY_GET_ALL } from '@queries/constants';
import { getRequest } from '@global/apis/request';
import { categoryUrls } from '@global/apis/urls';

const useFetchCategories = () => {
  return useQuery(
    [CATEGORIES_QUERY_GET_ALL],
    () => getRequest(categoryUrls.getAll()),

    { refetchOnWindowFocus: false },
  );
};

export default useFetchCategories;
