export interface TodoItem {
  todoItemId: string;
  name: string;
  deadline: string;
}

export interface TodoList {
  todoListId: string;
  todoItemId: string;
  check: boolean;
  memberId: string;
}

export interface Todo {
  _id: string;
  todoItemId: string;
  name: string;
  deadline: string;
  check: boolean;
  memberId: string;
}
