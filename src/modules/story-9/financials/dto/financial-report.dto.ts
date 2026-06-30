import { ApiProperty } from '@nestjs/swagger';

export class FinancialReportResponse {
  @ApiProperty({ description: 'The unique identifier for the generated report' })
  id: string;

  @ApiProperty({ description: 'The status of the report' })
  status: 'pending' | 'completed' | 'failed';

  @ApiProperty({ description: 'The generated report data payload', type: Object })
  data: Record<string, any>;

  @ApiProperty({ description: 'Timestamp when the report was generated' })
  createdAt: string;
}
