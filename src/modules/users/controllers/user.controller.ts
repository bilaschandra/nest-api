import { Controller, Get, Post, Body } from '@nestjs/common';
import { User } from '../entities/user.entity';
import { UserDto } from '../dto/user.dto';
import { UserService } from '../services/users.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  getUsers(): Promise<User[]> {
    return this.userService.getUsersWithoutKey();
  }

  @Post()
  addUser(@Body() userDto: UserDto): Promise<User> {
    return this.userService.addUser(userDto);
  }
}
