import { EntityManager, EntityRepository } from '@mikro-orm/core';
import { User } from '../entities/user.entity';
import { CreateUserRequestDto } from '../dtos/request/create-user.request.dto';
import { ConflictException } from '@nestjs/common';

export class UserRepository extends EntityRepository<User> {
  constructor(em: EntityManager) {
    super(em, User);
  }

  async createUser(dto: CreateUserRequestDto) {
    const exists = await this.em.findOne(User, { email: dto.email });

    if (exists) throw new ConflictException('User exists');

    const user = this.em.create(User, dto);
    await this.em.persistAndFlush(user);

    return user;
  }
}
