import { getModelForClass } from '@typegoose/typegoose';

import TodoItem from './todo/todoItem';
import TodoList from './todo/todoList';

export const TodoItemModel = getModelForClass(TodoItem);
export const TodoListModel = getModelForClass(TodoList);
