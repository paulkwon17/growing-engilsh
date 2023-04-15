export interface TodoItem {
  todoItemId: string;
  name: string;
  deadline: string;
}

export interface TodoList {
  todoListId: string;
  todoItemId: string;
  check: boolean;
  sid: string;
}

export interface Todo {
  todoListId: string;
  todoItemId: string;
  name: string;
  deadline: string;
  check: boolean;
  sid: string;
}
