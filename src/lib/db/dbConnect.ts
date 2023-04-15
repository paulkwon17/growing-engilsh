import { TodoItemSchema } from 'lib/models/todo/todoItem.model';
import { TodoListSchema } from 'lib/models/todo/todoList.model';
import mongoose from 'mongoose';
import { NextApiRequest, NextApiResponse } from 'next';

const { NEXT_PUBLIC_MONGODB_URI } = process.env;

const dbConnect = async (_req: NextApiRequest, _res: NextApiResponse, next: Function) => {
  if (!global.mongoose) {
    global.mongoose = await mongoose.connect(NEXT_PUBLIC_MONGODB_URI ?? '');
    mongoose.model('TodoItem', TodoItemSchema);
    mongoose.model('TodoList', TodoListSchema);
  }
  return next();
};

export default dbConnect;
