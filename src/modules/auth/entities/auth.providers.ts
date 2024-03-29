import { DataSource } from 'typeorm';
import { AuthEntity } from './auth.entity';
import {
  AUTH_REPOSITORY_TOKEN,
  DB_CONNECTION_TOKEN,
  USER_REPOSITORY_TOKEN,
} from '../../../common/config/database.tokens.constants';
import { User } from '../../users/entities/user.entity';

export const AuthProviders = [
  {
    provide: AUTH_REPOSITORY_TOKEN,
    useFactory: (dataSource: DataSource) => dataSource.getRepository(AuthEntity),
    inject: [DB_CONNECTION_TOKEN],
  },
  {
    provide: USER_REPOSITORY_TOKEN,
    useFactory: (dataSource: DataSource) => dataSource.getRepository(User),
    inject: [DB_CONNECTION_TOKEN],
  },
];
