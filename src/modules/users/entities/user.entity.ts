import { Entity, Column, OneToMany, PrimaryColumn } from 'typeorm';
import { UserSchedule } from './user-schedule.entity';
import { AuthEntity } from '../../auth/entities/auth.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class User {
  @Column()
  @PrimaryColumn()
  @ApiProperty()
  uid: string;

  @Column({ nullable: false })
  @ApiProperty()
  name: string;

  @OneToMany(type => AuthEntity, auth => auth.user)
  auths: AuthEntity[];

  @Column({
    nullable: true,
  })
  @ApiProperty()
  key: string;

  @Column({
    nullable: true,
  })
  @ApiProperty()
  nid: string;

  @Column({
    nullable: true,
  })
  @ApiProperty()
  address: string;

  @OneToMany(type => UserSchedule, userSchedule => userSchedule.user)
  schedule: UserSchedule[];
}
