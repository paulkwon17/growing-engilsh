import { prop } from '@typegoose/typegoose';
import { nanoid } from 'nanoid';

import TodoItem from './todoItem';

export default class TodoList {
  @prop({ default: () => nanoid(9) })
  _id: string;

  @prop({ deafult: false, required: true })
  check: boolean;

  @prop({ required: true })
  memberId: string;

  @prop({ ref: () => TodoItem })
  todoItemId: string;
}
