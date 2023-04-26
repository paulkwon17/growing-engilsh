import { TodoItemInfo } from './todoItem';

export interface TodoListInfo {
  _id: string;
  todoItemId: TodoItemInfo;
  check: boolean;
  memberId: string;
}

export type GetTodoListInfoResponse = TodoListInfo[];

export interface PostTodoListInfoRequest {
  todoItemId: string;
  check: boolean;
  memberId: string;
}

export interface PutTodoListInfoRequest {
  _id: string;
  check: boolean;
}
