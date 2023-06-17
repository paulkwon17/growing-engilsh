import { useMutation } from '@tanstack/react-query';
import { PutTodoListInfoRequest } from '@type/api';

import { putTodoListCheckById } from './todoListAxios';

const usePutTodoCheckById = () => {
  return useMutation(
    ({ _id, check }: PutTodoListInfoRequest) => putTodoListCheckById({ _id, check }),
    {
      onError: (err) => {
        console.error(err);
      },
    },
  );
};

export default usePutTodoCheckById;
