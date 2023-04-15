import { useMutation } from '@tanstack/react-query';
import { PostTodoItemInfoRequest } from '@type/api/todo';
import { postTodoItemInfo } from './todoAxios';

const usePostTodoItemInfo = () => {
  return useMutation((data: PostTodoItemInfoRequest) => postTodoItemInfo(data), {
    onError: (err) => {
      console.error(err);
    },
  });
};

export default usePostTodoItemInfo;
