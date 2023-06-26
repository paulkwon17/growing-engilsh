import handleError from '@api/xhr/handleError';
import { useMutation } from '@tanstack/react-query';
import { PostTodoListInfoRequest } from '@type/api';

import { postTodoListInfo } from './todoListAxios';

const usePostTodoListInfo = () => {
  return useMutation((data: PostTodoListInfoRequest) => postTodoListInfo(data), {
    onError: (err) => {
      handleError(err);
    },
  });
};

export default usePostTodoListInfo;
