import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HomeServicesModule } from 'src/home-services/home-services.module';
import { UsersModule } from 'src/users/users.module';
import { UserServiceReq } from './entities/userServiceReq.entity';
import { UserServiceReqService } from './user-service-req.service';

@Module({
  imports: [
    HomeServicesModule,
    UsersModule,
    TypeOrmModule.forFeature([UserServiceReq]),
  ],
  providers: [UserServiceReqService],
  exports: [UserServiceReqService],
})
export class UserServiceReqModule {}
