import { Injectable } from '@nestjs/common';
import { UserResponseDto } from './dto/users.dto';

@Injectable()
export class UsersService {
  private users: UserResponseDto[] = [
    { id: '1', username: 'admin', email: 'admin@example.com' },
    { id: '2', username: 'user', email: 'user@example.com' },
  ];

  async findAll(): Promise<UserResponseDto[]> {
    return this.users;
  }
}
