import { useMutation } from '@tanstack/react-query';
import { PostTodoListInfoRequest } from '@type/api/todoList';
import { postTodoListInfo } from './todoListAxios';

const usePostTodoListInfo = () => {
  return useMutation((data: PostTodoListInfoRequest) => postTodoListInfo(data), {
    onError: (err) => {
      console.error(err);
    },
  });
};

export default usePostTodoListInfo;
