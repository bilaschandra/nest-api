export const TYPEORM = 'DbConnectionToken';
export const DEVELOPMENT = 'development';
export const TEST = 'test';
export const PRODUCTION = 'production';

let migrationsDir = 'src/migrations';
const defaultConn = {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    port: +process.env.DB_PORT,
    type: 'postgres',
    entities: [__dirname + '/../**/*.entity{.ts,.js}'],
    migrationsTableName: 'migrations',
    migrations: [migrationsDir + '/*.ts'],
    cli: {
        migrationsDir,
    },
    synchronize: false,
    autoLoadEntities: true,
    logging: 'error',
};

export const databaseConfig = {
    development: {
        ...defaultConn,
    },
    test: {
        ...defaultConn,
        type: 'sqlite',
    },
    production: {
        ...defaultConn,
    },
};