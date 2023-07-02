import { TodoItemInfo } from './todoItem';
import { CommonId } from './xhr';

export interface TodoListInfo {
  todoItemId: TodoItemInfo & CommonId;
  check: boolean;
  memberId: string;
}

export type GetTodoListInfoResponse = (TodoListInfo & CommonId)[];

export interface PostTodoListInfoRequest {
  todoItemId: string;
  check: boolean;
  memberId: string;
}

export interface PutTodoListInfoRequest {
  _id: string;
  check: boolean;
}
