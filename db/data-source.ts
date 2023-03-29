import { HomeServices } from 'src/home-services/entities/homeServices.entity';
import { Techn } from 'src/techn/entities/techn.entity';
import { UserServiceReq } from 'src/user-service-req/entities/userServiceReq.entity';
import { User } from 'src/users/entities/user.entity';
import { DataSource, DataSourceOptions } from 'typeorm';

export const AppDataSource = new DataSource({
  type: process.env.DATABASE_TYPE,
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  synchronize: process.env.DATABASE_SYNCHRONIZE === 'true',
  // entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  entities: [User, Techn, HomeServices, UserServiceReq],
  migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
  cli: {
    entitiesDir: 'src',
    migrationsDir: './migrations',
    subscribersDir: 'subscriber',
  },
} as DataSourceOptions);
