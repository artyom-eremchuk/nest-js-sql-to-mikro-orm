import { Inject, Injectable } from '@nestjs/common';
import { UserRepository } from '../repositories/user.repository';
import { CreateUserRequestDto } from '../dtos/request/create-user.request.dto';
import { GetUserResponseDto } from '../dtos/response/get-user.dto';

@Injectable()
export class UserMysqlService {
  constructor(
    @Inject('MYSQL_USER_REPOSITORY')
    private readonly userRepository: UserRepository,
  ) {}

  async create(dto: CreateUserRequestDto): Promise<GetUserResponseDto> {
    return this.userRepository.createUser(dto);
  }
}
