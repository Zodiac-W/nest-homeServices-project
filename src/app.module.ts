import { Module } from '@nestjs/common';
import { InjectDataSource, TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './users/entities/user.entity';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { TechnModule } from './techn/techn.module';
import { Techn } from './techn/entities/techn.entity';
import { HomeServicesModule } from './home-services/home-services.module';
import { HomeServices } from './home-services/entities/homeServices.entity';
import { UserServiceReqModule } from './user-service-req/user-service-req.module';
import { UserServiceReq } from './user-service-req/entities/userServiceReq.entity';
import { DataSource } from 'typeorm';
import { ConfigModule } from '@nestjs/config';
import database from 'config/database.config';
import { TypeOrmConfigService } from 'db/typeorm-config.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [database],
      envFilePath: ['./.env'],
    }),
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmConfigService,
      dataSourceFactory: async (options) => {
        const dataSource = await new DataSource(options).initialize();
        return dataSource;
      },
    }),
    AuthModule,
    UsersModule,
    TechnModule,
    HomeServicesModule,
    UserServiceReqModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(
    @InjectDataSource()
    private dataSource: DataSource,
  ) {
    console.log(dataSource);
  }
}

// @Module({
//   imports: [
//     TypeOrmModule.forRoot({
//       type: 'mysql',
//       host: 'localhost',
//       port: 3306,
//       username: 'root',
//       password: '#rootZodiac11#',
//       database: 'typeorm_2',
//       entities: [User, Techn, HomeServices, UserServiceReq],
//       synchronize: true,
//     }),
//     AuthModule,
//     UsersModule,
//     TechnModule,
//     HomeServicesModule,
//     UserServiceReqModule,
//   ],
//   controllers: [AppController],
//   providers: [AppService],
// })
// export class AppModule {}
