import { Controller, Get } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { FinancialsService } from './financials.service';
import { FinancialReportDto } from './dto/financials.dto';

@ApiTags('Financials')
@Controller('finance/reports')
export class FinancialsController {
  constructor(private readonly financialsService: FinancialsService) {}

  @Get()
  @ApiOperation({ summary: 'Get financial data' })
  @ApiResponse({ status: 200, type: FinancialReportDto })
  async getFinancialReports(): Promise<FinancialReportDto> {
    return this.financialsService.getReport();
  }
}
