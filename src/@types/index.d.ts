import { IDataLoaders } from '../data-loader/data-loader.model';

declare global {
  interface IGraphQLContext {
    loaders: IDataLoaders;
    randomValue: number;
  }
}
