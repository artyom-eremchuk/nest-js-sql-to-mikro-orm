import { UserPostgresService } from '../services/user.postgres.service';
import { Post, Body } from '@nestjs/common';
import { PostgresPrefix } from '../../../decorators/database-prefix.decorator';
import { CreateUserRequestDto } from '../dtos/request/create-user.request.dto';

@PostgresPrefix()
export class UserPostgresController {
  constructor(private readonly userService: UserPostgresService) {}

  @Post('users')
  async create(@Body() dto: CreateUserRequestDto) {
    return this.userService.create(dto);
  }
}
