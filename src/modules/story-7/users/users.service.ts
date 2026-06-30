import { Injectable } from '@nestjs/common';
import { UserDto } from './dto';

@Injectable()
export class UsersService {
  private readonly users: UserDto[] = [
    { id: '1', email: 'user1@example.com' },
    { id: '2', email: 'user2@example.com' },
  ];

  findAll(): UserDto[] {
    return this.users;
  }
}
