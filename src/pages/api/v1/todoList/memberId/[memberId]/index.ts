import createHandler from 'lib/db/createHandler';
import TodoList from 'lib/models/todo/todoList.model';
import { NextApiRequest, NextApiResponse } from 'next';

const handler = createHandler();

handler.get(async (req: NextApiRequest, res: NextApiResponse) => {
  const { memberId } = req.query;
  const data = await TodoList.find({ memberId });
  res.status(200).json(data);
});

export default handler;
