import { Inject, Injectable } from '@nestjs/common';
import { UserRepository } from '../repositories/user.repository';
import { GetUserResponseDto } from '../dtos/response/get-user.dto';
import { CreateUserRequestDto } from '../dtos/request/create-user.request.dto';

@Injectable()
export class UserPostgresService {
  constructor(
    @Inject('POSTGRES_USER_REPOSITORY')
    private readonly userRepository: UserRepository,
  ) {}

  async create(dto: CreateUserRequestDto): Promise<GetUserResponseDto> {
    return this.userRepository.createUser(dto);
  }
}
