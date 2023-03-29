import { UserServiceReq } from 'src/user-service-req/entities/userServiceReq.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  user_name: string;

  @Column()
  user_email: string;

  @Column()
  user_pass: string;

  @Column()
  user_location: number;

  @Column()
  user_is_techn: boolean;

  @OneToMany((type) => UserServiceReq, (userServiceReq) => userServiceReq.user)
  userServiceReq: UserServiceReq;
}
