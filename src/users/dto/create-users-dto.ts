import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsStrongPassword,
  Length,
} from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ description: 'The name of the user', minimum: 4, maximum: 30 })
  @IsNotEmpty()
  @Length(4, 30)
  name: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsStrongPassword()
  password: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  location: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsBoolean()
  isTechn: boolean;
}
