import { IsString, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UserDto {
  @ApiProperty()	
  uid: string;

  @ApiProperty()	
  key: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  name: string;

  constructor(user: any) {
    this.uid = user.uid;
    this.name = user.name;
  }
}
