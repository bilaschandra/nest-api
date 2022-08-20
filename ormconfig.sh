#!/usr/bin/env bash

cat >ormconfig.json <<EOL
{
  "type": "mysql",
  "host": "$DB_HOST",
  "port": "$DB_PORT",
  "username": "$DB_USERNAME",
  "password": "$DB_PASSWORD",
  "database": "$DB_DATABASE",
  "maxQueryExecutionTime": 10000,
  "synchronize": false,
  "logging": [
    "error"
  ],
  "entities": [
    "src/modules/**/entities/*{.js,.ts}"
  ],
  "migrationsTableName": "migrations",
  "cli": {
    "migrationsDir": "src/migrations"
  },
  "keepConnectionAlive": true,
  "migrations": [
    "src/migrations/*{.ts,.js}"
  ]
}
EOL