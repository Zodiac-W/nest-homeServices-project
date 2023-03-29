import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HomeServices } from './entities/homeServices.entity';
import { HomeServicesService } from './home-services.service';

@Module({
  imports: [TypeOrmModule.forFeature([HomeServices])],
  providers: [HomeServicesService],
  exports: [HomeServicesService],
})
export class HomeServicesModule {}
