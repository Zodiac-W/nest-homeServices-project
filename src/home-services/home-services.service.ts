import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateHomeServicesDto } from './dto/create-homeServices-dto';
import { HomeServices } from './entities/homeServices.entity';

@Injectable()
export class HomeServicesService {
  constructor(
    @InjectRepository(HomeServices)
    private homeServicesRepository: Repository<HomeServices>,
  ) {}

  //Create a new service
  async addService(createHomeServicesDto: CreateHomeServicesDto): Promise<any> {
    const { name, estimatedTimeInDays } = createHomeServicesDto;

    const homeServices = new HomeServices();
    homeServices.homeServices_name = name;
    homeServices.homeServices_estimated_time_in_days = estimatedTimeInDays;

    await this.homeServicesRepository.save(homeServices);

    return homeServices;
  }

  //Get an existing service and send back its id and name
  async getHomeService(id: number) {
    const homeServices = await this.homeServicesRepository.findOne({
      where: { id },
    });

    const serviceID = homeServices.id;
    const name = homeServices.homeServices_name;

    return { serviceID, name };
  }

  async getAllServices(): Promise<HomeServices[]> {
    const services = await this.homeServicesRepository.find();
    return services;
  }

  async getServiceByName(serviceName: string) {
    const service = await this.homeServicesRepository.findOne({
      where: { homeServices_name: serviceName },
    });

    return service;
  }
}
