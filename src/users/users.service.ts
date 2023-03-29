import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-users-dto';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';
import { LoginUserDto } from './dto/login-user-dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>, // @Inject(forwardRef(() => AuthService)) // private authService: AuthService,
  ) {}

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  // Create a new user and return the created user without the password
  async signupUser(createUserDto: CreateUserDto): Promise<any> {
    const { name, email, password, location, isTechn } = createUserDto;

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const user = new User();
    user.user_name = name;
    user.user_email = email;
    user.user_pass = hash;
    user.user_location = location;
    user.user_is_techn = isTechn;

    await this.usersRepository.save(user);

    const { user_pass, ...userPassed } = user;

    return userPassed;
  }

  // Login user and return the user without pass if found and null if not
  async loginUser(loginUserDto: LoginUserDto): Promise<any> {
    const { email, password } = loginUserDto;

    const user = await this.usersRepository.findOne({
      where: { user_email: email },
    });

    const match = await bcrypt.compare(password, user.user_pass);

    if (!match) {
      return null;
    }
    const { user_pass, ...userPassed } = user;
    return userPassed;
  }

  // Get single user and return name and email
  async getUser(id: number) {
    const user = await this.usersRepository.findOne({ where: { id } });

    const userId = user.id;
    const email = user.user_email;
    const isTechn = user.user_is_techn;

    return { userId, isTechn, email };
  }

  async getOneUser(id: number) {
    const user = await this.usersRepository.findOne({
      where: { id },
    });

    return user;
  }
}
