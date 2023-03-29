import { Body, Controller, Post } from '@nestjs/common';
import { CreateTechnDto } from 'src/techn/dto/create-techn-dto';
import { LoginTechnDto } from 'src/techn/dto/login-techn-dto';
import { CreateUserDto } from 'src/users/dto/create-users-dto';
import { LoginUserDto } from 'src/users/dto/login-user-dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('user/signup')
  signupUser(@Body() createUserDto: CreateUserDto) {
    return this.authService.signupUser(createUserDto);
  }

  @Post('user/login')
  loginUser(@Body() loginUserDto: LoginUserDto) {
    return this.authService.loginUser(loginUserDto);
  }

  @Post('techn/signup')
  signupTechn(@Body() createTechnDto: CreateTechnDto) {
    return this.authService.signupTechn(createTechnDto);
  }

  @Post('techn/login')
  loginTechn(@Body() loginTechnDto: LoginTechnDto) {
    return this.authService.loginTechn(loginTechnDto);
  }
}
