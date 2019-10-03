import { createConnection } from 'typeorm';
import { Provider } from '@nestjs/common';
// import { ENV } from '@env/env';

export const databaseProviders: Provider[] = [
  {
    provide: 'DbConnectionToken',
    useFactory: async (env={}) => {
      return createConnection({
        type: 'mysql',
        host: env.DB_HOST || 'db',
        port: env.DB_PORT || '3306',
        username: env.DB_USERNAME || 'root',
        password: env.DB_PASSWORD || 'root',
        database: env.DB_DATABASE || 'clock',
        entities: [__dirname + '/../**/*.entity.{ts,js}'],
        synchronize: true,
        logging: 'all',
      });
    },
    // inject: [ENV],
  },
];