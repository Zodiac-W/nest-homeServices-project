import { UserServiceReq } from 'src/user-service-req/entities/userServiceReq.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class HomeServices {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  homeServices_name: string;

  @Column()
  homeServices_estimated_time_in_days: number;

  // @Column()
  // homeServices_discription: string;

  @OneToMany(
    (type) => UserServiceReq,
    (userServiceReq) => userServiceReq.homeService,
  )
  userServiceReq: UserServiceReq;
}
