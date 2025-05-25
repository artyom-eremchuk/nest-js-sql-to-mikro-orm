import { ApiProperty } from '@nestjs/swagger';
import {
  IsDefined,
  IsEmail,
  IsString,
  IsInt,
  IsOptional,
} from 'class-validator';

export class UpdateUserRequestDto {
  @IsInt()
  @IsDefined()
  @ApiProperty({ example: 1 })
  id!: number;

  @IsOptional()
  @IsString()
  @ApiProperty({ example: 'John Doe', required: false })
  name?: string;

  @IsOptional()
  @IsEmail()
  @ApiProperty({ example: 'john.doe@example.com', required: false })
  email?: string;
}
