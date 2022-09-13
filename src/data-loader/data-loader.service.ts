import { Injectable } from '@nestjs/common';
import DataLoader from 'dataloader';
import { Post } from '../post/entities/post.entity';
import { User } from '../user/entities/user.entity';
import { UserService } from '../user/user.service';
import { IDataLoaders, LoaderQuery } from './data-loader.model';

@Injectable()
export class DataLoaderService {
  constructor(private userService: UserService) {}

  createLoader(): IDataLoaders {
    const createUserLoader = new DataLoader<number, User>(async (ids) =>
      this.userService.findByIds(ids as number[]),
    );
    return {
      createUserLoader,
    };
  }

  /**
   * Each defined loader will register a resolver that coalesces each of
   * the request and combines them into a single, bulk query.
   */
  defaultLoader() {
    return {
      Post: {
        /**
         * Each loader function has the signature loader(queries, context).
         * queries is an array of objects defined as { obj, params, info } where
         *  obj is the current object,
         *  params are the GraphQL params (those are the first two parameters of a normal resolver) and
         *  info contains additional information about the query and execution.
         *    info object is only available in the loader if the cache is set to false.
         *
         * The context is the GraphQL context, and it includes a reply object.
         */
        updatedBy: async (queries: LoaderQuery<Post>[], { reply }) =>
          this.userService.findByIds(queries.map(({ obj }) => obj.userId)),
        // It is also possible disable caching with:
        // updatedBy: {
        //   loader: async (queries, { reply }) =>
        //     this.userService.findByIds(queries.map(({ obj }) => obj.userId)),
        //   opts: {
        //     cache: false,
        //   },
        // },
      },
    };
  }
}
