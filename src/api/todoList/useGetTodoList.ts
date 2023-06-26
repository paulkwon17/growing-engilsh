import handleError from '@api/xhr/handleError';
import { QUERY_KEY } from '@constants/api';
import { useQuery } from '@tanstack/react-query';

import { getTodoListInfo } from './todoListAxios';

const useGetTodoListInfo = () => {
  return useQuery([QUERY_KEY.GET_TODO_LIST], getTodoListInfo, {
    onError: (err) => {
      handleError(err);
    },
  });
};

export default useGetTodoListInfo;
