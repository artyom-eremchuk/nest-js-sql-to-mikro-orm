import { getEntityManagerToken, MikroOrmModule } from '@mikro-orm/nestjs';
import { mysqlConfig } from 'src/configs';
import { Module } from '@nestjs/common';
import { User } from '../user/entities/user.entity';
import { EntityManager } from '@mikro-orm/core';

@Module({
  imports: [
    MikroOrmModule.forRoot({
      ...mysqlConfig,
      registerRequestContext: false, // Отключаем автоматический контекст
      contextName: 'mysql', // Уникальное имя контекста
    }),
    MikroOrmModule.forFeature({
      entities: [User],
      contextName: 'mysql',
    }),
  ],
  providers: [
    {
      provide: 'MYSQL_ENTITY_MANAGER',
      useFactory: (em: EntityManager) => em,
      inject: [getEntityManagerToken('mysql')],
    },
  ],
  exports: ['MYSQL_ENTITY_MANAGER'],
})
export class MysqlModule {}
