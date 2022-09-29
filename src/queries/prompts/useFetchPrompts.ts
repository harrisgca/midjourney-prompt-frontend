import { useQuery } from '@tanstack/react-query';
import { PROMPTS_QUERY_GET_ALL } from '@queries/constants';
import { getRequest } from '@global/apis/request';
import { promptUrls } from '@global/apis/urls';

const useFetchPrompts = () => {
  return useQuery(
    [PROMPTS_QUERY_GET_ALL],
    () => getRequest(promptUrls.getAll()),

    { refetchOnWindowFocus: false },
  );
};

export default useFetchPrompts;
