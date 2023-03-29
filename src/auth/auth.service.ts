import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateTechnDto } from 'src/techn/dto/create-techn-dto';
import { LoginTechnDto } from 'src/techn/dto/login-techn-dto';
import { TechnService } from 'src/techn/techn.service';
import { CreateUserDto } from 'src/users/dto/create-users-dto';
import { LoginUserDto } from 'src/users/dto/login-user-dto';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private technService: TechnService,
    private jwtService: JwtService,
  ) {}

  async validateUsers(payload: any): Promise<any> {
    if (!payload.isTechn) {
      const user = await this.usersService.getUser(payload.sub);

      if (user) {
        return user;
      }
      return null;
    } else {
      const techn = await this.technService.getTechn(payload.sub);
      if (techn) {
        return techn;
      }
      return null;
    }
  }

  async loginUser(loginUserDto: LoginUserDto) {
    const user = await this.usersService.loginUser(loginUserDto);
    const payload = { sub: user.id, isTechn: user.user_is_techn };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async signupUser(createUserDto: CreateUserDto) {
    const user = await this.usersService.signupUser(createUserDto);
    const payload = { sub: user.id, isTechn: user.user_is_techn };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async signupTechn(createTechnDto: CreateTechnDto) {
    const techn = await this.technService.signupTechn(createTechnDto);
    const payload = { sub: techn.id, isTechn: techn.techn_is_techn };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async loginTechn(loginTechnDto: LoginTechnDto) {
    const techn = await this.technService.loginTechn(loginTechnDto);
    const payload = { sub: techn.id, isTechn: techn.techn_is_techn };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
