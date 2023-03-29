import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { HomeServicesService } from 'src/home-services/home-services.service';
import { UsersService } from 'src/users/users.service';
import { Repository } from 'typeorm';
import { UserServiceReq } from './entities/userServiceReq.entity';

@Injectable()
export class UserServiceReqService {
  constructor(
    @InjectRepository(UserServiceReq)
    private userServiceReqRepository: Repository<UserServiceReq>,
    private homeServicesService: HomeServicesService,
    private usersService: UsersService,
  ) {}

  //Create new service request
  async CreateserviceReq(userId: number, serviceName: string): Promise<any> {
    const service = await this.homeServicesService.getServiceByName(
      serviceName,
    );

    const user = await this.usersService.getOneUser(userId);

    const serviceReq = new UserServiceReq();

    serviceReq.user = user;
    serviceReq.homeService = service;

    await this.userServiceReqRepository.save(serviceReq);

    return serviceReq;
  }
}
