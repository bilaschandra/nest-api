import { DataSource } from 'typeorm';
import { User } from './user.entity';
import {
  DB_CONNECTION_TOKEN,
  USER_REPOSITORY_TOKEN,
} from '../../../common/config/database.tokens.constants';

export const UserProviders = [
  {
    provide: USER_REPOSITORY_TOKEN,
    useFactory: (dataSource: DataSource) => dataSource.getRepository(User),
    inject: [DB_CONNECTION_TOKEN],
  },
];
