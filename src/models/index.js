// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { UIDS } = initSchema(schema);

export {
  UIDS
};