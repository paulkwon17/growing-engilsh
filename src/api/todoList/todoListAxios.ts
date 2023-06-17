import {
  GetTodoListInfoResponse,
  PostTodoListInfoRequest,
  PutTodoListInfoRequest,
} from '@type/api';
import axios, { AxiosResponse } from 'axios';

export const getTodoListInfo = async () => {
  const { data }: AxiosResponse<GetTodoListInfoResponse> = await axios.get('/api/v1/todoList');

  const todoListData = data.map((todoList) => ({
    ...todoList,
    todoItemId: todoList.todoItemId._id,
    name: todoList.todoItemId.name,
    deadline: todoList.todoItemId.deadline,
  }));

  return todoListData;
};

export const postTodoListInfo = async (data: PostTodoListInfoRequest) => {
  const res: AxiosResponse = await axios.post('/api/v1/todoList', data);

  return res;
};

export const putTodoListCheckById = async ({ _id, check }: PutTodoListInfoRequest) => {
  const res: AxiosResponse = await axios.post(`/api/v1/todoList/check/${_id}`, { check });

  return res;
};
