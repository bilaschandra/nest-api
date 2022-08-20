import { DataSource } from 'typeorm';
import { databaseConfig, DEVELOPMENT, PRODUCTION, TEST } from './modules/database/database.config';

export const TypeOrmModuleOption = () => {
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

  return config;
};

const TypeOrmConfig = new DataSource({
   ...TypeOrmModuleOption(),
 });

export default TypeOrmConfig;
