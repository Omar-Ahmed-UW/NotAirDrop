// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { SendURL, UIDS } = initSchema(schema);

export {
  SendURL,
  UIDS
};