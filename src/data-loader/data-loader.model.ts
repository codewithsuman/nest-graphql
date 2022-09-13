import DataLoader from 'dataloader';
import { User } from '../user/entities/user.entity';

export interface IDataLoaders {
  createUserLoader: DataLoader<number, User>;
}

export interface LoaderQuery<T = any, P = any> {
  obj: T;
  params: P;
}
