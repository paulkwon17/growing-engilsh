import axios, { AxiosResponse } from 'axios';
import { GetTodoItemInfoResponse, PostTodoItemInfoRequest } from '@type/api/todo';

export const getTodoItemInfo = async () => {
  const { data }: AxiosResponse<GetTodoItemInfoResponse> = await axios.get('/api/todo/todoItem');

  return data;
};

export const postTodoItemInfo = async (data: PostTodoItemInfoRequest) => {
  const res: AxiosResponse = await axios.post('/api/todo/todoItem', data);

  return res;
};
