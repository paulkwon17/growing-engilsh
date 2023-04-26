import { QUERY_KEY } from '@constants/api/keys';
import { useQuery } from '@tanstack/react-query';
import { getTodoItemInfo } from './todoItemAxios';

const useGetTodoItemInfo = () => {
  return useQuery([QUERY_KEY.GET_TODO_ITEMS], getTodoItemInfo, {
    onError: (err) => {
      console.error(err);
    },
  });
};

export default useGetTodoItemInfo;
