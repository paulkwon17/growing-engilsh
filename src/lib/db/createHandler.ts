import { NextApiRequest, NextApiResponse } from 'next';
import nextConnect, { Middleware } from 'next-connect';

import dbConnect from './dbConnect';

const createHandler = (...middleware: Middleware<NextApiRequest, NextApiResponse>[]) => {
  return nextConnect<NextApiRequest, NextApiResponse>({
    onError: (err, _req, res) => {
      console.error(err);
      res.status(500).json({ message: 'Internal server error' });
    },
    onNoMatch: (_req, _res) => {
      // 어떠한 route에도 매치되지 않았을 때 처리 내용
    },
  }).use(dbConnect, ...middleware);
};

export default createHandler;
