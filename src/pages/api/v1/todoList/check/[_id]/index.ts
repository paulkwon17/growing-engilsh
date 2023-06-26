import { ApiRequest, TodoListInfo } from '@type/api';
import dbConnect from 'lib/db/dbConnect';
import { TodoListModel } from 'lib/models';
import { NextApiResponse } from 'next';

const handler = async (req: ApiRequest<TodoListInfo>, res: NextApiResponse) => {
  await dbConnect();
  if (req.method === 'POST') {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    const { _id } = req.query as { _id: string };

    await TodoListModel.updateOne({ _id }, { $set: { check: false } });
    res.status(200).json({ message: 'Test created successfully' });
  }
};

export default handler;
