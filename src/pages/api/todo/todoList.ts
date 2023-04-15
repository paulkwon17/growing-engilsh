import createHandler from 'lib/db/createHandler';
import TodoList from 'lib/models/todo/todoList.model';
import { NextApiRequest, NextApiResponse } from 'next';

const handler = createHandler();

handler.get(async (_req: NextApiRequest, res: NextApiResponse) => {
  const data = await TodoList.find({});
  res.status(200).json(data);
});
handler.post(async (req: NextApiRequest, res: NextApiResponse) => {
  const { todoItemId, check, sid } = req.body;
  const todoList = new TodoList({ todoItemId, check, sid });
  await todoList.save();
  res.status(200).json({ message: 'Test created successfully' });
});

export default handler;
