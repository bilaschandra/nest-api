import { Provider } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { databaseConfig, DEVELOPMENT, PRODUCTION, TEST, TYPEORM } from './database.config';

export const databaseProviders: Provider[] = [
  {
    provide: TYPEORM,
    useFactory: async () => {
      let config;
      switch (process.env.NODE_ENV) {
      case DEVELOPMENT:
         config = databaseConfig.development;
         break;
      case TEST:
         config = databaseConfig.test;
         break;
      case PRODUCTION:
         config = databaseConfig.production;
         break;
      default:
         config = databaseConfig.development;
      }

      const dataSource = new DataSource({
        ...config,
      });

      return dataSource.initialize();
    },
  },
];
