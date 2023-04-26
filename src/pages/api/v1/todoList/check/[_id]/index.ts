import createHandler from 'lib/db/createHandler';
import TodoList from 'lib/models/todo/todoList.model';
import { NextApiRequest, NextApiResponse } from 'next';

const handler = createHandler();

handler.post(async (req: NextApiRequest, res: NextApiResponse) => {
  const { _id } = req.query;
  const { check } = req.body;
  await TodoList.updateOne({ _id }, { $set: { check: false } });
  res.status(200).json({ message: 'Test created successfully' });
  console.log(check);
});

export default handler;
