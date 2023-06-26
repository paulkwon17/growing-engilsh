import handleError from '@api/xhr/handleError';
import { useMutation } from '@tanstack/react-query';
import { PutTodoListInfoRequest } from '@type/api';

import { putTodoListCheckById } from './todoListAxios';

const usePutTodoCheckById = () => {
  return useMutation(
    ({ _id, check }: PutTodoListInfoRequest) => putTodoListCheckById({ _id, check }),
    {
      onError: (err) => {
        handleError(err);
      },
    },
  );
};

export default usePutTodoCheckById;
