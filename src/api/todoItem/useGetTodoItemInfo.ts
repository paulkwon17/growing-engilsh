import handleError from '@api/xhr/handleError';
import { QUERY_KEY } from '@constants/api';
import { useQuery } from '@tanstack/react-query';

import { getTodoItemInfo } from './todoItemAxios';

const useGetTodoItemInfo = () => {
  return useQuery([QUERY_KEY.GET_TODO_ITEMS], getTodoItemInfo, {
    onError: (err) => {
      handleError(err);
    },
  });
};

export default useGetTodoItemInfo;
