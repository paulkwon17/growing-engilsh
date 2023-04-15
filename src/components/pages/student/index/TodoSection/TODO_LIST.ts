import { Todo, TodoList, TodoItem } from '@type/app/todo';

export const TODO_ITEM: TodoItem[] = [
  {
    todoItemId: '0',
    name: 'sampleName',
    deadline: '2023-04-09',
  },
];

export const TODO_CHECK: TodoList[] = [
  {
    todoListId: '0',
    todoItemId: '0',
    check: false,
    sid: 'sampleSid',
  },
];

export const TODO_LIST: Todo[] = [
  {
    todoListId: '0',
    todoItemId: '0',
    check: false,
    sid: 'sampleSid',
    name: 'sampleName',
    deadline: '2023-04-09',
  },
];
