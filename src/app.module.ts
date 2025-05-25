import { Module } from '@nestjs/common';
import { PostgresModule } from './modules/postgres/postgres.module';
import { MysqlModule } from './modules/mysql/mysql.module';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [PostgresModule, MysqlModule, UserModule],
})
export class AppModule {}
