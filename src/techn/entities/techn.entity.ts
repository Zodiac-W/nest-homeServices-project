import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Techn {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  techn_name: string;

  @Column()
  techn_email: string;

  @Column()
  techn_pass: string;

  @Column()
  techn_location: number;

  @Column('simple-array')
  techn_srvices: string[];

  @Column()
  techn_is_techn: boolean;
}
