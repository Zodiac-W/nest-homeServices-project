import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { HomeServices } from 'src/home-services/entities/homeServices.entity';
import { Techn } from 'src/techn/entities/techn.entity';
import { UserServiceReq } from 'src/user-service-req/entities/userServiceReq.entity';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
  constructor(private configService: ConfigService) {}

  createTypeOrmOptions() {
    return {
      type: this.configService.get('database.type'),
      host: this.configService.get('database.host'),
      port: this.configService.get('database.port'),
      username: this.configService.get('database.username'),
      password: this.configService.get('database.password'),
      database: this.configService.get('database.database'),
      synchronize: this.configService.get('database.synchronize'),
      dropSchema: false,
      keepConnectionAlive: true,
      logging: this.configService.get('app.nodeEnv') !== 'production',
      // entities: [__dirname + '/../**/*.entity{.ts,.js}'],
      entities: [User, Techn, HomeServices, UserServiceReq],
      migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
      cli: {
        entitiesDir: 'src',
        migrationsDir: './migrations',
        subscribersDir: 'subscriber',
      },
    };
  }
}
