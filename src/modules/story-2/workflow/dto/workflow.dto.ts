import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsString } from 'class-validator';

export class SuspensionRequestDto {
  @ApiProperty()
  @IsArray()
  @IsString({ each: true })
  userIds: string[];
}

export class WorkflowResponseDto {
  @ApiProperty()
  message: string;

  @ApiProperty()
  requestId: string;
}
