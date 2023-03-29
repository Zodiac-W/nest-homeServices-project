import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTechnDto } from './dto/create-techn-dto';
import { Techn } from './entities/techn.entity';
import * as bcrypt from 'bcrypt';
import { LoginTechnDto } from './dto/login-techn-dto';

@Injectable()
export class TechnService {
  constructor(
    @InjectRepository(Techn)
    private technRepository: Repository<Techn>,
  ) {}

  // Create a new techn and return the created techn without the password
  async signupTechn(createTechnDto: CreateTechnDto): Promise<any> {
    const { name, email, password, location, services, isTechn } =
      createTechnDto;

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const techn = new Techn();
    techn.techn_name = name;
    techn.techn_email = email;
    techn.techn_pass = hash;
    techn.techn_location = location;
    techn.techn_srvices = services;
    techn.techn_is_techn = isTechn;

    await this.technRepository.save(techn);

    const { techn_pass, ...technPassed } = techn;
    return technPassed;
  }

  // Login user and return the user without pass if found and null if not
  async loginTechn(loginTechnDto: LoginTechnDto): Promise<any> {
    const { email, password } = loginTechnDto;

    const techn = await this.technRepository.findOne({
      where: { techn_email: email },
    });

    const match = await bcrypt.compare(password, techn.techn_pass);

    if (!match) {
      return null;
    }
    const { techn_pass, ...technPassed } = techn;
    return technPassed;
  }

  // Get single user and return name and email
  async getTechn(id: number) {
    const techn = await this.technRepository.findOne({ where: { id } });

    const technId = techn.id;
    const email = techn.techn_email;
    const isTechn = techn.techn_is_techn;

    return { technId, isTechn, email };
  }
}
