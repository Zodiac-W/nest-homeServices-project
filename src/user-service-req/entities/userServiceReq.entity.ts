import { HomeServices } from 'src/home-services/entities/homeServices.entity';
import { User } from 'src/users/entities/user.entity';
import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class UserServiceReq {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne((type) => User, (user) => user.userServiceReq)
  user: User;

  @ManyToOne(
    (type) => HomeServices,
    (homeService) => homeService.userServiceReq,
  )
  homeService: HomeServices;
}
