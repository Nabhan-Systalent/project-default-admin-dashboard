import { Injectable } from '@nestjs/common';
import { UserDto, SearchUsersQueryDto } from './dto';

@Injectable()
export class UsersService {
  // In a real app, this would be a database repository
  private readonly users: UserDto[] = [
    { id: '1', email: 'alice@example.com', tier: 'pro', signupDate: new Date('2023-01-01') },
    { id: '2', email: 'bob@example.com', tier: 'free', signupDate: new Date('2023-02-01') },
  ];

  async searchUsers(query: SearchUsersQueryDto): Promise<UserDto[]> {
    return this.users.filter((user) => {
      if (query.id && user.id !== query.id) return false;
      if (query.email && !user.email.includes(query.email)) return false;
      if (query.tier && user.tier !== query.tier) return false;
      if (query.signupDate && user.signupDate.toISOString().split('T')[0] !== query.signupDate) return false;
      return true;
    });
  }
}
