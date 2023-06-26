import { prop } from '@typegoose/typegoose';
import { nanoid } from 'nanoid';

export default class TodoItem {
  @prop({ default: () => nanoid(9) })
  _id: string;

  @prop({ required: true })
  name: string;

  @prop({ required: true })
  deadline: string;
}
