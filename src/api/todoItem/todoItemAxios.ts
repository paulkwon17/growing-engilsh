import { GetTodoItemInfoResponse, PostTodoItemInfoRequest } from '@type/api';
import axios, { AxiosResponse } from 'axios';

export const getTodoItemInfo = async () => {
  const { data }: AxiosResponse<GetTodoItemInfoResponse> = await axios.get('/api/v1/todoItem');

  return data;
};

export const postTodoItemInfo = async (data: PostTodoItemInfoRequest) => {
  const res: AxiosResponse = await axios.post('/api/v1/todoItem', data);

  return res;
};
