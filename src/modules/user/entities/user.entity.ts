import {
  Entity,
  EntityRepositoryType,
  PrimaryKey,
  Property,
} from '@mikro-orm/core';
import { UserRepository } from '../repositories/user.repository';
import { ApiProperty } from '@nestjs/swagger';

@Entity({ tableName: 'users', repository: () => UserRepository })
export class User {
  @PrimaryKey()
  @ApiProperty({ example: 1 })
  id!: number;

  @Property()
  @ApiProperty({ example: 'John Doe' })
  name!: string;

  @Property({ unique: true })
  @ApiProperty({ example: 'john.doe@example.com' })
  email!: string;

  [EntityRepositoryType]?: UserRepository;
}
