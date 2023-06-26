import handleError from '@api/xhr/handleError';
import { useMutation } from '@tanstack/react-query';
import { PostTodoItemInfoRequest } from '@type/api';

import { postTodoItemInfo } from './todoItemAxios';

const usePostTodoItemInfo = () => {
  return useMutation((data: PostTodoItemInfoRequest) => postTodoItemInfo(data), {
    onError: (err) => {
      handleError(err);
    },
  });
};

export default usePostTodoItemInfo;
