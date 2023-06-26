import { NextApiRequest } from 'next';

export interface CommonId {
  _id: string;
}

export interface BaseRequest extends NextApiRequest {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
}

export interface ApiRequest<T> extends BaseRequest {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  body: T;
}
