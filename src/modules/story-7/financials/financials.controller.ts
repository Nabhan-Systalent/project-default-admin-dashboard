import { Controller, Get } from '@nestjs/common';
import { FinancialsService } from './financials.service';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { FinancialReportDto } from '../users/dto';

@ApiTags('Financials')
@Controller('finance/reports')
export class FinancialsController {
  constructor(private readonly financialsService: FinancialsService) {}

  @Get()
  @ApiOkResponse({ type: FinancialReportDto })
  getFinancialReports(): FinancialReportDto {
    return this.financialsService.generateReport();
  }
}
