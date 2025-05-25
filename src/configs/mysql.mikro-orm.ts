import { MikroOrmModuleSyncOptions } from '@mikro-orm/nestjs';
import { MySqlDriver } from '@mikro-orm/mysql';
import { Migrator } from '@mikro-orm/migrations';
import { CustomMigrationGenerator } from '../migrations/generator/CustomMigrationGenerator';

const mysqlConfig: MikroOrmModuleSyncOptions = {
  host: 'localhost',
  port: 3306,
  dbName: 'sql-to-mikro-orm',
  user: 'root',
  password: 'qwerty',
  driver: MySqlDriver,
  entities: ['dist/**/*.entity.js'],
  entitiesTs: ['src/**/*.entity.ts'],
  migrations: {
    path: './dist/migrations/mysql',
    pathTs: './src/migrations/mysql',
    snapshot: false,
    glob: '!(*.d).{js,ts}',
    tableName: 'sql-to-mikro-orm-migrations',
    transactional: true,
    allOrNothing: true,
    emit: 'ts',
    disableForeignKeys: true,
    generator: CustomMigrationGenerator,
  },
  extensions: [Migrator],
};

export default mysqlConfig;
