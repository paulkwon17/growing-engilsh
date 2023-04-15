import createHandler from 'lib/db/createHandler';
import TodoItem from 'lib/models/todo/todoItem.model';
import { NextApiRequest, NextApiResponse } from 'next';

const handler = createHandler();

handler.get(async (_req: NextApiRequest, res: NextApiResponse) => {
  const data = await TodoItem.find({});
  res.status(200).json(data);
});

handler.post(async (req: NextApiRequest, res: NextApiResponse) => {
  const { name, deadline } = req.body;
  const todoItem = new TodoItem({ name, deadline });
  await todoItem.save();
  res.status(200).json({ message: 'Test created successfully' });
});

export default handler;
