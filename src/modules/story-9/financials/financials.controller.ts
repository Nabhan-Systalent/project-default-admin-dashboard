import { Controller, Get } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { FinancialsService } from './financials.service';
import { FinancialReportResponse } from './dto/financial-report.dto';

@ApiTags('Financials')
@Controller('finance')
export class FinancialsController {
  constructor(private readonly financialsService: FinancialsService) {}

  @Get('reports')
  @ApiOperation({ summary: 'Get financial data' })
  @ApiResponse({ status: 200, description: 'Report generated', type: FinancialReportResponse })
  async getFinancialReports(): Promise<FinancialReportResponse> {
    return await this.financialsService.getFinancialReports();
  }
}
