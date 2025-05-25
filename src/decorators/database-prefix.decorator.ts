import { applyDecorators, Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

export function PostgresPrefix() {
  return applyDecorators(ApiTags('Postgres API'), Controller('postgres'));
}

export function MysqlPrefix() {
  return applyDecorators(ApiTags('MySQL API'), Controller('mysql'));
}
