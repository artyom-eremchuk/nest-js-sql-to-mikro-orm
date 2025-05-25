import { EntityManager } from '@mikro-orm/core';
import { getEntityManagerToken } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { UserMysqlController } from './controllers/user.mysql.controller';
import { UserPostgresController } from './controllers/user.postgres.controller';
import { UserRepository } from './repositories/user.repository';
import { UserMysqlService } from './services/user.mysql.service';
import { UserPostgresService } from './services/user.postgres.service';

@Module({
  controllers: [UserPostgresController, UserMysqlController],
  providers: [
    {
      provide: 'POSTGRES_USER_REPOSITORY',
      useFactory: (em: EntityManager) => new UserRepository(em),
      inject: [getEntityManagerToken('postgres')],
    },
    {
      provide: 'MYSQL_USER_REPOSITORY',
      useFactory: (em: EntityManager) => new UserRepository(em),
      inject: [getEntityManagerToken('mysql')],
    },
    UserPostgresService,
    UserMysqlService,
  ],
})
export class UserModule {}
