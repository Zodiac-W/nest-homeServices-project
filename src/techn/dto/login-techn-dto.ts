import { IsEmail, IsNotEmpty } from 'class-validator';

export class LoginTechnDto {
  @IsNotEmpty()
  @IsEmail()
  email: string;
  @IsNotEmpty()
  password: string;
}
