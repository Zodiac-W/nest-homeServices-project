import {
  IsArray,
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsStrongPassword,
  Length,
} from 'class-validator';

export class CreateTechnDto {
  @IsNotEmpty()
  @Length(4, 30)
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsStrongPassword()
  password: string;

  @IsNotEmpty()
  @IsNumber()
  location: number;

  @IsNotEmpty()
  @IsArray()
  services: string[];

  @IsNotEmpty()
  @IsBoolean()
  isTechn: boolean;
}
