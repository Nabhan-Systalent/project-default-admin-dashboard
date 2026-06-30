import { Controller, Get, Query } from '@nestjs/common';
import { ApiTags, ApiResponse } from '@nestjs/swagger';
import { UsersService } from './users.service';
import { UserDto, SearchUsersQueryDto } from './dto';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  @ApiResponse({ status: 200, type: [UserDto], description: 'List of users' })
  async searchUsers(@Query() query: SearchUsersQueryDto): Promise<UserDto[]> {
    return this.usersService.searchUsers(query);
  }
}
