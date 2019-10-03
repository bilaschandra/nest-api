import { IsString, IsNotEmpty } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class UserDto {
  @ApiModelProperty()	
  uid: string;

  @ApiModelProperty()	
  key: string;

  @IsString()
  @IsNotEmpty()
  @ApiModelProperty()
  name: string;

  constructor(user: any) {
    this.uid = user.uid;
    this.name = user.name;
  }
}
