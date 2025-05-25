import { UserMysqlService } from '../services/user.mysql.service';
import { Post, Body } from '@nestjs/common';
import { MysqlPrefix } from 'src/decorators/database-prefix.decorator';
import { CreateUserRequestDto } from '../dtos/request/create-user.request.dto';

@MysqlPrefix()
export class UserMysqlController {
  constructor(private readonly userService: UserMysqlService) {}

  @Post('users')
  async create(@Body() dto: CreateUserRequestDto) {
    return this.userService.create(dto);
  }
}
