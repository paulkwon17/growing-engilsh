import { CommonId } from './xhr';

export interface TodoItemInfo {
  name: string;
  deadline: string;
}

export type GetTodoItemInfoResponse = TodoItemInfo & CommonId;

export interface PostTodoItemInfoRequest {
  name: string;
  deadline: string;
}

export interface PutTodoItemInfoRequest {
  todoItemId: string;
  data: {
    name: string;
    deadline: string;
  };
}
