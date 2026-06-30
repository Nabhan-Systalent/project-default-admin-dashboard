import { ApiProperty } from '@nestjs/swagger';

export class UserDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  email: string;
}

export class BulkSuspensionRequestDto {
  @ApiProperty({ type: [String] })
  userIds: string[];

  @ApiProperty()
  reason: string;
}

export class FinancialReportDto {
  @ApiProperty()
  reportId: string;

  @ApiProperty()
  totalAmount: number;

  @ApiProperty()
  currency: string;
}
