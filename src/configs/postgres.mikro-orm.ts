import { MikroOrmModuleSyncOptions } from '@mikro-orm/nestjs';
import { PostgreSqlDriver } from '@mikro-orm/postgresql';
import { Migrator } from '@mikro-orm/migrations';
import { CustomMigrationGenerator } from '../migrations/generator/CustomMigrationGenerator';

const postgresConfig: MikroOrmModuleSyncOptions = {
  host: 'localhost',
  port: 5555,
  dbName: 'sql-to-mikro-orm',
  user: 'postgres',
  password: 'qwerty',
  driver: PostgreSqlDriver,
  entities: ['dist/**/*.entity.js'],
  entitiesTs: ['src/**/*.entity.ts'],
  migrations: {
    path: './dist/migrations/postgres',
    pathTs: './src/migrations/postgres',
    snapshot: false,
    glob: '!(*.d).{js,ts}',
    tableName: 'sql-to-mikro-orm-migrations',
    transactional: true,
    allOrNothing: true,
    emit: 'ts',
    disableForeignKeys: false,
    generator: CustomMigrationGenerator,
  },
  extensions: [Migrator],
};

export default postgresConfig;
