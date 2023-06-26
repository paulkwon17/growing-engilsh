// @types/mongodb.ts
import _mongoose, { connect } from 'mongoose';

declare global {
  // eslint-disable-next-line vars-on-top, no-var
  var mongoose: {
    promise: ReturnType<typeof connect> | null;
    conn: typeof _mongoose | null;
  };
}
