import { Document } from 'mongoose';
import { NextApiResponse } from 'next';

import { ApiRequest, TodoListInfo } from '@type/api';
import dbConnect from 'lib/db/dbConnect';
import { TodoListModel } from 'lib/models';

const handler = async (req: ApiRequest<TodoListInfo>, res: NextApiResponse) => {
  await dbConnect();

  if (req.method === 'GET') {
    try {
      const data = await TodoListModel.find({}).populate('todoItemId');
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ message: 'Internal server error' });
    }
    return;
  }
  if (req.method === 'POST') {
    const { todoItemId, check, memberId } = req.body;
    const todoList = new TodoListModel({ todoItemId, check, memberId }) as Document;
    await todoList.save();
    res.status(200).json({ message: 'Test created successfully' });
  }
};

export default handler;
