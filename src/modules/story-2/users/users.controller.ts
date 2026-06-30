import { Controller, Get } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { UsersService } from './users.service';
import { UserResponseDto } from './dto/users.dto';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  @ApiOperation({ summary: 'Search and filter users' })
  @ApiResponse({ status: 200, type: [UserResponseDto] })
  async searchUsers(): Promise<UserResponseDto[]> {
    return this.usersService.findAll();
  }
}
