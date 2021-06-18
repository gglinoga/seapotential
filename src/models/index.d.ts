import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class BlogPosts {
  readonly id: string;
  readonly title?: string;
  readonly date?: string;
  readonly author?: string;
  readonly body?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<BlogPosts>);
  static copyOf(source: BlogPosts, mutator: (draft: MutableModel<BlogPosts>) => MutableModel<BlogPosts> | void): BlogPosts;
}