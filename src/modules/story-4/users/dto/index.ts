import { ApiProperty } from '@nestjs/swagger';

export class UserDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  tier: 'free' | 'pro' | 'enterprise';

  @ApiProperty()
  signupDate: Date;
}

export class SearchUsersQueryDto {
  @ApiProperty({ required: false })
  email?: string;

  @ApiProperty({ required: false })
  id?: string;

  @ApiProperty({ required: false, enum: ['free', 'pro', 'enterprise'] })
  tier?: 'free' | 'pro' | 'enterprise';

  @ApiProperty({ required: false })
  signupDate?: string;
}
