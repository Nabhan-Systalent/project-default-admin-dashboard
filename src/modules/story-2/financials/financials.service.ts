import { Injectable } from '@nestjs/common';
import { FinancialReportDto } from './dto/financials.dto';

@Injectable()
export class FinancialsService {
  async getReport(): Promise<FinancialReportDto> {
    return {
      period: '2026-Q2',
      revenue: 500000,
      expenses: 200000,
    };
  }
}
