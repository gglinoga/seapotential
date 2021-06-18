// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { BlogPosts } = initSchema(schema);

export {
  BlogPosts
};