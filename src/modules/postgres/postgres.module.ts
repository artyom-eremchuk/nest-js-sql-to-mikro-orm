import { getEntityManagerToken, MikroOrmModule } from '@mikro-orm/nestjs';
import { postgresConfig } from 'src/configs';
import { Module } from '@nestjs/common';
import { User } from '../user/entities/user.entity';
import { EntityManager } from '@mikro-orm/core';

@Module({
  imports: [
    MikroOrmModule.forRoot({
      ...postgresConfig,
      registerRequestContext: false, // Отключаем автоматический контекст
      contextName: 'postgres', // Уникальное имя контекста
    }),
    MikroOrmModule.forFeature({
      entities: [User],
      contextName: 'postgres',
    }),
  ],
  providers: [
    {
      provide: 'POSTGRES_ENTITY_MANAGER',
      useFactory: (em: EntityManager) => em,
      inject: [getEntityManagerToken('postgres')],
    },
  ],
  exports: ['POSTGRES_ENTITY_MANAGER'],
})
export class PostgresModule {}
