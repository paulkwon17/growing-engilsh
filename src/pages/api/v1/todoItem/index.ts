import { Document } from 'mongoose';
import type { NextApiResponse } from 'next';

import { ApiRequest, TodoItemInfo } from '@type/api';
import dbConnect from 'lib/db/dbConnect';
import { TodoItemModel } from 'lib/models';

const handler = async (req: ApiRequest<TodoItemInfo>, res: NextApiResponse) => {
  await dbConnect();

  if (req.method === 'GET') {
    const data = await TodoItemModel.find({});
    res.status(200).json(data);
    return;
  }
  if (req.method === 'POST') {
    const todoItem = new TodoItemModel(req.body) as Document;
    await todoItem.save();

    res.status(200).json(todoItem.toJSON());
    return;
  }
  throw new Error(`Unsupported HTTP method: ${req.method}`);
};

export default handler;
