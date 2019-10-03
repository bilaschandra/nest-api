import { Entity, Column, OneToMany, PrimaryColumn } from 'typeorm';
import { UserSchedule } from './user-schedule.entity';
import { AuthEntity } from '../../auth/entities/auth.entity';
import { ApiModelProperty } from '@nestjs/swagger';

@Entity()
export class User {
  @Column()
  @PrimaryColumn()
  @ApiModelProperty()
  uid: string;

  @Column({ nullable: false })
  @ApiModelProperty()
  name: string;

  @OneToMany(type => AuthEntity, auth => auth.user)
  auths: AuthEntity[];

  @Column({
    nullable: true,
  })
  @ApiModelProperty()
  key: string;

  @OneToMany(type => UserSchedule, userSchedule => userSchedule.user)
  schedule: UserSchedule[];
}
