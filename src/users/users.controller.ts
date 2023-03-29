import { Body, Controller, Get, Post, Request } from '@nestjs/common';
import { CreateUserDto } from './dto/create-users-dto';
import { LoginUserDto } from './dto/login-user-dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // @Get()
  // // @UseGuards(JwtAuthGuard)
  // getUsers(@Request() req) {
  //   const userId = req.userId;
  //   const userDate = this.usersService.getUser(userId);
  //   return userDate;
  // }

  // @Post('signup')
  // signupUser(@Body() createUserDto: CreateUserDto) {
  //   return this.usersService.signupUser(createUserDto);
  // }

  // @Post('login')
  // loginUser(@Body() loginUserDto: LoginUserDto) {
  //   return this.usersService.loginUser(loginUserDto);
  // }
}
