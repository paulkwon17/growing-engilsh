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
    memberId: 'sampleMemberId',
  },
];

export const TODO_LIST: Todo[] = [
  {
    _id: '0',
    todoItemId: '0',
    check: false,
    memberId: 'sampleMemberId',
    name: 'sampleName',
    deadline: '2023-04-09',
  },
];
