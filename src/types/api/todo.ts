export interface TodoItemInfo {
  _id: string;
  name: string;
  deadline: string;
}

export type GetTodoItemInfoResponse = TodoItemInfo;

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

export interface TodoListInfo {
  _id: string;
  todoItemId: string;
  check: boolean;
  sid: string;
}

export type GetTodoListInfoResponse = TodoListInfo;
